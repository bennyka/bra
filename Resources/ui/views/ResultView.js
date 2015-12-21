//Master View Component Constructor
var View = require('/lib/view');
var UI = require('/lib/ui');
function ResultView() {

	//create object instance, parasitic subclass of Observable
	var self = View.createView();

	return self;
};

module.exports = ResultView;