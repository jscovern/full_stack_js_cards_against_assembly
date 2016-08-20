var mongoose = require('mongoose');

var CardSchema = mongoose.Schema({
	question: String,
	answer: String,
	answerHidden: Boolean
});

module.exports = mongoose.model('Card', CardSchema);