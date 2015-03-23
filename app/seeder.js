var mongoose = require('mongoose'),
    models = require('./models');

module.exports = {
    check: function() {
        models.Layer.find({}, function(err, layers) {
            if (layers.length === 0) {
                console.log('no layers found, seeding...');
                var newLayer = new models.Layer({
                    name: 'points',
                    type: 'MultiPoint',
                    coordinates: [
                       [ -73.9580, 40.8003 ],
                       [ -73.9498, 40.7968 ],
                       [ -73.9737, 40.7648 ],
                       [ -73.9814, 40.7681 ]
                    ]
                });
                newLayer.save(function(err, layer) {
                    console.log('successfully inserted layer: ' + layer._id);
                });

                newLayer = new models.Layer({
                    name: 'lines',
                    type: 'MultiLineString',
                    coordinates: [
                         [ [ -73.96943, 40.78519 ], [ -73.96082, 40.78095 ] ],
                         [ [ -73.96415, 40.79229 ], [ -73.95544, 40.78854 ] ],
                         [ [ -73.97162, 40.78205 ], [ -73.96374, 40.77715 ] ],
                         [ [ -73.97880, 40.77247 ], [ -73.97036, 40.76811 ] ]
                      ]
                });
                newLayer.save(function(err, layer) {
                    console.log('successfully inserted layer: ' + layer._id);
                });

                newLayer = new models.Layer({
                    name: 'polygons',
                    type: 'MultiPolygon',
                    coordinates: [
                        [ [ [ -73.958, 40.8003 ], [ -73.9498, 40.7968 ], [ -73.9737, 40.7648 ], [ -73.9814, 40.7681 ], [ -73.958, 40.8003 ] ] ],
                         [ [ [ -73.958, 40.8003 ], [ -73.9498, 40.7968 ], [ -73.9737, 40.7648 ], [ -73.958, 40.8003 ] ] ]
                    ]
                });
                newLayer.save(function(err, layer) {
                    console.log('successfully inserted layer: ' + layer._id);
                });
            } else {
                console.log('found ' + layers.length + ' existing layers!');
            }
        });
    }
};
