//Master View Component Constructor
var View = require('/lib/view');
var UI = require('/lib/ui');
function StartView(params) {
	//create object instance, parasitic subclass of Observable
	var self = View.createView();

	// button container
	var buttonView = Ti.UI.createView({
		width:Ti.UI.FILL,
		height:200,
		left:10,
		right:10,
		center:{x:'50%', y:'50%'}
	});
	self.add(buttonView);
	/*
	*	START NEW ANALYZE
	*/
	var startNewAnalyzeContainer = Ti.UI.createView({
		top:0,
		width: Ti.UI.FILL,
		height:'45%',
		backgroundColor:'#C4C4C4',
		borderColor:'#000',
		borderRadius:5
	});
	buttonView.add(startNewAnalyzeContainer);
	startNewAnalyzeContainer.addEventListener("click", createNewAnalyze);

	var startNewAnalyzeTitle = Ti.UI.createLabel({
		text:L('Start_New_Analyze'),
		center:{x:'50%', y:'50%'},
		font:UI.fontSize.startViewButtons,
		touchEnabled:false
	});
	startNewAnalyzeContainer.add(startNewAnalyzeTitle);

	/*
	*	SHOW ANALYZE HISTORY
	*/
	var analyzeHistoryContainer = Ti.UI.createView({
		bottom:0,
		width: Ti.UI.FILL,
		height:'45%',
		backgroundColor:'#C4C4C4',
		borderColor:'#000',
		borderRadius:5
	});
	buttonView.add(analyzeHistoryContainer);

	var analyzeHistoryContainerTitle = Ti.UI.createLabel({
		text:L('Analyze_History'),
		center:{x:'50%', y:'50%'},
		font:UI.fontSize.startViewButtons
	})
	analyzeHistoryContainer.add(analyzeHistoryContainerTitle);

	/*
	*	FUNCTIONS
	*/
	function createNewAnalyze(){
		var CategoryWin = require('ui/windows/CategoryWindow');
		var categoryWin = new CategoryWin({
			title:L('Categories'),
			data:params
		});
		params.navWin.openWindow(categoryWin, {animate:true});
	};

	return self;
};

module.exports = StartView;