var express = require('express')
var app = express()

app.set('views',__dirname+'/client')
app.set('view engine','jade') // use jade templating engine 

require(__dirname+'/routes.js')(app)

app.use(express.static(__dirname+'/public'))

app.listen(3000)