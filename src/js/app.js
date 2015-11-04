define(['angular',
    'angular-locale_pt-br',
    'angular-route',
    'angular-cookies',
    'angular-resource',
    'angular-sanitize',
    'angular-animate',
    'angular-aria',
    'angular-material',
    'angular-ui-mask',
    'jquery',
    'jquery-ui',
    'dataTables',    
    'moment',
    'numeral',
    'numeral-languages',        
    'metro',
    'docs',
    'px-config',
    '../lib/px-project/dist/system/login/index',
    '../lib/px-project/dist/system/home/index',
    '../lib/px-project/dist/system/controllers/index',
    '../lib/px-project/dist/system/directives/index',
    '../lib/px-project/dist/system/filters/index',
    '../lib/px-project/dist/system/services/index',
    '../custom/controllers/index',
    '../custom/directives/index',
    '../custom/filters/index',
    '../custom/services/index'
], function(angular) {
    var app = angular.module('myApp', [
        'ngRoute',
        'ngCookies',
        'ngMaterial',
        'ui.mask',
        'pxConfig',        
        'system.controllers',
        'system.directives',
        'system.filters',
        'system.services',
        'app.controllers',
        'app.directives',
        'app.filters',
        'app.services'
    ]);

    app.init = function() {
        angular.bootstrap(document, ['myApp']);
    };

    return app;
});