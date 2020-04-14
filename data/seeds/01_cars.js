
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {Make: 'Ching',Model: 'Ping',VIN: '8000',Mileage: '1234'},
        {Make: 'ayy',Model: 'meep',VIN: '1234',Mileage: 'rowValue1'},
        {Make: 'lmao',Model: 'rowValue1',VIN: '4321',Mileage: 'rowValue1'},
        {Make: 'tehhee',Model: 'rowValue1',VIN: '8765',Mileage: 'rowValue1'}
      ]);
    });
};
