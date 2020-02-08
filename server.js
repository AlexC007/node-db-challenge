const express = require('express');

const ProjectRouter = require('./project_api/project-router');
const ResourceRouter = require('./project_api/resource-router');
const TaskRouter = require('./project_api/task-router');

const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);

module.exports = server;