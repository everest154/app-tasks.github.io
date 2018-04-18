(function () {
    'use strict';
    angular
        .module('admin')
        .controller('admin', admin);

    /* @ngInject */
    function admin($state) {
        var vm = this;

        vm.loginData = {};

        vm.auth = auth;

        function auth() {
            if (vm.form.$invalid) {
                toastr.error('Form invalid');
            } else if (vm.loginData.login === 'admin' && vm.loginData.password === '123') {
                localStorage.setItem('role', JSON.stringify('admin'));
                $state.go('tasks')
            } else {
                toastr.error('Incorrect password or email')
            }
        }
    }
})();
