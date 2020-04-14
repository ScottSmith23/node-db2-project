
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sales').del()
    .then(function () {
      // Inserts seed entries
      return knex('sales').insert([
        {SaleInfo: 'Guccisoldbaby',CarID:'3'},
        {SaleInfo: 'sold yeet',CarID:'2'},
        {SaleInfo: 'car sold for like a gorrillion dollar',CarID:'4'}
      ]);
    });
};
