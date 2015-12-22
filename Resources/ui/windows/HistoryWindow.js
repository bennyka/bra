var Platform = require('de.hpm.platform');

function HistoryWindow(params) {
	//declare module dependencies
	var HistoryView = require('ui/views/HistoryView');

	//create object instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		title:params.title
	});

	//construct UI
	var historyView = new HistoryView(params.data);
	self.add(historyView);

	return self;
};

module.exports = HistoryWindow;
