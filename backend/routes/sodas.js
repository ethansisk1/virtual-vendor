const router = require('express').Router();
let Soda = require('../models/sodas.model');

// get list of all sodas
router.route('/').get((req, res) => {
	Soda.find()
	.then(sodas => res.json(sodas))
	.catch(err => res.status(400).json('Error: ' + err));
});

// create a new soda
router.route('/add').post((req, res) => {
	const name = req.body.name;
	const description = req.body.description;
	const price = Number(req.body.price);
	const quantity = Number(req.body.quantity);

	const newSoda = new Soda({name,
		description, price, quantity});

	newSoda.save()
	.then(() => res.json('Soda Added!'))
	.catch(err => res.status(400).json('Error: ' + err));
});

// get a specific soda
router.route('/:id').get((req, res) => {
	Soda.findById(req.params.id)
	.then(soda => res.json(soda))
	.catch(err => res.status(400).json('Error: ' + err));
});

// delete a specific soda
router.route('/:id').delete((req, res) => {
	Soda.findByIdAndDelete(req.params.id)
	.then(() => res.json('Soda Deleted'))
	.catch(err => res.status(400).json('Error: ' + err));
});

// update a specific soda
router.route('/update/:id').post((req, res) => {
	Soda.findById(req.params.id)
	.then(soda => {
		soda.name = req.body.name;
		soda.description = req.body.description;
		soda.price = Number(req.body.price);
		soda.quantity = Number(req.body.quantity);

		soda.save()
		.then(() => res.json('Soda Updated'))
		.catch(err => res.status(400).json('Error: ' + err));
	})
	.catch(err => res.status(400).json('Error: ') + err);
});

module.exports = router;