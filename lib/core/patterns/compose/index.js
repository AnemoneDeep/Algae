/*
 * compose(*functions) = Pass in a list of functions as parameter to fn
 *   where each function consumes the return value of the function that follows
 *   In math terms, composing the functions f(), g(), and h() produces f(g(h()))
 * Copyright(c) 2009-2333 by Github NO.T233
 * MIT Licensed
 */


function compose() {
	var args = arguments;
	var start = args.length - 1;
	return function() {
		var i = start;
		var result = args[start].apply(this, arguments);
		while (i--) result = args[i].call(this, result);
		return result;
	};
}

module.exports = compose
