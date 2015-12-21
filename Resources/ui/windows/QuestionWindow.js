var Platform = require('de.hpm.platform');

function QuestionWindow() {
	//declare module dependencies
	var QuestionView = require('ui/views/QuestionView');

	//create object instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});

	//construct UI
	var questionView = new QuestionView();
	self.add(questionView);

	return self;
};

module.exports = QuestionWindow;
