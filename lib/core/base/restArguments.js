/*
 * restArguments(Parameters1 restArguments)
 *    pass restArguments to Parameters1
 * Copyright(c) 2009-2333 by Github NO.T233
 * MIT Licensed
 */

let restArguments = function () {
	return function (fn1, ...items) {
		return fn1.apply(this, items)
	};
};

module.exports = restArguments
