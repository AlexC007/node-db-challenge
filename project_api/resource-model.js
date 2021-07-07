const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  find,
  add,
};

function find() {
  return db('resource');
}
function add(resource) {
    return db('resource')
      .insert(resource)
      .then(ids => ({ id: ids[0] }));
  }