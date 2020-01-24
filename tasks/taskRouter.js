const router = require('express').Router()

const tasks = require('./taskModal.js')

// const router = express().router()

router.get('/', (req, res) => {
    tasks.find()
        .then(list => {
            const {task_desc, notes, id, task_complete, project_id, name, description } = list[0]
            const taskComplete = task_complete ? true : false
            const response = {task_desc, notes, id, taskComplete, project: { project_id, name, description}}
            res.status(200).json(response)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message:'failed to get tasks'})
        })
}) 

router.post('/', (req, res) => {
    tasks.add(req.body)
        .then(item => {
            res.status(201).json(item)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'not working'})
        })
})


module.exports = router