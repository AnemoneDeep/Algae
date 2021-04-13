/* insert one unique document
*
*  1 compatible
*	    insert {} and {}
*    return It already exists or 200
*
*  2 to simplify common code
*       let check = this.dbNovel.get('data').find({_id: list._id})
*					 .value()
*       if (!check) {
*	       this.dbNovel.get('data')
*	       .push(list)
*	       .write()
*       }
*
*    refactor
*		 insertUnique(collection, document)
*
* this.dbNovel.set(`data.${this.options._id}`,this.options)
*        .write()
* this.dbNovel.get('data').push(this.options)
*        .write()
*
*    refactor
*		 insertUnique(collection, document)
* Copyright(c) 2009-2333 by Github NO.T233
* MIT Licensed
*/
function insertUnique(collection, document, callback) {
    let result
    let status = "It already exists"
    let Type = collection.get('dataType').value()
    if (Type == '[]') {
        result = collection.get('data').find({_id: document._id}).value()
        if (result) {
            return status
        }
        collection.get('data')
            .push(document)
            .write()
    }

    if (Type == '{}') {
        try {
            result = collection.get(`data.${document._id}`).value()._id
        } catch (e) {
        }
        if (result) {
            return status
        }
        collection.set(`data.${document._id}`, document)
            .write()
    }
    status = '200'
    return status
}

module.exports = insertUnique
