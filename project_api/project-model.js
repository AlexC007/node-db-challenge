const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  find,
  add,
};

function find() {
  return db('project');
}
function add(project) {
    return db('project')
      .insert(project)
      .then(ids => ({ id: ids[0] }));
  }