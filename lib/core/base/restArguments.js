/*
 * restArguments(Parameters1 restArguments)
 * Parameters1: fn
 * restArguments: any
 *    pass restArguments to Parameters1
 * Copyright(c) 2009-2333 by Github NO.T233
 * MIT Licensed
 */

let restArguments = function (fn) {
	return function (fn1, ...items) {
		if (!items) items = []
		let a = [fn1, ...items]
		return fn.apply(this, a);
	};
};

module.exports = restArguments
