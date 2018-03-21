function eachArray(array = [], iteratee) {
	let index = 0
	const _length = array.length
	do {
		if (iteratee(array[index], index, array) === false) {
			break
		}
	} while (++index < _length);
	return array // chain
}
module.exports = eachArray









