
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {Make: 'FORD',Model: 'ESCORT',VIN: '39733',Mileage: '1234'},
        {Make: 'HONDA',Model: 'ACCORD',VIN: '33823',Mileage: '246413'},
        {Make: 'TOYOTA',Model: 'CAMRY',VIN: '15896',Mileage: '523521'},
        {Make: 'HONDA',Model: 'CIVIC',VIN: '17457',Mileage: '12342'}
      ]);
    });
};
