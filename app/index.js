require('dotenv').config({path: '.env'})
const express = require('express')
const session = require('express-session')
const SQLiteStore = require('connect-sqlite3')(session);
const apiRouter = require('./api-router')
const app = express()

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
