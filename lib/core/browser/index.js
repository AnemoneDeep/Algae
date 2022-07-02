/*
 * modules name
 *    Method Detail 
 * Copyright(c) 2009-2333 by Github NO.T233
 * MIT Licensed
 */


function browser() {
	var ua = navigator.userAgent;
	var isOpera = Object.prototype.toString.call(window.opera) == '[object Opera]';
	return {
		IE:             !!window.attachEvent && !isOpera,
		Opera:          isOpera,
		WebKit:         ua.indexOf('AppleWebKit/') > -1,
		Gecko:          ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') === -1,
		MobileSafari:   /Apple.*Mobile/.test(ua)
	}
}

module.exports = browser
