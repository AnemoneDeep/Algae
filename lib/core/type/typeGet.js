/*
 * modules typeGet
 *    let obj = '233'
 *    let result = typeGet(obj)
 * Copyright(c) 2009-2333 by Github NO.T233
 * MIT Licensed
 */

const each = require('../../arithmetic/traverse/each/index.js')
const isFn = require('./isFn.js')

function typeGet(data) {
	let _type = []
	each(isFn, function (_val, key) {
		if (_val(data)) {
			key = key.replace('is', '')
			_type.push(key)
			return false
		}
	});
	// todo add isEmpty
	return _type[0]
}

module.exports = typeGet