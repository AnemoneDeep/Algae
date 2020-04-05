/*
 * global-require.js
 * Can change where Algae goes to look for 'modules name' (see modules).
 *
 * idea come from webpack
 * Copyright(c) 2009-2333 by Github NO.T233
 * MIT Licensed
 */
let AlgaeConfig = require('./Algae.config')
let alias = AlgaeConfig.resolve.alias

function ARequire(module) {
	for (let key in alias) {
		if (module.indexOf(key) === 0) {
			// path = piece1 + piece2
			let piece2 = module.replace(key, '')
			// piece2 = null
			if (!piece2) {
				return require(alias[key])
			}
			return require(alias[key] + '/' + piece2)
		}
	}
}

module.exports = ARequire
