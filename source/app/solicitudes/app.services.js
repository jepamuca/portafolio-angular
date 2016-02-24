(function () {
    'use strict';
    angular.module('app.solicitudes.services', [
    ])
        .factory('Solicitudes', Solicitudes);

    Solicitudes.$inject = ['$resource', 'BaseUrl'];

    function Solicitudes($resource, BaseUrl) {
        return $resource(BaseUrl + '/solicitudes/:solicitudId',
            //Se debe digitar el id del modelo
            { solicitudId: '@_id' });
    }
})();