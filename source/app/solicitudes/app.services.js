(function () {
    'use strict';
    angular.module('app.solicitudes.services', [
    ])
        .constant('BaseUrl', 'http://localhost:4000/api')
        .factory('Solicitudes', Solicitudes);

    Solicitudes.$inject = ['$resource', 'BaseUrl'];

    function Solicitudes($resource, BaseUrl) {
        return $resource(BaseUrl + '/solicitudes/:solicitudId',
            { solicitudId: '@_id' });
    }
})();