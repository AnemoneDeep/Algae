/*
 * modules name
 *    Method Detail 
 * Copyright(c) 2009-2333 by Github NO.T233
 * MIT Licensed
 */
const _isType = require('./_isType.js')


let isObject = _isType("Object")
let isString = _isType("String")
let isArray = Array.isArray || _isType("Array")
let isFunction = _isType("Function")
let isUndefined = _isType("Undefined")
let isBoolean = _isType("Boolean")
let isNumber = _isType("Number")
let isNull = _isType("Null")
let isRegExp = _isType('RegExp')
let isArguments = _isType('Arguments')


module.exports = {
	isObject, isString, isArray, isFunction, isUndefined, isBoolean, isNumber, isNull
}

/*
*
* isNaN
* isDate toString.call(obj) == '[object Date]';
*
*
* */
