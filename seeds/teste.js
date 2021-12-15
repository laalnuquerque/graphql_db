
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('teste').del()
    .then(function () {
      // Inserts seed entries
      return knex('teste').insert([
        {id: 1, nome: 'rowValue1', rotulo: 'rotulo'},
      ]);
    });
};
