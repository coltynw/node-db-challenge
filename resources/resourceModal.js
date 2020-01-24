const db = require('../dbConfig.js')

module.exports = {
    find,
    add
}


function find() {
    return db('resources')
}

function add(resource) {
    return db('resources').insert(resource)
}