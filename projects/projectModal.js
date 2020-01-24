const db = require('../dbConfig.js')

module.exports = {
    add, 
    find
}

function find() {
    return db('projects')
}

function add(project) {
    return db('projects').insert(project)
}