
exports.seed = function(knex) {
  return knex('task')
    .truncate()
    .then(function() {
      return knex('task').insert([
        {
          project_id:1,
          Description: 'Download the necessary files',
          Notes:'Make sure they are in correct order',
          Completed:'True'
        },
        {
          project_id:3,
          Description: 'Submit project for grading',
          Notes:'Make sure this is done within the alotted time',
          Completed: 'False'
        },
      ]);
    });
};