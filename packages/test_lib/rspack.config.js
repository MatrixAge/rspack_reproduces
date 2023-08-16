const { defineConfig } = require('@rspack/cli')

const is_prod = process.env.NODE_ENV === 'production'

module.exports = defineConfig({
	entry: './index.ts',
	output: {
		clean: is_prod,
		library: {
			type: 'commonjs'
		}
	},
	devtool: false,
	externals: ['react', 'fast-equals'],
	watchOptions: {
		ignored: /node_modules/
	},
	experiments: {
		incrementalRebuild: true
	},
	builtins: {
		decorator: {}
	}
})
