sap.ui.define([
		'my/newsapi/controller/BaseController',
		'sap/ui/model/Filter',
		'sap/ui/model/FilterOperator'
	],
	function(BaseController,Filter,FilterOperator){
		return BaseController.extend('my.newsapi.controller.M1',{
			onInit:function(){
				
			},
			onLiveChange:function(oEvent){
				//get query string
				var qStr = oEvent.getParameter("newValue");
				//search for query string in channelName property
				var oFilter1 = new Filter('channelName',FilterOperator.Contains,qStr);
				//search for query string in country property
				var oFilter2 = new Filter('country',FilterOperator.Contains,qStr);
				//search for query string in (channelName OR country) property
				var mainFilter = new Filter({
					filters: [oFilter1, oFilter2],
					and: false
				});
				//get list object
				var oList = this.getView().byId("idChannelList");
				//update binding
				oList.getBinding("items").filter(mainFilter);
			}
		});
});