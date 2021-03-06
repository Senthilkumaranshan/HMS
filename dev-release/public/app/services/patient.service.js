'use strict';

angular.module('BlurAdmin.OPD').factory('PatientService', ['$http',
    function ($http) {
        return {
            get: () => $http.get('/patients').then(response => response.data),
            getById: id => $http.get('/patients/' + id).then(response => response.data),

            getByhin:hin => $http.get('/patients?hin=' + hin).then(response => response.data),
            getBynic:nic => $http.get('/patients?nic=' + nic).then(response => response.data),
            getLast50:()=> $http.get('/patients?criteria=last50').then(response =>response.data),

        };
    }]);