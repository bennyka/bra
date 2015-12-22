function createView(params){
	var params = params || {};
	params.layout = 'vertical';

	var self = Ti.UI.createView(params);

	return self;
}
module.exports = {
	createView:createView
};