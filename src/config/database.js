require('dotenv').config({
  path: process.env.NODE_ENV =='test' ? '.env.test' : '.env'
});

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  port: '3307',
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT || 'mysql',
  storage: './__tests__/database.sqlite',
  operatorAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
}