var express = require('express')
var app = express()

app.set('views',__dirname+'/client') // use jade templating engine 
app.set('view engine','jade') // we only template the authenticated section of the website
app.use(express.static(__dirname+'/public'))

require(__dirname+'/routes.js')(app)

app.listen(3000)