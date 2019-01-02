//9. Use scaffolding template in order to create Component file and inject depencdency sap.ui.core.UIComponent
sap.ui.define([
		'sap/ui/core/UIComponent'
	],
	function(UIComponent){
		return UIComponent.extend('my.newsapi.Component',{
			metadata:{
				"manifest" : "json"
			},
			init:function(){
				//10. call base class constructor to activate base
				UIComponent.prototype.init.apply(this);
				//Invoke Router which consits of below 2 steps
				//a. Get the object of router from parent
				var oRouter = this.getRouter();
				//b. intialize
				oRouter.initialize();
			}
/*			createContent: function(){
				
			}*/
		});
});