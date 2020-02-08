const express = require('express');

const project = require('./project-model');

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

  module.exports = router;