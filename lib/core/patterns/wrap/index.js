/*
 * Creates a function that provides value to wrapper as its first argument.
 * Does not affect old fn logic
 * Copyright(c) 2009-2333 by Github NO.T233
 * MIT Licensed
 */

function wrap(fnOld, fn) {
	return () => {
		return fn(fnOld);
	}
}

module.exports = wrap
