const crypto = require('crypto');
const strHash = crypto.createHash('md5');

function md5(data) {
	if (!data) return false
	strHash.update(data);
	return strHash.digest('hex');
}

module.exports = md5