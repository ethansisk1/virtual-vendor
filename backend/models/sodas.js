const router = require('express').Router();
let Soda = require('../models/sodas.model');

router.route('/').get((req, res) => {
	Soda.find()
	.then(sodas => res.json(sodas))
	.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	const product_name = req.body.product_name;
	const description = req.body.description;
	const cost = Number(req.body.cost);
	const quantity = Number(req.body.quantity);

	const newSoda = new Soda({product_name,
		description, cost, quantity});

	newSoda.save()
	.then(() => res.json('Soda Added!'))
	.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;