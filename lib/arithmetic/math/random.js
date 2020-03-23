/*
 * modules name
 *    Method Detail 
 * Copyright(c) 2009-2333 by Github NO.T233
 * MIT Licensed
 */


function random(min, max) {
	if (!max) {
		max = min;
		min = 0;
	}
	return min + Math.floor(Math.random() * (max - min + 1));
}

module.exports = random
