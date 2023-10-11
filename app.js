const express = require('express')
const port = process.env.APP_PORT || 8080
const routes = require('./routes')
const app = express()

app.use('/', routes)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
