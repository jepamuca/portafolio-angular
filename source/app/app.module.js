(function () {
    'use strict';

    angular.module('app', [
        'ui.router',
        'ngResource',
        'angular.filter',
        //'templates',
        'app.config',
        'app.inicio',
        'app.footer',
        'app.header',
        'app.admin'
    ]);

})();
