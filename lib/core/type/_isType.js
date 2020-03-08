/*
 * modules name
 *    Method Detail 
 * Copyright(c) 2009-2333 by Github NO.T233
 * MIT Licensed
 */


function _isType(type) {
	return function (obj) {
		return {}.toString.call(obj) == "[object " + type + "]"
	}
}

module.exports = _isType
