
exports.up = function(knex) {
    return knex.schema
    .createTable('project', tbl => {
        tbl.increments();
        tbl.text('Name', 128).notNullable();
        tbl.text('Description');
        tbl.boolean('Completed').defaultTo('False').notNullable();
      })
      .createTable('resource', tbl => {
        tbl.increments();
        tbl.text('Name', 128).unique().notNullable();
        tbl.text('Description');
      })
      /*.createTable('task', tbl => {
        tbl.increments();
        tbl.text('Description').notNullable();
        tbl.text('Notes', 300);
        tbl.boolean('Completed').defaultTo('False').notNullable();
      });*/
};


    exports.down = function(knex) {
        return knex.schema
          .dropTableIfExists('project')
          .dropTableIfExists('resource')
          .dropTableIfExists('task');

      };
