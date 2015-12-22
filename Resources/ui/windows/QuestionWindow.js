var Platform = require('de.hpm.platform');

function QuestionWindow(params) {
	//declare module dependencies
	var QuestionView = require('ui/views/QuestionView');

	//create object instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		title:params.title
	});

	//construct UI
	var questionView = new QuestionView(params.data);
	self.add(questionView);

	return self;
};

module.exports = QuestionWindow;
