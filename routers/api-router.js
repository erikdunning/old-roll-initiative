const express = require('express')
const router = express.Router()
const api = require('../controllers/api-controller')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log(req.session.ga)
  next()
})
// define the home page route
router.get('/user/login', function (req, res) {
  res.redirect(api.googleLogin());
})
// define the about route
router.get('/auth/google', function (req, res) {
  if(req.query.code){
    api.googleOAuthHandshake(req.query.code, function(tokens){
      req.session.ga = tokens
      res.redirect('/');
    });
  } else {
    res.redirect('/authentication/error')
  }
})

module.exports = router