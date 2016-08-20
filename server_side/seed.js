var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/cards-against-assembly");


var db=require("./models/card");
console.log(db.Card);

var seed_me = {question:"first question",answer:"first answer",answerHidden:'true'};
console.log(seed_me);
db.Card.create(seed_me, function(err,card) {
	process.exit();
});