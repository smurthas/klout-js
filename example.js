var klout = require('klout-js')(process.argv[2]);

klout.klout(['smurthasmith', 'jeremie'], function(err, data) {
    console.log('getKloutScore:', data);
});

klout.show(['smurthasmith', 'jeremie'], function(err, data) {
    console.log('getKloutScore:', data);
});

klout.topics(['smurthasmith', 'jeremie'], function(err, data) {
    console.log('getKloutScore:', data);
});

//these endpoints don't seem to work, if anyone can get them to work, please help!!
/* 
klout.influencedBy(['smurthasmith', 'jeremie'], function(data) {
    console.log('getKloutScore:', data);
});

klout.influencerOf(['smurthasmith', 'jeremie'], function(data) {
    console.log('getKloutScore:', data);
});*/