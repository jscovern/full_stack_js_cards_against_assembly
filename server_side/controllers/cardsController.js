var Card = require('../models/card.js');

function getAll(req,res) {
	console.log('in the getAll');
	Card.find({},function(error,cards) {
		if(error) res.json({message: "Could not find any cards"});
		res.json({cards: cards});
	});
}

function postCard(req,res) {
	console.log('in the postCard');
	console.log(req);
	var card = new Card(req.body);
	card.save(function(error) {
		if(error) res.json({message: "Could not create card b/c "+error});
	});
}

function getCard(req,res) {
	console.log("in the getcard");
	var id = req.params.id;
	Card.findById({_id: id}, function(error,card) {
		if(error) {
			res.json({message: "Couldn't find the card b/c "+error});
		}
		res.json({card: card});
	});
}

module.exports = {
  getAll: getAll,
  postCard: postCard,
  getCard: getCard
};