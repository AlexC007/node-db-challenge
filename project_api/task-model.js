const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  find,
  add,
  getProjectTask,
};

function find() {
  return db('task');
}
function add(task) {
    return db('task')
      .insert(task)
      .then(ids => ({ id: ids[0] }));
  }
  function getProjectTask(projectId) {
    return db('project as p')
      .join('task as t', 't.id', 'p.project_id')
      .select('p.id', 'p.name','p.description', 't.name as postedBy')
      .where('p.project_id', projectId);
  }