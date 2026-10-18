import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel';

export default defineConfig({
	output: 'static',
	adapter: vercel(),
	// Pages from the Graft-era site, mapped to where their content lives now.
	redirects: {
		'/tutorials/your-first-graph': '/how-to/search-and-orient/',
		'/how-to/integrate-claude-code': '/how-to/agent-integration/',
		'/how-to/set-up-mcp-server': '/how-to/agent-integration/',
		'/how-to/configure-providers': '/reference/what-runs-where/',
		'/how-to/enable-deep-mode': '/explanation/how-the-graph-gets-built/',
		'/reference/environment-variables': '/reference/what-runs-where/',
		'/reference/graph-structure': '/reference/whats-in-a-node/',
		'/explanation/why-graft-exists': '/explanation/graft-map/',
		'/explanation/architecture-decisions': '/explanation/how-it-works/',
	},
	integrations: [
		starlight({
			title: 'Trail-code Docs',
			customCss: [
				'./src/styles/custom.css',
			],
			components: {
				Banner: './src/components/Banner.astro',
				Footer: './src/components/Footer.astro',
			},
			description: 'The self-learning context layer for coding agents.',
			lastUpdated: true,
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/trailhq/Trail-Code' },
			],
			sidebar: [
				{
					label: 'Tutorials',
					items: [
						{ label: 'Quick start', slug: 'tutorials/quick-start' },
					],
				},
				{
					label: 'How-To Guides',
					items: [{ autogenerate: { directory: 'how-to' } }],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
				{
					label: 'Explanation',
					items: [{ autogenerate: { directory: 'explanation' } }],
				},
			],
		}),
	],
});
