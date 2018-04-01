/*
 * simple fn
 * todo
 * Copyright(c) 2009-2333 by github
 * MIT Licensed
 */
const each = require('../../arithmetic/traverse/each')

function extend(...obj) {
	var a = {}
	each(obj, function (value) {
		each(value, function (val, key) {
			a[key] = val
		})
	})
	return a
}
module.exports = extend
