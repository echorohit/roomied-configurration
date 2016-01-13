'use strict';

const Hapi = require('hapi');
const routes = require('./protected/routes');
const server = new Hapi.Server({
    cache: require('catbox-memory'),
    load: {sampleInterval: 1000}
});


server.connection({address: '127.0.0.1', port: 3001, labels : 'a'});

const add = function(a, b, next){
    return next(null, a+b);
};

server.method('add', add);

server.methods.add(1, 2, (err, result) => {
   console.log(result);
});

routes(server);

server.start(() => {
    console.log('Server running at:',server.info.uri);
});