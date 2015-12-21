var Platform = require('de.hpm.platform');

function ResultWindow() {
	//declare module dependencies
	var ResultView = require('ui/views/ResultView');

	//create object instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});

	//construct UI
	var resultView = new ResultView();
	self.add(resultView);

	return self;
};

module.exports = ResultWindow;
