(function () {
    'use strict';

    angular
        .module('app')
        .config(routeConfig);

    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('tasks', {
                url: '/tasks',
                templateUrl: 'templates/user/user.html',
                controller: 'user',
                controllerAs: 'vm',
                resolve: {
                    taskData: function (tasks) {
                        var data = {developer: 'Maksym'};
                        return tasks.getTasks(data).then(function (res) {
                            return res.data;
                        })
                    },
                    checkRights: function (auth) {
                        return auth.isAdmin();
                    }
                }
            })
            .state('admin', {
                url: '/admin',
                templateUrl: 'templates/admin/admin.html',
                controller: 'admin',
                controllerAs: 'vm'
            });
        $urlRouterProvider.otherwise('/tasks');
    }

})();
