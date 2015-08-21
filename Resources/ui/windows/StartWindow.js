var Platform = require('de.hpm.platform');

function StartWindow() {
	//declare module dependencies
	var StartView = require('ui/views/StartView');

	//create object instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});

	//construct UI
	var startView = new StartView();

	return self;
};

module.exports = StartWindow;
