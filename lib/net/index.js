/*
 * explore ocean
 * 	   httpReq wrap by Promise extend request
 * todo
 * 	   add proxy module
 *     options {
 *     	proxy : 'xxxxxx' // auto
 *     }
 * 	   RequestHeaders add more options
 * 	   get options ??
 * Copyright(c) 2009-2333 by github
 * MIT Licensed
 */
const request = require("request");
const extend = require("../core/{}[]/extend");

var useAgent = require('./randomAgent')

function getRequest(action, callBack) {
	let userAgent = 'pc'
	if (action.userAgent) {
		userAgent = action.userAgent
		delete action.userAgent
	}
	// userAgent pc or h5
	let RequestHeaders = {
		headers: {
			'User-Agent': useAgent(userAgent) + new Date().getTime()
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

function httpGet(url, qs = {}) {
	return new Promise(function (resolve, reject) {
		request.get({url: url, qs: qs, json: true}, function (err, response, body) {
			if (err) reject(err, response);
			resolve(response, body);
		})
	});
}

function httpPost(url, qs = {}) {
	
	var request = require('request');
	var url = "请求url";
	var requestData = "上送的数据";
	request({
		url: url,
		method: "POST",
		json: true,
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(requestData)
	}, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			console.log(body) // 请求成功的处理逻辑
		}
	});
}


module.exports = {httpReq, httpGet}