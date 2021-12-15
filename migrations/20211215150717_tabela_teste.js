
exports.up = function(knex) {
        return knex.schema.createTable('teste', table => {
            table.increments('id').primary()
            table.string('nome').notNull().unique()
            table.string('rotulo').notNull()
        }).then (function(){
            return knex('teste').insert([
                { nome: 'comum', rotulo: 'Comum'},
                { nome: 'admin', rotulo: 'Admin'},
                { nome: 'master', rotulo: 'Master'}
            ])
        })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('teste')
  
};