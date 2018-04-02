const crypto = require('crypto');
const strHash = crypto.createHash('md5'); // creat hash arithmetic

function md5(data) {
	if (!data) return false
	strHash.update(data); // updata data
	return strHash.digest('hex');
}

module.exports = md5