var Platform = require('de.hpm.platform');

function StartWindow(params) {
	var data = (params.data) ? params.data : {};
	//declare module dependencies
	var StartView = require('ui/views/StartView');

	//create object instance
	var win = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		title:params.title
	});

	// create object instance
	var self = Titanium.UI.iOS.createNavigationWindow({
		window:win
	});

	//construct UI
	data.navWin = self;
	var startView = new StartView(data);
	win.add(startView);

	return self;
};

module.exports = StartWindow;
