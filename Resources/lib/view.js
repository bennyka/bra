function createView(params){
	var params = params || {};

	var self = Ti.UI.createView(params);
	return self;
}
module.exports = {
	createView:createView
};