const { houseSchema } = require('../model/houseModel')

const mongoose = require('mongoose'),
      DB_URL = 'mongodb://localhost:27017/house_spider';

var db = mongoose.connection;
var House = mongoose.model('houses', houseSchema);

db.on('connected', function(){
    console.log('mongo db connected successfully');
});

function saveMany(data){
    mongoose.connect(DB_URL, {useNewUrlParser: true});
    House.insertMany(data, function(err, data){
        console.log(err);
    });
}

function findAll(){
    mongoose.connect(DB_URL, {useNewUrlParser: true});
    let houses = House.find({}, function(err, data) {
        console.log(data)
    });
    return houses;
}

module.exports = {
    saveMany,
    findAll
}