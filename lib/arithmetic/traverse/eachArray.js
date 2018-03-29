function eachArray(arr = [], iteratee) {
	let index = 0
	const _length = arr.length
	do {
		if (iteratee(arr[index], index, arr)) {
			// if fn in iteratee return true will stop
			break
		}
	} while (++index < _length);
	return arr // chain
}
module.exports = eachArray









