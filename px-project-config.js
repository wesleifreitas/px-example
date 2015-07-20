/**
 * fontes Phoenix Project
 * @return {[type]} [description]
 */
function pxProjectPackage() {
	return '../px-project/src/';
};

$(function() {

	// Custom Controllers
	var controllers = [{
		file: 'custom/controller/exemploCtrl.js'
	}];


	// Loop em controllers
	$.each(controllers, function(i, item) {
		$("<script/>").attr('src', item.file).appendTo($('head'));
	});

	app.config(function($mdThemingProvider) {
		//red, pink, purple, deep-purple, indigo, blue, light-blue, cyan, teal, green, light-green, lime, yellow, amber, orange, deep-orange, brown, grey, blue-grey
		$mdThemingProvider.theme('default')
			.primaryPalette('grey')
			.accentPalette('grey');

		$mdThemingProvider.theme('darkTheme')
			.primaryPalette('grey')
	});
});