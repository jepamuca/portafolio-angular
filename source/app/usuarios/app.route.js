//app.router.js
(function(){
    'use strict';

    angular.module('app.usuarios.route', [
      'app.usuarios.controller'


    ])
      .config(configure);

    configure.$inject = ['$stateProvider' , '$urlRouterProvider']

    function configure($stateProvider, $urlRouterProvider){ //parametros de UI-ROUTER angular oficial -> ng-router -> SPA limitada...

      $urlRouterProvider.otherwise('/') //redirecciona al index

      $stateProvider
        .state('usuarios', {
            url: '/usuarios', //ruta
            views: {
              'usuarios' : {
                  template:'<usuarios/>' //ruta
              },
              'encabezado':{
                  template: '<encabezado/>' //ruta
              },
              'piepagina': {
                  template: '<piepagina/>' //ruta

              }
            }


        });

    };

})();
