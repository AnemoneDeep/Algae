
class Queue{

}

/**
 * first in first out
 * @param declareName
 * @param value
 * @param lengths
 * @constructor
 */
function FIFO (declareName, value, lengths) {
	declareName.unshift(value);
	while (declareName.length > lengths) {
		declareName.pop();
	}
}

let a = []
// declareName
for(let i = 0;i<10;i++){
    StackControll(a,i,5)
}
console.log(a)
