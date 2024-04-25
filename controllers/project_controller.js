// 1. Save projects Done
// 2. Update a project 
// 3. Delete project
// 4. Retrieve projects
// 5. Retrieve project details
const { response } = require('express')
const Project = require('../model/project')
const addProject = (req, res) => {
    try {
        const newProject = new Project(req.body)
        newProject.save()
            .then(data => {
                res.statusCode = 201
                res.send({ response: "Project added successfully!" })
            }).catch(err => console.log(err))
    } catch (error) {
        console.log(error)
    }

}

const getProjectDetails = (req, res) => {
    try {
        const { id } = req.params
        Project.findById(id)
               .then(data => {
                res.statusCode = 200
                res.send(data)
               }).catch(err => console.log(err))
    } catch (error) {
        console.log(error)
    }
}

const getProjects = (req, res) => {
    try {
        Project.find().sort({ createdAt: -1 })
               .then(data => {
                res.statusCode = 200
                res.send(data)
               }).catch(err => console.log(err))
    } catch (error) {
        console.log(error)
    }
}

const deleteProject = (req, res) => {
    try {
        const { id } = req.params
        Project.findByIdAndDelete(id)
               .then(data => {
                res.statusCode = 204
                res.send({ response: "Project deleted successfully!" })
               }).catch(err => console.log(err))
    } catch (error) {
        console.log(error)
    }
}

const editProject = (req, res) => {
    try {
        const { id } = req.params
        Project.findByIdAndUpdate(id, req.body, { new: true })
            .then(data => {
                res.statusCode = 200
                res.send(data)
            }).catch(err => console.log(err))
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    addProject,
    editProject,
    getProjectDetails,
    getProjects,
    deleteProject
}