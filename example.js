// example usage of klout-js - queries one existing and one missing klout profiles
// call providing your Klout API key as argument
// eg. node example.js 1234abc
var klout = require('./klout-js.js')(process.argv[2]);

klout.klout(['smurthas', 'jeremie'], function(err, data) {
    console.log('getKloutScore:\n', JSON.stringify(data, true, 4));
    console.log('.....................');
});

klout.show(['smurthas', 'jeremie'], function(err, data) {
    console.log('getKloutProfile:\n', JSON.stringify(data, true, 4));
    console.log('.....................');
});

klout.topics(['smurthas', 'jeremie'], function(err, data) {
    console.log('getKloutTopics:\n', JSON.stringify(data, true, 4));
    console.log('.....................');
});

klout.influencedBy(['smurthas', 'jeremie'], function(err, data) {
    console.log('getKloutInfluencers:\n', JSON.stringify(data, true, 4));
    console.log('.....................');
});

klout.influencerOf(['smurthas', 'jeremie'], function(err, data) {
    console.log('getKloutInfluencees:\n', JSON.stringify(data, true, 4));
    console.log('.....................');
});