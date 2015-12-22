var Platform = require('de.hpm.platform');

function ResultWindow(params) {
	//declare module dependencies
	var ResultView = require('ui/views/ResultView');

	//create object instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		title:params.title
	});

	//construct UI
	var resultView = new ResultView(params.data);
	self.add(resultView);

	return self;
};

module.exports = ResultWindow;
