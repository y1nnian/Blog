// JavaScript Document
//tab循环卡
$(document).ready(function(){
		var tabs=$("h1[name='tabs']");
		//alert(tabs.length);
    tabs.mouseover(function(){
		     var num=tabs.index($(this));
				 tabs.removeClass("current");
				 $("div[name='list']").css("display","none");
				 
				 $(this).addClass("current");
				 
			   $("div[name='list']").eq(num).css("display","block");
			})
});