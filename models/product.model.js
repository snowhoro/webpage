const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    categories: [Number],
    subcategory: Number,
    brand: Number,
    description: String,
    img: String,
    file: String,
    order: Number,
    created_on: {
        type: Date,
        default: Date.now
    },
    created_by: {
        type: String,
        default: 'admin'
    },
    active: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('product', productSchema);