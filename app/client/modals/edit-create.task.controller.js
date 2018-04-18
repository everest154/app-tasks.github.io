;(function () {
    'use strict';

    angular
        .module('components.edit-create-task', [])
        .controller('EditCreateTask', EditCreateTask);

    /* @ngInject */
    function EditCreateTask($mdDialog, task, tasks, type, isDone) {

        var vm = this;

        vm.type = type;
        vm.task = task;
        vm.taskData = {};

        vm.isDone = isDone;
        vm.createTask = createTask;
        vm.editTask = editTask;
        vm.actionTask = actionTask;
        vm.cancel = cancel;
        vm.uploadFile = uploadFile;
        vm.validateEmail = validateEmail;
        vm.checkTask = checkTask;

        checkTask();

        function checkTask() {
            vm.task ? Object.assign(vm.taskData, vm.task) : vm.task;
        }

        function uploadFile(img) {
            vm.currentImage = img;
            vm.taskData.image = img.file;
        }

        function createTask() {
            if (!validateEmail(vm.taskData.email) || !vm.currentImage || !vm.taskData.text) {
                toastr.error('Invalid fields');
            } else {
                tasks.createTask(vm.taskData)
                    .then(function (res) {
                        vm.addedTask = res.data.message;
                        $mdDialog.hide(vm.addedTask);
                    });
            }
        }

        function validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }

        function editTask() {
            vm.isDone ? vm.taskData.status = 10 : vm.taskData.status = 0;
            tasks.editTask(vm.taskData, vm.task.id)
                .then(function (res) {
                    $mdDialog.hide(vm.isDone);
                });
        }

        function actionTask() {
            vm.task ? editTask() : createTask();
        }

        function cancel() {
            $mdDialog.cancel();
        }
    }

})();
