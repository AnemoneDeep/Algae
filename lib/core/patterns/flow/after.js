/*
 * Creates fn will only be run after being called count times
 * modules name
 *    Method Detail 
 * Copyright(c) 2009-2333 by Github NO.T233
 * MIT Licensed
 */


function after(times, func) {
	return function () {
		if (--times < 1) {
			return func.apply(this, arguments);
		}
	};
}

module.exports = after
