const each = require('../../arithmetic/traverse/each')

let isAll = {
	isObject: function (obj) {
		return _isType("Object")(obj)
	},
	isString: function (obj) {
		return _isType("String")(obj)
	},
	isArray: function (obj) {
		return Array.isArray(obj) || _isType("Array")(obj)
	},
	isFunction: function (obj) {
		return _isType("Function")(obj)
	},
	isUndefined: function (obj) {
		return _isType("Undefined")(obj)
	},
	isBoolean: function (obj) {
		return _isType("Boolean")(obj)
	},
	isNumber: function (obj) {
		return obj === +obj
	},
	isNull: function (obj) {
		return obj === null;
	},
	isArrayObj: function (obj) {
		return this.isArray(obj) || this.isObject(obj)
	}/*,
	 isEmpty: ''*/
}

function _isType(type) {
	return function (obj) {
		return {}.toString.call(obj) == "[object " + type + "]"
	}
}

function getType(data, whatType = null) {
	let _type = []
	if (whatType) return isAll[whatType](data)
	each(isAll, function (_val, key) {
		_val(data) ? _type.push(key) : ''
	});
	// (_type.length == 0 && !data) ? _type = 'isEmpty' : '' // todo isEmpty maybe is't necessary
	return _type[0]
}

module.exports = {getType,_isType}