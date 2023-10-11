const fs = require('fs')
const express = require('express')
const router = express.Router()

router.get('/api', function(req, res, next) {
  const country = req.query.country
  const action = req.query.action
  let file
  if (country === 'europe') {
    file = '/europe/eu.txt'
  } else if (country === 'asia') {
    file = '/asia/asia.txt'
  } else {
    return res.end('unknown country!')
  }
  if (action === 'write') {
    const content = new Date().toISOString()
    fs.writeFileSync('/europe/eu.txt', content, { encoding: 'utf8' })
    return res.end('done')
  } else if (action === 'read') {
    const data = fs.readFileSync('/europe/eu.txt', { encoding: 'utf8', flag: 'r' })
    return res.end(data)
  } else {
    return res.end('unknown action!')
  }
})

router.get('/', function(req, res, next) {
  res.end('API available in path /api')
})

module.exports = router
