const express = require('express')
const path = require('path')
const { createProxyMiddleware } = require('http-proxy-middleware')
const app = express()
const port = 80

app.use('/', express.static(path.resolve(__dirname, '../default-vita/build')))

app.use('/api', createProxyMiddleware({
    target: 'http://localhost:8000',
    changeOrigin: true
}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

