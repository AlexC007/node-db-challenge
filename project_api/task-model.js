const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  find,
  add,
};

function find() {
  return db('task');
}
function add(task) {
    return db('task')
      .insert(task)
      .then(ids => ({ id: ids[0] }));
  }