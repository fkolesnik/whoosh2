module.exports = {
	siteMetadata: {
		title: `Whoosh`,
		description: `Магазин одежды`,
		author: `@whoosh`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`rubik\:400,700`],
				display: "swap",
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options:
				{
					//name: `images`,
					//path: `${__dirname}/src/img`,
					path: `./src/data/`,
				},
		},
		`gatsby-transformer-json`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#000000`,
				theme_color: `#000000`,
				display: `minimal-ui`,
				icon: `src/img/favicon.png`, // This path is relative to the root of the site.
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
