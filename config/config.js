require('dotenv').config()

const { 
  APP_DB_HOST, 
  APP_DB_NAME, 
  APP_DB_USER, 
  APP_DB_PASS 
} = process.env

module.exports = {
  "development": {
    "username": APP_DB_USER,
    "password": APP_DB_PASS,
    "database": APP_DB_NAME,
    "host": APP_DB_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": APP_DB_USER,
    "password": APP_DB_PASS,
    "database": APP_DB_NAME,
    "host": APP_DB_HOST,
    "dialect": "mysql"
  },
  "production": {
    "username": APP_DB_USER,
    "password": APP_DB_PASS,
    "database": APP_DB_NAME,
    "host": APP_DB_HOST,
    "dialect": "mysql"
  }
}
