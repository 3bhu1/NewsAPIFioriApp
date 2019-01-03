sap.ui.define([
		'my/newsapi/controller/BaseController',
		'sap/ui/model/json/JSONModel',
		'sap/ui/model/Filter',
		'sap/ui/model/FilterOperator',
		'my/newsapi/formatter/Formatter'
	],
	function(BaseController,JSONModel,Filter,FilterOperator,Formatter){
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
			},
			formatter:Formatter,
			onNewsSearch:function(oEvent){
				debugger;
				var qStr = oEvent.getParameter("newValue");
				var oFilter1 = new Filter('text',FilterOperator.Contains,qStr);
				var oFilter2 = new Filter('info',FilterOperator.Contains,qStr);
				/*var oFilter3 = new Filter('author',FilterOperator.Contains,qStr);*/
				var mainFilter = new Filter({
					filters:[oFilter1,oFilter2],
					and: false
				});
				var oList = this.getView().byId("idNewsList");
				oList.getBinding("items").filter(mainFilter);
			}
		});	
});