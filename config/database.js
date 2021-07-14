module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'containers-us-west-8.railway.app'),
        port: env.int('DATABASE_PORT', 6208),
        database: env('DATABASE_NAME', 'railway'),
        username: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'loMuWWvTH4z1ouXbkoiL'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
