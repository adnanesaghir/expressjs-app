const express = require('express')
const port = process.env.APP_PORT || 3000
const routes = require('./routes')
const app = express()

app.use('/', routes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
