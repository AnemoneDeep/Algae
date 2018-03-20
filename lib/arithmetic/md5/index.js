let crypto = require('crypto');

let string = "";

let strHash = crypto.createHash('md5');

strHash.update(string);

let md5 = strHash.digest('hex');
console.log(md5);


// 3194a665a79a0df9521d1fd26f74656b  'haha 12312'
// 6b540690549eb9f5dac52b6548589aa1
