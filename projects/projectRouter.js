const router = require('express').Router()

const projects = require('./projectModal')

// const router = express().Router()

router.get('/', (req, res) => {
    projects.find()
        .then(list => {
            const { id, name, description, completed} = list[0]
            const isComplete = completed ? true : false
            res.status(200).json({id, name, description, completed: isComplete})
            // res.status(200).json(list)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message:'failed to get projects'})
        })
}) 

router.post('/', (req, res) => {
    projects.add(req.body)
        .then(item => {
            res.status(201).json(item)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'not working'})
        })
})


module.exports = router