const request = require("request");
const extend = require("../core/{}[]/extend");

function getRequest(action, callBack) {
	// todo headers can add more options
	let RequestHeaders = {
		headers: {
			'User-Agent': 'Mozilla/3.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko/20100101 Firefox/49.0' //+ new Date().getTime()
		}
	}
	let _action = extend(RequestHeaders, action);
	request(_action, function (err, response, body) {
		callBack(err, response, body);
	});
}
/**
 *  request wrap by Promise
 */
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