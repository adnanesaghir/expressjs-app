const express = require('express')
const port = 3000
const routes = require('./routes')
const app = express()

app.use(express.json())
app.use('/', routes)
app.use(process.env.APP_PATH, routes) // handle custom app path
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
