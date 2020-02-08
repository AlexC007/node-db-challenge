
exports.seed = function(knex) {
  return knex('resource')
    .truncate()
    .then(function() {
      return knex('resource').insert([
        {
          Name: 'Text Editor',
          Description: 'Edits Text',
        },
        {
          Name: 'PC',
          Description: 'Needed for File and Web access',
        },
      ]);
    });
};