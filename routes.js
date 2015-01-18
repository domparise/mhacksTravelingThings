module.exports = function (app) {

	var concur = require('concur-platform');

    app.get('/', function (req, res, next) {
        return res.sendFile(__dirname+'/public/index.html')
    })

    app.post('/api', function (req, res) {
    	var quickexpenseJSON = {
		    "Comment": "I am a Quick Expense",
		    "CurrencyCode": "USD",
		    "ExpenseTypeCode": "CARMI",
		    "LocationCity": "Seattle",
		    "LocationCountry": "US",
		    "LocationSubdivision": "US-WA",
		    "TransactionAmount": "12.23",
		    "TransactionDate": "2015-05-10",
		    "VendorDescription": "Ay wat up"
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