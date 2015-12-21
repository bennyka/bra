var Platform = require('de.hpm.platform');

function HistoryWindow() {
	//declare module dependencies
	var HistoryView = require('ui/views/HistoryView');

	//create object instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});

	//construct UI
	var historyView = new HistoryView();
	self.add(historyView);

	return self;
};

module.exports = HistoryWindow;
