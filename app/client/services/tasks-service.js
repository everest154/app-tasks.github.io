;(function () {
    'use strict';

    angular
        .module('app')
        .service('tasks', tasks);

    function tasks($http, url, md5) {

        return {
            getTasks: getTasks,
            getDefinePageTasks: getDefinePageTasks,
            getSortedTasks: getSortedTasks,
            createTask: createTask,
            editTask: editTask
        };

        function getTasks(data) {
            return $http.get(url.tasks.all, {params: data})
                .then(function (res) {
                    return res;
                });
        }

        function getDefinePageTasks(data) {
            return $http.get(url.tasks.all, {params: data})
                .then(function (res) {
                    return res;
                });
        }

        function getSortedTasks(data) {
            return $http.get(url.tasks.all, {params: data})
                .then(function (res) {
                    return res;
                });
        }

        function createTask(data) {
            var fd = new FormData();
            fd.append('username', data.username);
            fd.append('email', data.email);
            fd.append('text', data.text);
            fd.append('image', data.image);
            return $http.post(url.tasks.create, fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            });
        }

        function editTask(data, id) {
            var prop = {
                status: data.status,
                text: data.text,
                token: 'beejee'
            };
            var paramString = '';
            for (var key in prop) {
                paramString += encodeURI(key) + '=' + encodeURI(prop[key]) + '&';
            }
            paramString = paramString.slice(0, -1);
            var signature = md5.createHash(paramString);
            var fd = new FormData();
            fd.append('signature', signature);
            fd.append('status', prop.status);
            fd.append('text', prop.text);
            fd.append('token', prop.token);
            return $http.post(url.tasks.edit + id, fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            });
        }
    }
})();