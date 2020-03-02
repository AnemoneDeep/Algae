/*
 * modules name
 *    Method Detail 
 * Copyright(c) 2009-2333 by Github NO.T233
 * MIT Licensed
 */


function stamp() {
	return new Date().getTime()
}

function getTimezone(offset) {
	var offset = offset ? offset : "-4",
		a = new Date(),
		utc = a.getTime() + (a.getTimezoneOffset() * 60000);
	return new Date(utc + (3600000 * offset))
}


let time = {
	stamp
}

module.exports = time
