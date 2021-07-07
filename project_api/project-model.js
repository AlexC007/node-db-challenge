const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  find,
  add,
  getById,
  update,
  remove
};

function find() {
  return db('project');
}
function getById(id) {
    return db('project')
      .where({ id: Number (id) })
      .first();
  }
function add(project) {
    return db('project')
      .insert(project)
      .then(ids => ({ id: ids[0] }));
  }

  function update(changes, id){
    return db('project')
      .where('id', Number(id))
      .update(changes)
  }
  function remove(id) {
    return db('project')
      .where('id', Number(id))
      .del();
  }