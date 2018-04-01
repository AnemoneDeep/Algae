/*
 * Check dir path exists if not then creat it
 * fn : mkdirs mkdirsSync
 * Copyright(c) 2009-2333 by github
 * MIT Licensed
 */
const fs = require('fs');
const path = require('path');

function mkdirs(dirname, callback) {
	fs.exists(dirname, function (exists) {
		if (exists) {
			callback();
		} else {
			let a = path.dirname(dirname)
			mkdirs(a, function () {
				fs.mkdir(dirname, callback);
			});
		}
	});
}

function mkdirsSync(dirname) {
	if (fs.existsSync(dirname)) {
		return true;
	} else {
		if (mkdirsSync(path.dirname(dirname))) {
			fs.mkdirSync(dirname);
			return true;
		}
	}
}

module.exports = {mkdirs, mkdirsSync}
