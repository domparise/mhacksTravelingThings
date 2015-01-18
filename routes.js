var concur = require('concur-platform');
module.exports = function (app) {

    app.get('/', function (req, res) {
        return res.render('app', {theVariable:'value'})
    })

    app.post('/api', function (req, res) {
    	var quickexpenseJSON = {
		    "Comment": "I am a booty slap",
		    "CurrencyCode": "USD",
		    "ExpenseTypeCode": "ROOME",
		    "LocationCity": "Ann Arbor",
		    "LocationCountry": "US",
		    "LocationSubdivision": "US-MI",
		    "TransactionAmount": "69.69",
		    "TransactionDate": "2015-05-10",
		    "VendorDescription": "BootyTime"
		}

		var options = {
		    oauthToken:'WUqR9zTdVtOCaJZIr47Squi/CT0=',
		    contentType:'application/json',
		    body:quickexpenseJSON
		}

		concur.quickexpenses.send(options)
		.then(function(data){
		    console.log(data)
		})
		.fail(function (error) {
		    console.log(error)
		})

    })

}