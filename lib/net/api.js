/**
 *  get api request
 */
const Axios = require('axios')
let api = {
    base: (url, params) => {
    },
    ins: () => {
        let instance = Axios.create({})

        return instance
    },
    get: (url, params) => {
        return new Promise((resolve, reject) => {
            Axios.get(url, {params}).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    post: (url, params) => {

    }
}

module.exports = api