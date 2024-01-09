/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config, options) => {
	  // Handle GraphQL files
	  config.module.rules.push({
		test: /\.(graphql|gql)/,
		exclude: /node_modules/,
		loader: "graphql-tag/loader",
	  });
  
	  // Handle SVG imports
	  const fileLoaderRule = config.module.rules.find((rule) =>
		rule.test?.test?.('.svg'),
	  );
  
	  config.module.rules.push(
		// Reapply the existing rule, but only for svg imports ending in ?url
		{
		  ...fileLoaderRule,
		  test: /\.svg$/i,
		  resourceQuery: /url/, // *.svg?url
		},
		// Convert all other *.svg imports to React components
		{
		  test: /\.svg$/i,
		  issuer: fileLoaderRule.issuer,
		  resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
		  use: ['@svgr/webpack'],
		},
	  );
  
	  fileLoaderRule.exclude = /\.svg$/i;
  
	  return config;
	},
  
	// Add custom image loader configuration
	images: {
	  loader: 'custom',
	  loaderFile: './imageLoader.js',
	},
  };
  
  module.exports = nextConfig;
  