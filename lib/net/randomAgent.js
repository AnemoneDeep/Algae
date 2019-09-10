/*
 * modules name
 *    Method Detail 
 * Copyright(c) 2009-2333 by Github NO.T233
 * MIT Licensed
 */
let pc = [
	'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3880.0 Safari/537.36'
]
let h5 = [
	'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
]

let userAgentList = {
	pc, h5
};

function useAgent(type = 'pc') {
	let list = userAgentList[type]
	return list[parseInt(Math.random() * list.length)];
}

module.exports = useAgent

// console.log(useAgent())
