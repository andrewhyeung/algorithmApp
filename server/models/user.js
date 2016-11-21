var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
	email : {
		type : String,
		required : true,
		maxlength : 25,
	},
	password: {
		type: String, 
		required : true, 
	}
})