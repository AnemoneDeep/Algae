/*
 * modules name
 *    Method Detail 
 * Copyright(c) 2009-2333 by Github NO.T233
 * MIT Licensed
 */
const restArguments = require("./restArguments.js")

let delay = restArguments(function (func, wait = 0, args) {
	return setTimeout(function () {
		return func.apply(null, args);
	}, wait);
});

module.exports = delay