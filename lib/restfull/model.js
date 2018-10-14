/*
 * modules name
 *    Method Detail 
 * Copyright(c) 2009-2333 by Github NO.T233
 * MIT Licensed
 */


function model(status, res = '', msg = '') {
	if (!status) return null
	let a = {
		status: status,
		res: res,
		msg: msg
	}
	return a
}

module.exports = model