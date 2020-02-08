const express = require('express');

const task = require('./task-model');

const router = express.Router();

router.get('/', (req, res) => {
  task.find()
  .then(task => {
    res.json(task);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get Tasks' });
  });
});
router.post('/', (req, res) => {
    const taskData = req.body;
  
    task.add(taskData)
    .then(task=> {
      res.status(201).json(task);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new Task' });
    });
  });

  module.exports = router;