(function () {
    'use strict';

    angular
        .module('app',
            ['ui.router', 'user', 'admin', 'ngMaterial', 'ngMessages', 'factory.urlRequest', 'components.edit-create-task', 'flow', 'angular-md5']
        )
})();
