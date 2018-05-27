/*
 * modules name
 *    Method Detail 
 * Copyright(c) 2009-2333 by Github NO.T233
 * MIT Licensed
 */


function $get(argname) {
	var url = document.location.href;
	var arrStr = url.substring(url.indexOf("?") + 1).split("&");
	for (var i = 0; i < arrStr.length; i++) {
		var loc = arrStr[i].indexOf(argname + "=");
		if (loc != -1) {
			return arrStr[i].replace(argname + "=", "").replace("?", "")
		}
	}
	return "";
}

module.exports = $get
