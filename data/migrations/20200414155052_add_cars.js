
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl =>{
  
      tbl.increments("id").notNullable().unique();
      tbl.string('Make',128).notNullable();
      tbl.string('Model',128).notNullable();
      tbl.decimal('VIN',8,2).unique().notNullable().index();
      tbl.decimal('Mileage',8,2).notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars");
  };
  
  //npx knex migrate:make add_cars
  //delete db3 file
  //npx knex migrate:latest