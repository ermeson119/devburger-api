module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'root',
  database: 'devburger',
  define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
  },
};
