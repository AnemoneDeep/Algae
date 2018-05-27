/*
 * createElement link style script
 * @param options
 * @returns {HTMLScriptElement}
 *
 * Copyright(c) 2009-2333 by Github NO.T233
 * MIT Licensed
 */

function addResource(options = {}) {
	let el = document.createElement(options.type);
	for (let key in options.setAttribute) {
		el.setAttribute(key, options.setAttribute[key])
	}
	if (options.setAttribute.textContent) {
		let attr = options.type == 'script' ? 'text/javascript' : 'text/css'
		el.setAttribute('type', attr)
	}
	return el
}

module.exports = addResource
/*
    options example
let options = {
	type: 'link',
	setAttribute: {
		textContent: 'xxxx'
	}
}

let options_link = {
	type: 'link',
	setAttribute: {
		href: '//github.com/style.css'
	}
}

let options_style = {
	type: 'style',
	setAttribute: {
		textContent: `
				*{
					marin: 0;
					padding: 0;
				}
		`
	}
}

let options_script_src = {
	type: 'script',
	setAttribute: {
		src: '//github.com/app.js',
	}
}

let options_script_txt = {
	type: 'script',
	setAttribute: {
		textContent: `console.log('hello world (●'◡'●) ')`
	}
}

*/
