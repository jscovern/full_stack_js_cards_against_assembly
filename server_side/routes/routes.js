var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'); //parses information from POST

var cardsController = require('../controllers/cardsController');

router.route('/api')
	.get(cardsController.getAll)
	.post(cardsController.postCard);
router.route('/api/:id')
	.get(cardsController.getCard);

module.exports = router;