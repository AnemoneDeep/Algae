/*
 * explore ocean
 * Crab kelp Behavior pattern
 *
 * new Crab({
 * 	   url:'http://127.0.0.1:3000',
 * 	   mode: txt,
 * 	  //  callback: fn // dependence
 * })
 * fix httpReq bug some time can't parse
 * Copyright(c) 2009-2333 by github
 * MIT Licensed
 */
const {httpReq} = require("./index")
const extend = require("../core/{}[]/extend");
const cheerio = require('cheerio');
const iconv = require('iconv-lite');
const Axios = require('axios')

class Crab {
	constructor(options = {}) {
		this.cheerio = cheerio
		this.iconv = iconv
		this.options = {}
		this.options = extend(this.options, options);
		this.beforeInit();
		this.init();
	}
	beforeInit () {}
	init() {
		let {url, axios} = this.options
		if (!url) return this.parse('letGo'); // pass then go analyze
		if (!axios) {
			return httpReq(url).then((res, body) => {
				this.parse(res.body, res); // assenbly ==> response argument 2 more info
				this.analyzeData(); // get res from this.res
			}, (err) => {
				console.info('failure', err)
			});
		}
		return Axios.get(url)
		.then(response => {
			this.parse(response.data, response);
			this.analyzeData();
		})
		.catch(err => {
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