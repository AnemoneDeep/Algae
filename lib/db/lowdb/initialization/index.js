/*
 * Entrance
 *          Init a collection empty standard document
 *          Keep all collection document consistency
 *          All collection document must have this structure
 *
 * Don't refactor it !!!
 * Copyright(c) 2009-2333 by github
 * MIT Licensed
 */
let initData = (res = {}) => {
	let a = {
		dataType: '[]', // Data storage {} or []
		data: [],
		creatBy: 'Github NO.T233',
		timeCreate: new Date().getTime()
	}
	return Object.assign(a, res)
}
module.exports = initData