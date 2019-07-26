const mongoose = require('mongoose');

var houseSchema = new mongoose.Schema({
    title: String,
    img: String,
    priceDet: Number,
    unitPrice: String,
    commonAddress: String,
    detailsItem: String,
    detailLink: String
});

module.exports = {
    houseSchema
}