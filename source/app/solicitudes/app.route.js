(function () {
    'use strict';

    angular.module('app.solicitudes', [
        'app.solicitudes.controller',
    ]).config(configure);
    
    //Se inyecta los parametros
    configure.$inject = ['$locationProvider', '$routeProvider'];
    
    //Se configura las rutas de la aplicación para modelo
    function configure($locationProvider, $routeProvider) {
        //Se quita el # en las URL
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        
        //Se configuras las rutas
        $routeProvider
            .when('/solicitudes/list', {
                templateUrl: 'app/solicitudes/list.html',
                controller: 'solicitudesListCtrl',
                controllerAs: 'vm',
            })
            .when('/solicitudes/:solicitudId', {
                templateUrl: 'app/solicitudes/id.html',
                controller: 'solicitudesFindByIdCtrl',
                controllerAs: 'vm'
            })
            .when('/solicitudes', {
                templateUrl: 'app/solicitudes/create.html',
                controller: 'solicitudesCreateCtrl',
                controllerAs: 'vm',
            })
            .otherwise({
                redirectTo: '/'
            });
    };
})();
