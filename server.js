const express = require('express')
const app = express()

app.use(express.static('./dist/wbms-project'))

app.get('/*', req, res =>{
        res.sendFile('index.html', 
        {root: 'dist/wbms-project/'}
        )
})

app.listen(process.env.port || 8080)