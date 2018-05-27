/*
 * explore ocean
 * 	   httpReq wrap by Promise extend request
 * todo
 * 	   RequestHeaders add more options
 * Copyright(c) 2009-2333 by github
 * MIT Licensed
 */
const request = require("request");
const extend = require("../core/{}[]/extend");

function getRequest(action, callBack) {
	let RequestHeaders = {
		headers: {
			'User-Agent': 'Mozilla/3.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko/20100101 Firefox/49.0' //+ new Date().getTime()
		}
	}
	let _action = extend(RequestHeaders, action);
	// console.log(_action, '-----------')
	request(_action, function (err, response, body) {
		callBack(err, response, body);
	});
}

function httpReq(url) {
	return new Promise(function (resolve, reject) {
		getRequest({
			url: url
		}, function (err, response, body) {
			if (err) reject(err, response);
			resolve(response, body);
		})
	});
}

module.exports = {httpReq}