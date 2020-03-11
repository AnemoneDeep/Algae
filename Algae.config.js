/*
 * Is a set of rules or guidelines used when writing the source code for require "path" use same style.
 * Configure how modules are resolved
 * Create aliases to require certain modules more easily
 *
 *
 *	 Common code problem
 *	   var gulp = require('../../lib/index.js');
 *	   var gulp = require('./lib/index.js');
 *
 *	 change
 *	   var gulp = require('@lib/index.js');
 *
 *
 * idea come from webpack
 * Copyright(c) 2009-2333 by Github NO.T233
 * MIT Licensed
 */
const path = require('path')

module.exports = {
	resolve: {
		alias: {
			'@core': path.resolve(__dirname, 'lib/core'),
			'@arithmetic': path.resolve(__dirname, 'lib/arithmetic'),
			'@each': path.resolve(__dirname, 'lib/arithmetic/traverse/each/index.js')
		}
	}
}