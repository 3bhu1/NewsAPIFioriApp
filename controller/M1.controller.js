sap.ui.define([
		'my/newsapi/controller/BaseController',
		'sap/ui/model/Filter',
		'sap/ui/model/FilterOperator'
	],
	function(BaseController,Filter,FilterOperator,BusyDialog){
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
			},
			onListSelectionChange:function(oEvent){
				//get selected list item
				var oSelectedListItem = oEvent.getParameter("listItem");
				//get channel name
				var oCName = oSelectedListItem.getProperty("title");
				//access the component.js in order to get model data and store in an array
				var arr = [];
				arr = this.getOwnerComponent().getModel().getData()["channels"];
				//findout api substring
				var apiSubStr;
				for(var i=0;i<arr.length;i++){
					if(arr[i].channelName === oCName){
						apiSubStr = arr[i].channelAPISource;
						break;
					}
				}
				//Route to Detail Page
				this.routeToPage(apiSubStr);
			},
			routeToPage:function(apiSubStr){
				//get Router
				var oRouter = this.getOwnerComponent().getRouter();
				//navigate to detail page
				oRouter.navTo("detailPage1",{
					cName: apiSubStr
				});
			},
			onListUpdateFinish:function(){
				var oList = this.getView().byId("idChannelList");
				var oItemToSelect = oList.getItems()[1];
				//set item as selected
				debugger;
				oList.setSelectedItem(oItemToSelect,true);
				//I want to fire selectionChange event automatically once 0th item is selected
				//but below statement doesn't work
				//oList.fireSelectionChange(this);
				//get all items with channelAPISource Property
				var arr = this.getOwnerComponent().getModel().getData()["channels"];
				//get first list item
				var fListItem  = oList.getItems()[1].getProperty("title");
				var apiSubStr;
				for (var i=0; i<arr.length;i++){
					if(arr[i].channelName === fListItem){
						apiSubStr = arr[i].channelAPISource;
					}
				}
				this.routeToPage(apiSubStr);
			}
		});
});