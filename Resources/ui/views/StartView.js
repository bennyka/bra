//Master View Component Constructor
function StartView() {
	//create object instance, parasitic subclass of Observable
	var self = require('lib/view').createView();
	alert("JO")
	return self;
};

module.exports = StartView;