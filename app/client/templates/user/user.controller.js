(function () {
    'use strict';
    angular
        .module('user')
        .controller('user', user);

    /* @ngInject */
    function user(taskData, tasks, checkRights, auth, $mdDialog, $state) {
        var vm = this;

        vm.taskData = taskData.message.tasks;
        vm.paginationCount = taskData.message.total_task_count;
        vm.isAdmin = checkRights;

        vm.getPaginationPages = getPaginationPages;
        vm.getMorePages = getMorePages;
        vm.getSortedTasks = getSortedTasks;
        vm.createEditTask = createEditTask;
        vm.logout = logout;

        vm.activate = activate;

        activate();

        function activate() {
            getPaginationPages(vm.paginationCount);
        }

        function getPaginationPages(number) {
            vm.pagesCount = [];
            var pages = number % 3 === 0 ? number / 3 : Math.floor(number / 3) + 1;
            for (var i = 0; i < pages; i++) {
                vm.pagesCount.push(i);
            }
        }

        function logout() {
            auth.logout();
            vm.isAdmin = auth.isAdmin();
            toastr.success('You have successfully logout')
        }

        function getMorePages(page) {
            var data = {
                page: page
            };
            tasks.getDefinePageTasks(data)
                .then(function (res) {
                    vm.taskData = res.data.message.tasks;
                });

        }

        function getSortedTasks(field, direction) {
            var searchData = {
                sort_field: field,
                sort_direction: direction
            };
            tasks.getSortedTasks(searchData)
                .then(function (res) {
                    vm.taskData = res.data.message.tasks;
                });
        }

        function createEditTask(event, task, type) {
            $mdDialog.show({
                controller: 'EditCreateTask',
                controllerAs: 'vm',
                templateUrl: 'modals/edit-create.task.html',
                parent: angular.element(document.body),
                targetEvent: event,
                clickOutsideToClose: true,
                locals: {
                    task: task,
                    type: type,
                    isDone: task && task.status === 10
                }
            }).then(function (res) {
                vm.taskData.push(res);
                $state.reload();
            });
        }
    }
})();
