/*
 * modules typeIs
 *    let obj = '233'
 *    let result = typeIs(obj, 'String')
 * Copyright(c) 2009-2333 by Github NO.T233
 * MIT Licensed
 */


const typeGet = require('./typeGet.js')

function typeIs(obj, expect) {
	return typeGet(obj) == expect
}

module.exports = typeIs
