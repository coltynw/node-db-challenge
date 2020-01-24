const db = require('../dbConfig.js')

module.exports = {
    find,
    add
}


function find() {
    return db('tasks')
        .join('projects', function() {
            this
                .on('projects.id', '=', 'tasks.project_id')
                .onExists(function() {
                    this.select('projects.name')
                })
        })
}

function add(task) {
    return db('tasks').insert(task)
}