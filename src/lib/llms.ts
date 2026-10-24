import { getCollection, type CollectionEntry } from 'astro:content';
import { source } from '../data/source';

type Doc = CollectionEntry<'docs'>;

export const SECTIONS = [
	{ dir: 'tutorials', label: 'Tutorials' },
	{ dir: 'how-to', label: 'How-To Guides' },
	{ dir: 'reference', label: 'Reference' },
	{ dir: 'explanation', label: 'Explanation' },
];

export const header = (site: URL) =>
	[
		'# Trail-code Docs',
		'',
		'> Unofficial community documentation for Trail-code (previously graft), the self-learning context layer for coding agents.',
		'',
		`Content is organized from the README of ${source.repo} at commit ${source.commit}, pulled on ${source.pulledOn}. For the latest, see the official repo.`,
		`Site: ${site.href}`,
	].join('\n');

/** Docs pages grouped by Diataxis section, in sidebar order. */
export async function sections() {
	const docs = await getCollection('docs');
	return SECTIONS.map(({ dir, label }) => ({
		label,
		pages: docs
			.filter((d) => d.id.startsWith(`${dir}/`))
			.sort((a, b) => (a.data.sidebar.order ?? 0) - (b.data.sidebar.order ?? 0)),
	}));
}

export const pageUrl = (doc: Doc, site: URL) => new URL(`/${doc.id}/`, site).href;

/** Page body as plain Markdown: MDX imports and component tags removed. */
export const markdownBody = (doc: Doc) =>
	(doc.body ?? '')
		.replace(/^import .*$/gm, '')
		.replace(/<\/?(Aside|Steps|Card|CardGrid)\b[^>]*>/g, '')
		.replace(/\n{3,}/g, '\n\n')
		.trim();

export const textResponse = (body: string) =>
	new Response(body + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
