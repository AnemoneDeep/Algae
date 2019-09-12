/*
 * modules name
 *    Method Detail 
 * Copyright(c) 2009-2333 by Github NO.T233
 * MIT Licensed
 */
let async = require('async');

class Queue {
	constructor(options = {}) {
		this.options = options
		let {num} = options
		let q = async.queue(function (task, callback) {
			// console.log('worker is processing task: ', task.name);
			task.run(callback);
		}, num || 1);
		this.q = q
	}
	
	getQ() {
		return this.q
	}
}

module.exports = Queue
