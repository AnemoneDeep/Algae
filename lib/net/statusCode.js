export const statusConst = {
	'SUCCESS': '200',
	'FAILURE': '0',
	'VERSION': '9',
	'ISLOGIN': '5',
	'CLOSEGAMESTAUS': '-1',
}

/**
 * module load STATUS todo
 * @type {{FETCHING: number, SAVED: number, LOADING: number, LOADED: number, EXECUTING: number, EXECUTED: number, ERROR: number}}
 */
let STATUS = {
	// 1 - The `module.uri` is being fetched
	FETCHING: 1,
	// 2 - The meta data has been saved to cachedMods
	SAVED: 2,
	// 3 - The `module.dependencies` are being loaded
	LOADING: 3,
	// 4 - The module are ready to execute
	LOADED: 4,
	// 5 - The module is being executed
	EXECUTING: 5,
	// 6 - The `module.exports` is available
	EXECUTED: 6,
	// 7 - 404
	ERROR: 7
}

