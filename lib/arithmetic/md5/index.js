// failure Error [ERR_CRYPTO_HASH_FINALIZED]: Digest already called
function md5(data) {
	const crypto = require('crypto');
	const strHash = crypto.createHash('md5'); // creat hash arithmetic
	if (!data) return false
	strHash.update(data); // updata data
	return strHash.digest('hex');
}

module.exports = md5