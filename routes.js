const fs = require('fs')
const express = require('express')
const { BlobServiceClient } = require("@azure/storage-blob");
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

router.get('/storage', async function(req, res, next) {
  const country = req.query.country
  let account, sas
  if (country === 'europe') {
    account = "cedtest"
    sas = process.env.EU_SAS
  } else if (country === 'asia') {
    account = "cedasia"
    sas = process.env.ASIA_SAS
  } else {
    return res.end('unknown country!')
  }
  const blobServiceClient = new BlobServiceClient(`https://${account}.blob.core.windows.net${sas}`)
  let i = 1
  let containers = blobServiceClient.listContainers()
  data = []
  for await (const container of containers) {
    data.push(container.name)
  }
  return res.end(data.join(', '))
})

router.get('/', function(req, res, next) {
  res.end('API available in path /api')
})

module.exports = router
