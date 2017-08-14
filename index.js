require('dotenv').config()
const config = require('./config/config.json')
const logger = require('./modules/logger')
const express = require('express')
const session = require('express-session')
const SQLiteStore = require('connect-sqlite3')(session)
const apiRouter = require('./routers/api-router')
const app = express()
const Sequelize = require('sequelize')
const sequelize = new Sequelize(config[app.get('env')])

/* Verify the application database exists and it's reachable. */
sequelize
  .authenticate()
  .then(() => {
    logger.info('Connection has been established successfully.');
  })
  .catch(err => {
    logger.error('Unable to connect to the database:', err);
  });

/* Initialize session management. */
app.use(session({
  store: new SQLiteStore,
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {}
}))

/* Initialize Routers. */
app.use('/api', apiRouter);

/* Start Listening! */
app.listen(3001, function () {
  console.log('Roll Initiative is listening on port 3001!')
})
