(function(){
    'use strict';

    angular.module('app.usuarios.services',[

  ]).factory('Usuarios', Usuarios); //o Services esto es para que lo puedan usar en cualquier otra parte de la aplicacion donde se llame

  //factory -> logica mas compleja
  //services -> logica sencilla
  //AMBAS-Se puede acceder desde cualquier lugar de la palicacion...
  //Tiene unas instancia unica
  //Patron de Diseño Singleton... Singleton = es para cuando sea 1 variable y se va a usar en todo
  //Consultar ventajas de Singleton...
  //En u service se realiza todo lo necesario para conectar la BD o el web Services = Crea una instancia unica y no se recarga la pagina con cada solicitud
  //Inject dependence
  //$resource
  //Darle  el nombre a la funcion que al modulo.
  //con esto: Usuarios.$inject =['$resource']; se le dice que no modifique el $resource del inject
  Usuarios.$inject =['$resource'];

  function Usuarios($resource){
      return$resource('http://10.72.255.173:8080/Portafolio-Backend/webresources/');

  }


})();
