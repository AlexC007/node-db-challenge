const express = require('express');

const project = require('./project-model');
const task = require('./task-model');

const router = express.Router();

router.get('/', (req, res) => {
  project.find()
  .then(project => {
    res.json(project);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get Projects' });
  });
});
router.get('/:id',(req, res) => {
    // do your magic!
    project.getById(req.params.id)
    .then(data => res.json(data))
    .catch(error =>
      res.status(404).json({ message: "Could not retried user with this ID" })
    );
  });

router.post('/', (req, res) => {
    const projectData = req.body;
  
    project.add(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new Project' });
    });
  });

  
router.post('/:id/tasks', (req, res) => {
    // do your magic!
    const id = req.params.id;
    const data = req.body;
    task.add({...data, project_id: id})
      .then(data => {
        res.status(201).json({data})
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({errorMessage: "Could not post."})
      })
  });
  

  module.exports = router;