$(function() {
	/**
	 * Module pxConfig
	 * Configurações do sistema
	 */
	angular.module('pxConfig', [])
		.constant('pxConfig', {
			PX_PACKAGE: 'bower_components/px-project/src/', // Pacote Phoenix Project
			EXTERNAL_COMPONENTS: 'bower_components/', // Componentes externos
			PROJECT_NAME: 'Phoenix Project - Exemplo', // Nome do projeto
			PROJECT_SRC: 'px-example' // Source do projeto
		})
		.config(function(pxConfig) {

			// Custom Controllers	
			/*
			Exemplo:

			var controllers = [{
				file: 'custom/cliente/cliente.controller.js'
			}, {
				file: 'custom/produto/produto.controller.js'
			}, {
				file: 'custom/pedido/pedido.controller.js'
			}];
			*/
			var jsLoader = [{
				file: 'custom/exemplo/exemplo.controller.js'
			}, {
				file: 'custom/exemplo/exemplo.service.js'
			}];

			// Loop em jsLoader
			// Incluir java scripts
			$.each(jsLoader, function(i, item) {
				$("<script/>").attr('src', item.file).appendTo($('head'));
			});
		});
});