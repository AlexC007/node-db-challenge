const express = require('express');

const ProjectRouter = require('./project_api/project-router');
const ResourceRouter = require('./project_api/resource-router');
const TaskRouter = require('./project_api/task-router');

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectRouter);
server.use('/api/resources', ResourceRouter);
server.use('/api/tasks', TaskRouter);



module.exports = server;