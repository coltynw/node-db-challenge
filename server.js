const express = require('express')
const server = express()

const projectRouter = require('./projects/projectRouter.js')
const resourceRouter = require('./resources/resourceRouter.js')
const taskRouter = require('./tasks/taskRouter')

server.use(express.json())

server.use('/api/projects', projectRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/tasks', taskRouter)

server.get('/', (req, res) => {
    return res.json({message: "hello"})
})

module.exports = server