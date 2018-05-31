/*
 * simple fn
 * is fake function todo
 * Copyright(c) 2009-2333 by github
 * MIT Licensed
 */
const each = require('../../arithmetic/traverse/each')

function extend(...obj) {
	var a = {}
	each(obj, function (value) {
		if (!value) return true
		each(value, function (val, key) {
			if (!key) return true
			a[key] = val
		})
	})
	return a
}

module.exports = extend