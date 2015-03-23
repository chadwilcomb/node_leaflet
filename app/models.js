var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


// var JsonSchema = new Schema({
//     name: String,
//     type: Schema.Types.Mixed
// });

var Layer = new Schema({
    name:      { type: String },
    type:      { type: String },
    coordinate:   { type: Array }
});

module.exports = {
    Layer: mongoose.model('Layer', Layer)
};
