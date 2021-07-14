module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'vravaback'),
        username: env('DATABASE_USERNAME', 'db_user'),
        password: env('DATABASE_PASSWORD', 'vrava123'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
