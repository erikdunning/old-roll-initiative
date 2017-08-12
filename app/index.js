const express = require('express')
const apiRouter = require('./api-router')
const app = express()

app.use('/api', apiRouter);

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})
