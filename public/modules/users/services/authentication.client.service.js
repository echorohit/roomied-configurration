/**
 * Created by bll on 12/1/16.
 */
'use strict';

// Authentication service for user variables
angular.module('users').factory('Authentication', ['$window', function($window) {
    var auth = {
        user: $window.user
    };

    return auth;
}]);
