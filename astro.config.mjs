import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel';

export default defineConfig({
	output: 'static',
	adapter: vercel(),
	integrations: [
		starlight({
			title: 'Graft Docs',
			description: 'Documentation for Graft — persistent context layer for AI coding agents',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/NanoNets/Graft' },
			],
			sidebar: [
				{
					label: 'Tutorials',
					items: [
						{ label: 'Getting Started', slug: 'tutorials/getting-started' },
						{ label: 'Your First Graph', slug: 'tutorials/your-first-graph' },
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
