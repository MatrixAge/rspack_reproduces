const { defineConfig } = require('@rspack/cli')
const { resolve } = require('path')

const is_prod = process.env.NODE_ENV === 'production'

module.exports = defineConfig({
	entry: {
		main: './runtime/index.tsx'
	},
	output: {
		clean: is_prod
	},
	devtool: is_prod ? false : 'source-map',
	watchOptions: {
		ignored: /node_modules/
	},
	resolve: {
		tsConfigPath: resolve(__dirname, 'tsconfig.json'),
		alias: {
			// react: resolve(__dirname, 'node_modules/react')
		}
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
			maxSize: 30000
		}
	},
	builtins: {
		html: [
			{
				template: './public/index.html',
				title: 'Page Title'
			}
		],
		decorator: {},
		progress: false
	},
	experiments: {
		incrementalRebuild: true,
		outputModule: true
	}
})
