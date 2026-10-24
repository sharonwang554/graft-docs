import type { APIRoute } from 'astro';
import { header, pageUrl, sections, textResponse } from '../lib/llms';

export const GET: APIRoute = async ({ site }) => {
	const parts = [header(site!)];
	for (const { label, pages } of await sections()) {
		parts.push(`## ${label}`, pages.map((p) => `- [${p.data.title}](${pageUrl(p, site!)}): ${p.data.description}`).join('\n'));
	}
	parts.push('## Optional', `- [Full documentation](${new URL('/llms-full.txt', site).href}): every page above in one Markdown file`);
	return textResponse(parts.join('\n\n'));
};
