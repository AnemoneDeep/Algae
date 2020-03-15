/*
 * restArguments(Parameters1 restArguments)
 *    pass restArguments to Parameters1
 * Copyright(c) 2009-2333 by Github NO.T233
 * MIT Licensed
 */

/**
 * 剩余参数
 *
 * restArguments  fn(fn1,...item) 后面参数丢到前面去
 *
 */

let restArguments = function (fn) {
	return function (fn1, ...items) {
		return fn1.apply(this, items)
	};
};

module.exports = restArguments
