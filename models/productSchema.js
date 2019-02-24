var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
        required: false
    },
    imgSrc: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    caunt: {
        type: Number,
        required: false
    },
    sale:{
        type: Boolean,
        default: false
    },

    price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Product', productSchema);