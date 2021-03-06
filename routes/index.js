//routes/index.js
var express = require('express');
var router = express.Router();

// Mongoose import
var mongoose = require('mongoose');

var seeder = require('../app/seeder');

// Mongoose connection to MongoDB
mongoose.connect('mongodb://localhost:27017/node_leaflet', function (error) {
    if (error) {
        console.log(error);
    }
});

mongoose.connection.on('open', function() {
    console.log("Connected to Mongoose...");

    // check if the db is empty, if so seed it with some contacts:
    seeder.check();
});

// Mongoose Schema definition
var Schema = mongoose.Schema;
var JsonSchema = new Schema({
    name: String,
    type: Schema.Types.Mixed
});

// Mongoose Model definition
var Json = mongoose.model('JString', JsonSchema, 'layercollection');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET GeoJSON data. */
router.get('/mapjson/:name', function (req, res) {
    if (req.params.name) {
        Json.findOne({ name: req.params.name },{}, function (err, docs) {
            res.json(docs);
        });
    }
});

/* GET layers json data. */
router.get('/maplayers', function (req, res) {
    Json.find({},{'name': 1}, function (err, docs) {
        res.json(docs);
    });
});

/* GET Map page. */
router.get('/map', function(req,res) {
    var db = req.db;
    Json.find({},{}, function(e,docs){
        res.render('map', {
            "jmap" : docs,
            lat : 40.78854,
            lng : -73.96374
        });
    });
});

module.exports = router;
