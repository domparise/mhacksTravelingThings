module.exports = function (app) {

    app.get('/', function (req, res, next) {
        return res.sendFile(__dirname+'/public/index.html')
    })

}