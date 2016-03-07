(function(){
    'use strict';

    angular.module('app.usuarios.module',[
        'app.usuarios.services' , //trabajar los metodos get, remove, etc
        'app.usuarios.directivas' , //directivas: es donde se va a crear etiquetas similares HTML
        'app.usuarios.controller' , //logica controller
        'app.usuarios.route' //donde indico la ruta

    ]);

})(); //Tener cuidado con el () si no lo tiene no deja arrancar la aplicacion
