var express = require('express')
var app = express()

app.use(express.static(__dirname+'/public'))

require(__dirname+'/routes.js')(app)

app.listen(3000)