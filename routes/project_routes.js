const {
    addProject,
    editProject,
    deleteProject,
    getProjectDetails,
    getProjects
} = require('../controllers/project_controller')

const router = require('express').Router()

router.post('/', addProject)
router.put('/:id', editProject)
router.get('/', getProjects)
router.get('/:id', getProjectDetails)
router.delete('/:id', deleteProject)

module.exports = router