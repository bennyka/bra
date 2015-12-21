var Platform = require('de.hpm.platform');

function CategoryWindow() {
	//declare module dependencies
	var CategoryView = require('ui/views/CategoryView');

	//create object instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});

	//construct UI
	var categoryView = new CategoryView();
	self.add(categoryView);

	return self;
};

module.exports = CategoryWindow;
