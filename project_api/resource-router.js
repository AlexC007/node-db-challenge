const express = require('express');

const resource = require('./resource-model');

const router = express.Router();

router.get('/', (req, res) => {
  resource.find()
  .then(resource => {
    res.json(resource);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get Resources' });
  });
});
router.post('/', (req, res) => {
    const resourceData = req.body;
  
    resource.add(resourceData)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new Resource' });
    });
  });

  module.exports = router;