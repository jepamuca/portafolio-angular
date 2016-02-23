(function () {
    'use strict';

    angular.module('app.solicitudes.controller', [
        'app.solicitudes.services',
    ]).controller('solicitudesListCtrl', solicitudesListCtrl)
        .controller('solicitudesFindByIdCtrl', solicitudesFindByIdCtrl)
        .controller('solicitudesCreateCtrl', solicitudesCreateCtrl);
      
    //Se inyecta los parametros
    solicitudesListCtrl.$inject = ['Solicitudes'];
    //List
    function solicitudesListCtrl(Solicitudes) {
        this.solicitudes = Solicitudes.query();
    }
    //Se inyecta los parametros
    solicitudesFindByIdCtrl.$inject = ['$routeParams', 'Solicitudes'];
    //Find By Id
    function solicitudesFindByIdCtrl($routeParams, Solicitudes) {
        this.id = $routeParams.solicitudId;
        this.solicitud = Solicitudes.get({ solicitudId: this.id });
    }
    //Se inyecta los parametros
    solicitudesCreateCtrl.$inject = ['Solicitudes'];
    //Create
    function solicitudesCreateCtrl(Solicitudes) {
        this.create = function () {
            Solicitudes.save(this.solicitud);
            this.solicitud = {};
        };
    }

})();
