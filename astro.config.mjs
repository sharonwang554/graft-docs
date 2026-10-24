import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel';

export default defineConfig({
	site: 'https://graft.sharonwang.me',
	output: 'static',
	adapter: vercel(),
	redirects: {
		'/explanation/why-graft-exists': '/explanation/why-trail-code-exists/',
		'/explanation/architecture-decisions': '/explanation/why-trail-code-exists/',
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
				Head: './src/components/Head.astro',
			},
			description: 'Documentation for Trail-code (previously graft): the self-learning context layer for coding agents',
			lastUpdated: true,
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/trailhq/Trail-Code' },
			],
			sidebar: [
				{
					label: 'Tutorials',
					items: [
						{ label: 'Quick Start', slug: 'tutorials/quick-start' },
						{ label: 'Your First Graph', slug: 'tutorials/your-first-graph' },
						{ label: 'Your First Learning', slug: 'tutorials/your-first-learning' },
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
