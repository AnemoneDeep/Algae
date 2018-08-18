/*
 * modules name
 *    Method Detail 
 * Copyright(c) 2009-2333 by Github NO.T233
 * MIT Licensed
 */
let async = require('async');

/**
 *
 * @param num 1
 * @param drainCallback
 * @returns {*}
 * task{
 * 	name: xxx,
 * 	fn: ()=>{ .... }
 * }
 */
function asQueue(num = 1, drainCallback) {
	let q = async.queue(function (task, callback) {
		task.fn(callback)
	}, num);
// assign a callback
	q.drain = function () {
		drainCallback ? drainCallback() : ''
	};
	return q
}

module.exports = asQueue
