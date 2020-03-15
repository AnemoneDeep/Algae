/*
 * call together
 *
 *   const add = (a,b) => { return console.log(a + b)}
 *   const minus = (a,b) => {return console.log(a - b)}
 *   callAll(add, minus)(2,1)
 *
 * Copyright(c) 2009-2333 by Github NO.T233
 * MIT Licensed
 */

const callAll = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args))


module.exports = callAll
