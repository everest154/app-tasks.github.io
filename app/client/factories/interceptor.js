(function () {
    'use strict';

    angular.module('app').factory('timestampMarker', [function () {
        return {
            request: function (config) {
                if (!config.params) {
                    config.params = {};
                }
                if (!/.html$/.test(config.url)) {
                    config.params = Object.assign(config.params, {developer: 'Maksym'});
                }
                return config;
            },
            response: function (response) {
                return response;
            }
        };
    }]);

    angular.module('app').config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('timestampMarker');
    }]);

})();