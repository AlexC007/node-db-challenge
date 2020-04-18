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
  
    project.getById(req.params.id)
    .then(data => res.json(data))
    .catch(error =>
      res.status(404).json({ message: "Could not retried user with this ID" })
    );
  });

  /*
  router.get('/:id', (req,res)=>{
    project.getByID(req.params.id)
    .then(data = res.json(data))
  })
  */

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
  
  router.put('/:id', (req,res) => {
    const {id} = req.params;
    const changes = req.body;
    
    project.update(changes,id)
    .then(updated =>{
      if(updated) {
        res.json({updated})
      }
    else {
        res.status(404).json({ message: 'Could not find PROJECT with given id' });
      }
     })
     .catch (err => {
      res.status(500).json({ message: 'Failed to update PROJECT' });
    });
  })

  router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    project.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find PROJECT with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete PROJECT' });
    });
  });

  module.exports = router;