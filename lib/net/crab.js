/*
 * explore ocean
 * Crab kelp Behavior pattern
 *
 * new Crab({
 * 	   url:'http://127.0.0.1:3000',
 * 	   mode: txt,
 * 	  //  callback: fn // dependence
 * })
 * Copyright(c) 2009-2333 by github
 * MIT Licensed
 */
const {httpReq} = require("./index")
const extend = require("../core/{}[]/extend");

class Crab {
	constructor(options = {}) {
		this.options = {}
		this.options = extend(this.options, options);
		this.init();
	}
	
	init() {
		let {url} = this.options
		httpReq(url).then((res, body) => {
			this.parse(res.body, res); // assenbly ==> response argument 2 more info
			this.analyzeData(); // get res from this.res
		}, (err, response) => {
			console.info('failure', err)
		});
	}
	
	analyzeData(res) {
		this.options.callback ? this.options.callback(this) : ''
	}
	
	parse() {
	
	}
	
	storeMethod() {
	
	}
}

module.exports = Crab