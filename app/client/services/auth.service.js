;(function () {
    'use strict';

    angular
        .module('app')
        .service('auth', auth);

    function auth() {

        return {
            isAdmin: isAdmin,
            logout: logout
        };

        function isAdmin() {
            return JSON.parse(localStorage.getItem('role')) === 'admin';
        }

        function logout() {
            localStorage.removeItem('role');
        }
    }
})();