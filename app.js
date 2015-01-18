var express = require('express')
var app = express()

app.set('views',__dirname+'/client') // use jade templating engine 
app.set('view engine','jade') // we only template the authenticated section of the website

require(__dirname+'/routes.js')(app)

app.use(express.static(__dirname+'/public'))

app.listen(3000)