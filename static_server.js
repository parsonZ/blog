const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const hooks = require('./githooks')

app.use(bodyParser.urlencoded({extended: false}));//body parser插件配置
app.use(bodyParser.json());//body parser插件配置

const port = 8000

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,ts');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
})

app.use('/static', express.static('static'))

// git hooks: 监听push事件
app.post('/api/git_hook', () => hooks())

app.use('/', (req, res) => res.send({ 
    msg: '我是来自8000上的数据'
}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

