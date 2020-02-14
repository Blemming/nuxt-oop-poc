export default {
	mode: 'universal',
	/*
	 ** Headers of the page
	 */
	head: {
		title: 'PokeAPI PoC',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || ''
			}
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'dns-prefetch', href: 'https://pokeapi.co' },
			{ rel: 'preconnect', href: 'https://pokeapi.co' },
			{ rel: 'dns-prefetch', href: 'https://pokeres.bastionbot.org' },
			{ rel: 'preconnect', href: 'https://pokeres.bastionbot.org' }
		]
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: '#fff' },
	/*
	 ** Global CSS
	 */
	css: [],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [
		'~plugins/ApiFactory.js'
	],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [
		// Doc: https://github.com/nuxt-community/eslint-module
		'@nuxtjs/eslint-module',
		// Doc: https://github.com/nuxt-community/nuxt-tailwindcss
		'@nuxtjs/tailwindcss'
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios'
	],
	/*
	 ** Axios module configuration
	 ** See https://axios.nuxtjs.org/options
	 */
	axios: {
		baseURL: 'https://pokeapi.co/api/v2'
	},
	/*
	 ** Build configuration
	 */
	build: {
		extractCSS: true,
		// Adding optional chaining and nullish coalecing operators
		babel: {
			plugins: [
				['@babel/plugin-proposal-optional-chaining'],
				['@babel/plugin-proposal-nullish-coalescing-operator']
			]
		},
		/*
		 ** You can extend webpack config here
		 */
		extend (config, ctx) {}
	}
};
