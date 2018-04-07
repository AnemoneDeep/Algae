/*
 * deepCopy
 *    quarantine res and _res
 *    creat _res have nothing to do with res
 * Copyright(c) 2009-2333 by Github NO.T233
 * MIT Licensed
 */
function deepCopy(res) {
	let _res = ''
	try {
		_res = JSON.parse(JSON.stringify(res));
	} catch (e) {
		_res = false
	}
	return _res
}

module.exports = {deepCopy}

