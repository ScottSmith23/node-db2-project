
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sales').del()
    .then(function () {
      // Inserts seed entries
      return knex('sales').insert([
        {SaleInfo: 'Guccisoldbaby',CarID:'14'},
        {SaleInfo: 'sold yeet',CarID:'15'},
        {SaleInfo: 'car sold for like a gorrillion dollar',CarID:'13'}
      ]);
    });
};
