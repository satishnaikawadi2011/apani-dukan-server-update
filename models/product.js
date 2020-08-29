const mongoose = require('mongoose');
const myGeocoder = require('../utils/location');
const Schema = mongoose.Schema;

const productSchema = new Schema({
	title       : { type: String, required: true },
	description : { type: String, required: true },
	image       : {
		type: String,
		required: true,
		default: 'https://cdn.pixabay.com/photo/2020/06/21/09/54/cardboard-5324172_1280.jpg'
	},
	state       : { type: String, required: true },
	city        : { type: String, required: true },
	locality    : { type: String, required: true },
	category    : { type: String, required: true },
	model       : { type: String, required: true },
	brand       : { type: String, required: true },
	contact     : { type: String, required: true },
	price       : { type: Number, required: true },
	zip         : { type: Number, required: true },
	location    : {
		longitude : { type: Number, required: true },
		latitude  : { type: Number, required: true }
	},
	owner       : { type: mongoose.Types.ObjectId, required: true, ref: 'User' }
});

module.exports = mongoose.model('Product', productSchema);
