//Master View Component Constructor
var View = require('/lib/view');
var UI = require('/lib/ui');
function CategoryView(params) {

	//create object instance, parasitic subclass of Observable
	var self = View.createView();

	var categoryTableView = Ti.UI.createTableView({
		top:0,
		height:Ti.UI.FILL,
		width:Ti.UI.FILL
	});
	self.add(categoryTableView);

	var categories = {
		"entry1": {
			"title": "Kategorie 1",
			"description":"Beschreibung Kategorie 1",
			"questions":["Question1.1", "Question1.2", "Question1.3"]
		},
		"entry2":{
			"title": "Kategorie 2",
			"description":"Beschreibung Kategorie 2",
			"questions":["Question2.1", "Question2.2", "Question2.3"]
		},
		"entry3":{
			"title": "Kategorie 3",
			"description":"Beschreibung Kategorie 3",
			"questions":["Question3.1", "Question3.2", "Question3.3"]
		}
	};
	var tableData = [];

	for (i in categories){
		var category = categories[i];
		var row = createEntry(category);
		row.addEventListener("click", selectAnalyze);
		tableData.push(row);
	}
	categoryTableView.setData(tableData);

	function createEntry(params){
		var row = Ti.UI.createTableViewRow({
			data:params
		});
		var view = Ti.UI.createView({
			width:Ti.UI.FILL,
			height:70,
			layout:'vertical'
		});
		row.add(view);

		var rowTitle = Ti.UI.createLabel({
			text:params.title,
			height:'50%',
			width:Ti.UI.SIZE,
			left:15,
			font:{fontSize:'16sp', font:'Helvetica Neue'}
		});
		view.add(rowTitle);

		var rowSubTitle = Ti.UI.createLabel({
			top:0,
			text:params.description,
			height:'39%',
			width:Ti.UI.SIZE,
			left:15,
			font:{fontSize:'13sp', font:'Helvetica Neue'}
		});
		view.add(rowSubTitle);

		return row;
	}


	function selectAnalyze(e){
		var data = e.row.data;
		var QuestionWin = require('ui/windows/QuestionWindow');
		var questionWin = new QuestionWin({
			data:data,
			title:L('Questions')
		});
		params.navWin.openWindow(questionWin, {animate:true});
	}

	return self;
};

module.exports = CategoryView;