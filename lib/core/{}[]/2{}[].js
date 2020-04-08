/*
 * Copyright(c) 2009-2333 by github
 * MIT Licensed
 */

function obj2arr(obj = {}) {
	let res = []
	for (let key in obj) {
		res.push(obj[key])
	}
	return res
}

module.exports = obj2arr