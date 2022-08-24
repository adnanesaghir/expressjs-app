const express = require('express')
const router = express.Router()

router.get('/', function(req, res, next) {
  res.end('homepage!')
})

router.get('/api', function(req, res, next) {
  res.json({name: 'routes', version: '1.0'})
})

module.exports = router
