const express = require('express')

const path = require('path')

const app = express()

app.use(express.static('./dist/wbms_frontEnd/'))

app.get('/*', req, res =>{
        res.sendFile('index.html', 
        {root: 'dist/wbms_frontEnd/'}
        )
})

app.listen(process.env.port || 8080)