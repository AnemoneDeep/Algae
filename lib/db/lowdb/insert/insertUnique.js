/* insert one unique document
 
 let check = this.dbNovel.get('data').find({_id: list._id})
                         .value()
 if (!check) {
	 this.dbNovel.get('data')
	 .push(list)
	 .write()
 }
 
 Optimize code
 
    insertUnique(collection, document)
 
 * Copyright(c) 2009-2333 by Github NO.T233
 * MIT Licensed
 */
function insertUnique(collection, document) {
	let result
	result = collection.get('data').find({_id: document._id}).value()
	if (result) {
		return
	}
	collection.get('data')
	          .push(document)
	          .write()
}

module.exports = insertUnique
