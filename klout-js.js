var request = require('request');

var BASE = 'http://api.klout.com/1/';

module.exports = function(apiKey) {
    var client = {API_KEY:apiKey};
    
    function makeRequest(endpoint, usernames, callback) {
        request.get({uri:BASE + endpoint + '.json?key=' + client.API_KEY + '&users=' + usernames}, 
            function(err, resp, body) {
                if(err)
                    callback(err, body);
                else
                    callback(null, JSON.parse(body));
            });
    }
    
    client.klout = function (usernames, callback) {
        makeRequest('klout', usernames, callback);
    };
    client.show = function (usernames, callback) {
        makeRequest('users/show', usernames, callback);
    };
    client.topics = function (usernames, callback) {
        makeRequest('users/topics', usernames, callback);
    };
    client.influencedBy = function (usernames, callback) {
        makeRequest('soi/influenced_by', usernames, callback);
    };
    client.influencerOf = function (usernames, callback) {
        makeRequest('soi/influencer_of', usernames, callback);
    };
    
    return client;
}

