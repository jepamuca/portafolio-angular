//app.controller.js
(function(){
    'use strict';

    angular.module('app.usuarios.controller',[

    ]).controller('usuariosListCtrl', usuariosListCtrl); //nombre con el que se va a identificar en la aplicacion

    function usuariosListCtrl() { //Ctrl es controlador, Lista de usuarios
        this.usuarios = [    //Scope = puente vista-logica, $scope = mala practica se usa this.usuarios
          {nombre: 'Steven'},
          {nombre: 'Pepito'},
          {nombre: 'Luisa'},
          {nombre: 'Valentina'},
          {apellido: 'Lozano'},
          {apellido: 'Perez'},
          {apellido: 'Martinez'},
          {apellido: 'Gonzales'},
          {telefono: '8878787'},
          {telefono: '2313215'},
          {telefono: '9551515'},
          {telefono: '6564556'},
          {direccion: 'Calle 1'},
          {direccion: 'Calle 2'},
          {direccion: 'Calle 3'},
          {direccion: 'Calle 4'},
          {correo: 'asd@asd.com'},
          {correo: 'lkj@lkj.com'},
          {correo: 'qwe@qwe.com'},
          {correo: 'ñlk@ñlk.com'},

        ];
    }

})();
