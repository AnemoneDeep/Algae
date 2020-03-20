/*
 * Simplified version
 * function will only executed once in a limit time
 *
 * Copyright(c) 2009-2333 by Github NO.T233
 * MIT Licensed
 */

const {ARequire, delay} = require('Algae');
// const restArguments = ARequire('@core/base/restArguments')

debounce = function (fn, wait, immediate) {
	let timeout, result;
	
	function cancel() {
		clearTimeout(timeout);
		timeout = null;
	}
	
	function run(...args) {
		if (timeout) cancel();
		timeout = setTimeout(() => {
			fn()
		}, wait)
	}
	
	return run
};


module.exports = debounce
