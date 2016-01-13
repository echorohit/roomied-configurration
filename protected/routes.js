/**
 * Created by bll on 10/1/16.
 */
'use strict';


var routes = [
    {
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            return reply.success({"hello" : "world"});
        }
    },

    {
        method: 'GET',
        path: '/my/custom',
        handler: function (request, reply) {
            return reply({"my" : "custome"});
        }
    }
];


exports = module.exports = (server) => {
    server.route(routes);
};


