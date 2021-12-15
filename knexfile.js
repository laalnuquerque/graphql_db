// Update with your config settings.

module.exports = {

    client: 'mysql',
    connection: {
      database: 'sistema_cad',
      user:     'root',
      password: 'adm@1234'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  };
