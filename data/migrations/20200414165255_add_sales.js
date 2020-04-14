
exports.up = function(knex) {
    return knex.schema.createTable('sales', tbl =>{
  
      tbl.increments("id").notNullable().index();
      tbl.string('SaleInfo',256).notNullable();
      tbl.int('CarID');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("sales");
  };
  
  //npx knex migrate:make add_cars
  //delete db3 file
  //npx knex migrate:latest