// Create quick reference variables for speed access to core prototypes.
let
	push = ArrayProto.push,
	slice = ArrayProto.slice,
	concat = ArrayProto.concat,
	toString = ObjProto.toString,
	hasOwnProperty = ObjProto.hasOwnProperty;
// All **ECMAScript 5** native function implementations that we hope to use
// are declared here.
let
	nativeIsArray = Array.isArray,
	nativeKeys = Object.keys,
	nativeBind = FuncProto.bind;