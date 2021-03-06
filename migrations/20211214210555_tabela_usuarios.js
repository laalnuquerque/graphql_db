
exports.up = function(knex, Promise) {
  return knex.schema.createTable('usuarios', table => {
      table.increments('id').primary()
      table.string('nome').notNull().unique()
      table.string('email').notNull()
      table.string('senha', 60).notNull()
      table.boolean('ativo').notNull().defaultTo(true)
      table.timestamp('data_criacao').defaultTo(knex.fn.now())

  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('usuarios')
  
};
