const express = require('express')
const router = express.Router()

router.get('/', function(req, res, next) {
  res.end('Welcome to app: ' + process.env.APP_PATH)
})

router.get('/api', function(req, res, next) {
  res.json({name: process.env.APP_PATH, version: '1.0'})
})

module.exports = router
