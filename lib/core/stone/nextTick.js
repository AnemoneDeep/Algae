/*
 *
 * algea.nextTick(()=>{
 *      console.log(123)
 * })
 *
 * Copyright(c) 2009-2333 by Github NO.T233
 * MIT Licensed
 */
function nextTick(cb) {
	cb && process.nextTick(function () {
		cb()
	});
}

module.exports = nextTick
