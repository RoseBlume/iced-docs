// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Iced',
			logo: {
				dark: './public/resources/logo.svg',
				light: './public/resources/logo.svg',
				replacesTitle: false,
			},
			social: {
				github: 'https://github.com/iced-rs/iced',
				discord: 'https://discord.gg/3xZJ65GAhd',
				discourse: 'https://discourse.iced.rs',
			},
			customCss: ['./src/styles/custom.scss'],
			sidebar: [
				{
					label: 'Getting Started',
					autogenerate: { directory: 'getting-started' }
				},
				{
					label: 'Core Concepts',
					autogenerate: { directory: 'core-concepts' }
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
