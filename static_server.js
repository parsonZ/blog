
const express = require('express')
const app = express()
const port = 8000

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,ts');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
})

app.use('/static', express.static('static'))

app.use('/', (req, res) => res.send({ 
    msg: '我是来自8000上的数据'
}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

