const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sodaSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 1
  },

  description: {
  	type: String, required: false, trim: true
  },

  price: {
  	type: Number, required: true
  },

  quantity: {
  	type: Number, required: true
  },
}, {
  timestamps: true,
});

//make mongodb model from schema object
const Soda = mongoose.model('Soda', sodaSchema);

module.exports = Soda;