var Platform = require('de.hpm.platform');

function CategoryWindow(params) {
	//declare module dependencies
	var CategoryView = require('ui/views/CategoryView');

	//create object instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		title:params.title
	});

	//construct UI
	var categoryView = new CategoryView(params.data);
	self.add(categoryView);

	return self;
};

module.exports = CategoryWindow;
