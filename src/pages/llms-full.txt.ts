import type { APIRoute } from 'astro';
import { header, markdownBody, pageUrl, sections, textResponse } from '../lib/llms';

export const GET: APIRoute = async ({ site }) => {
	const parts = [header(site!)];
	for (const { label, pages } of await sections()) {
		parts.push(`# ${label}`);
		for (const p of pages) {
			parts.push(`## ${p.data.title}\n\nSource: ${pageUrl(p, site!)}\n\n${markdownBody(p)}`);
		}
	}
	return textResponse(parts.join('\n\n---\n\n'));
};
