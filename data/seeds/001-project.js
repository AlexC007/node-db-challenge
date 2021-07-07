
exports.seed = function(knex) {
  return knex('project')
    .truncate()
    .then(function() {
      return knex('project').insert([
        {
          Name: 'Node DB 1',
          Description: 'Ghallege for Node DB 1',
          Completed:'True'
        },
        {
          Name: 'Node DB 2',
          Description: 'Ghallege for Node DB 2',
          Completed:'True'
        },
        {
          Name: 'Node DB 3',
          Description: 'Ghallege for Node DB 3',
          Completed:'True'
        },
      ]);
    });
};
