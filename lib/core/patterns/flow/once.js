/*
 * modules name
 *    Method Detail 
 * Copyright(c) 2009-2333 by Github NO.T233
 * MIT Licensed
 */

const maxRun = require('./maxRun.js')

function once(func) {
	return maxRun(1, func)
}

module.exports = once
