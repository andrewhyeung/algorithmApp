var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var algorithmSchema = new mongoose.Schema({
	question: {
		type: String
	},
	solution: {
		type: String
	}
}); 

module.exports = mongoose.model('algorithms', algorithmSchema);
mongoose.model('algorithms', algorithmSchema);

