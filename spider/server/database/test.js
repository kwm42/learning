var mongoose = require('mongoose'),
    DB_URL = 'mongodb://localhost:27017/test02';

var db = mongoose.connection;

db.once('open', function () {
    console.log('connection is opened');
});
mongoose.connect(DB_URL, { useNewUrlParser: true });

mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + DB_URL);
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});

var kittySchema = new mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function () {
    var greeting = this.name
        ? "Meow name is " + this.name
        : "I don't have a name";
    console.log(greeting);
}

var Kitten = mongoose.model('Kitten', kittySchema);

var silence = new Kitten({ name: 'Silence' });
console.log(silence.name);

var fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); // "Meow name is fluffy"

fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
});