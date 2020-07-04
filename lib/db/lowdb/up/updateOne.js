/*
  Update a post.
	 db.get('posts')
	 .find({ title: 'low!' })
	 .assign({ title: 'hi!'})
	 .write()
 
 * Copyright(c) 2009-2333 by Github NO.T233
 * MIT Licensed
 */


function updateOne(collection, filter, document) {
	collection.get('data').find(filter)
	                   .assign(document)
	                   .write()
}

module.exports = updateOne
