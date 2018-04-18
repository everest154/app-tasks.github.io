(function () {
    'use strict';
    angular
        .module('factory.urlRequest', [])
        .factory('url', [
            function () {

                var baseUrl = 'https://uxcandy.com/~shapoval/test-task-backend/';
                return {
                    tasks: {
                        all: baseUrl,
                        create: baseUrl + 'create',
                        edit: baseUrl + 'edit/'
                    }
                };
            }
        ]);
})();
