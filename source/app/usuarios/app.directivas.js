//app.directivas.js
(function(){
    'use strict';

    angular.module('app.usuarios.directivas',[


    ]).directive('usuarios' , usuarios);

    function usuarios(){
      return{
          scope:{}, //scope es del alcance
          templateUrl:'app/usuarios/lista.html', //trae el trozo de codigo de html que quiero que cargue
          controller: 'usuariosListCtrl',
          controllerAs: 'vm' //apodo del controlador
      }
    }

})();
