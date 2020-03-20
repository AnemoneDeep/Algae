/*
 * Creates fn will can be called no more than count times
 * The result of the last function call is memoized and returned when count has been reached.
 *
 * Copyright(c) 2009-2333 by Github NO.T233
 * MIT Licensed
 */

function maxRun(times, func) {
	let cache;
	++times
	return function () {
		if (--times > 0) {
			cache = func.apply(this, arguments);
		}
		if (times <= 1) func = null;
		return cache;
	};
}

module.exports = maxRun
