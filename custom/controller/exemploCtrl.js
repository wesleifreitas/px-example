// Este script deve ser carregado em 'phoenix-config.js', variável 'controller'
app.controller('exemploCtrl', function($scope, $element, $attrs) {

    console.info('exemploCtrl carregado com sucesso.');

    $scope.gridInit = function() {

        var grid = $scope.$$childHead; // Este é o componente px (directiva px-grid).

        // Verifica se os campos da grid não estão definidos.
        if (!angular.isDefined(grid.fields) || grid.fields == '') {
            grid.fields = [{
                title: 'id',
                field: 'exe_id',
                type: 'int'
            }, {
                title: 'Nome',
                field: 'exe_nome',
                type: 'varchar'
            }, {
                title: 'CPF',
                field: 'exe_cpf',
                type: 'varchar'
            }, {
                title: 'Data',
                field: 'exe_data',
                type: 'varchar'
            }];
        }
    };
});