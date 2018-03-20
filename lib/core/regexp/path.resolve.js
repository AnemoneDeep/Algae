/*
 * 
 * Copyright(c) 2009-2013 by github
 * MIT Licensed
 * util The utilities for operating path such as id, uri
 */
var DIRNAME_RE = /[^?#]*\//

var DOT_RE = /\/\.\//g
var DOUBLE_DOT_RE = /\/[^/]+\/\.\.\//
var MULTI_SLASH_RE = /([^:/])\/+\//g

/**
 Extract the directory portion of a path
 dirname("a/b/c.js?t=123#xx/zz") ==> "a/b/"
 ref: http://jsperf.com/regex-vs-split/2
 * @param path
 * @returns {*} [ 'a/b/', index: 0, input: 'a/b/c.js?t=123#xx/zz' ]
 */
function dirname(path) {
    return path.match(DIRNAME_RE)[0]
    // match is array get [0]
}

// Canonicalize a path
// realpath("http://test.com/a//./b/../c") ==> "http://test.com/a/c"
function realpath(path) {
    // /a/b/./c/./d ==> /a/b/c/d
    path = path.replace(DOT_RE, "/")
    /*
      @author
      a//b/c ==> a/b/c
      a///b/////c ==> a/b/c
      DOUBLE_DOT_RE matches a/b/c//../d path correctly only if replace // with / first
    */
    path = path.replace(MULTI_SLASH_RE, "$1/")

    // a/b/c/../../d  ==>  a/b/../d  ==>  a/d
    while (path.match(DOUBLE_DOT_RE)) {
        path = path.replace(DOUBLE_DOT_RE, "/")
    }

    return path
}

// ok done
let a = dirname("a/b/c.js?t=123#xx/zz")
let b = realpath("http://test.com/a//./b/../c")
console.info(a)

console.info(b)