sap.ui.define([
		
	],function(){
		return {
			formatDate:function(sDate){
				var year = sDate.substring(0,4);
				var month = sDate.substring(5,7);
				var day = sDate.substring(8,10);
				var time = sDate.substring(11,16);
				var monthInWords;
				if(month === "01"){
					monthInWords = "January";
				}
				else if(month === "02"){
					monthInWords = "February";
				}
				else if(month === "03"){
					monthInWords = "March";
				}
				else if(month === "04"){
					monthInWords = "April";
				}
				else if(month === "05"){
					monthInWords = "May";
				}
				else if(month === "12"){
					monthInWords = "December";
				}
				var formattedDate = monthInWords + " " + day + "," + year + " " + time + " " + "IST";
				return formattedDate;
			},
			formatAuthor:function(sAuthor){
				if(!sAuthor){
					return "Press Bureau"
				}
				else{
					return sAuthor;
				}
			}
		}
});