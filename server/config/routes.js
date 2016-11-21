var algorithm = require('./../controllers/algorithmController.js')
module.exports = function(app){
	app.get('/getQuestion', function(req, res){
		algorithm.getQuestion(req, res);
	})
}
