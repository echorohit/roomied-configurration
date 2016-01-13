/**
 * Created by bll on 14/1/16.
 */
'use strict';

/**
 * Module dependencies.
 */
var path   = require('path'),
    Config = require('./config');

/**
 * Module init function.
 */
module.exports = function (server) {

    // Initialize strategies
    Config.getGlobbedFiles('./config/strategies/**/*.js').forEach( (strategy) => {

        strategy = require(path.resolve(strategy));
        server.auth.strategy(strategy.strategyName, strategy.schemeName, strategy.strategyConfig);
    });
};