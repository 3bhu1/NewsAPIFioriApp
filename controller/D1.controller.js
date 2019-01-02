sap.ui.define([
		'my/newsapi/controller/BaseController',
		'sap/ui/model/json/JSONModel'
	],
	function(BaseController,JSONModel){
		return BaseController.extend('my.newsapi.controller.D1',{
			onInit:function(){
				this.getOwnerComponent().getRouter().attachRoutePatternMatched(this._onRouteMatched, this);
			},
			_onRouteMatched:function(oEvent){
				//Prepare API url
				var apiSubStr = oEvent.getParameters("name").arguments.cName;
				var oURI = this.getOwnerComponent().getMetadata().getManifest()["sap.ui5"].models.newsAPI.uri;
				var oAPI = oURI + apiSubStr + "&apiKey=de5d1111dbc343c6b78477b08ab4dd33";
				var oJSONModel = new JSONModel();
				oJSONModel.loadData(oAPI);
				//bind model to view
				this.getView().setModel(oJSONModel);
			}
		});	
});