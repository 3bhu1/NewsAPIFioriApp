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
				
			},
			createContent: function(){
				
			}
		});
});