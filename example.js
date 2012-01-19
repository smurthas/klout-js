// example usage of klout-js - queries one existing and one missing klout profiles
// call providing your Klout API key as argument
// eg. node example.js 1234abc
var klout = require('./klout-js.js')(process.argv[2]);

klout.klout(['smurthasmith', 'jeremie'], function(err, data) {
    console.log('getKloutScore:', JSON.stringify(data));
    console.log('.....................');
});

klout.show(['smurthasmith', 'jeremie'], function(err, data) {
    console.log('getKloutProfile:', JSON.stringify(data));
    console.log('.....................');
});

klout.topics(['smurthasmith', 'jeremie'], function(err, data) {
    console.log('getKloutTopics:', JSON.stringify(data));
    console.log('.....................');
});

klout.influencedBy(['smurthasmith', 'jeremie'], function(err, data) {
    console.log('getKloutInfluencers:', JSON.stringify(data));
    console.log('.....................');
});

klout.influencerOf(['smurthasmith', 'jeremie'], function(err, data) {
    console.log('getKloutInfluencees:', JSON.stringify(data));
    console.log('.....................');
});