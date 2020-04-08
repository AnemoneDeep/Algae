/*
 * Copyright(c) 2009-2333 by github
 * MIT Licensed
 */
const createObj = require('./createObj')

function arr2obj(arr = [], _key = null) {
	let res = createObj()
	for (let i = 0; i < arr.length; i++) {
		let key = arr[i][_key]
		if (key) {
			res[key] = arr[i]
		}
	}
	return res
}
let list = [
	{
		"symbol": "SH603353",
		"name": "N和顺",
		"market_capital": 5337867600
	}
]
b = arr2obj(list, 'symbol')
console.log(b)
module.exports = arr2obj