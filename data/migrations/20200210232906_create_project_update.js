
exports.up = function(knex) {
    return knex.schema
      .table('task', tbl => {


        tbl.integer('project_id').unsigned().references('id').inTable('project'); 
       
      });
};


    exports.down = function(knex) {
        return knex.schema
          .dropTableIfExists('project')
          .dropTableIfExists('resource')
          .dropTableIfExists('task');

      };