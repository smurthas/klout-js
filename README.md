# klout-js

A simple wrapper of the Klout API in node

    npm install klout-js

## Usage

First you need an API key, which you can get [here](http://developer.klout.com/) (but you already knew that).

Then you can run the example to make sure everything is working:

    node example.js your-api-key

which looks something like this

    var klout = require('klout-js')('your-api-key');

    klout.klout(['smurthas', 'jeremie'], function(err, data) {
        console.log('getKloutScore:', data);
    });

    klout.show(['smurthas', 'jeremie'], function(err, data) {
        console.log('getKloutScore:', data);
    });

    klout.topics(['smurthas', 'jeremie'], function(err, data) {
        console.log('getKloutScore:', data);
    });
    
Follow [@smurthas](http://twitter.com/smurthas) for updates!