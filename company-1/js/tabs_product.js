// JavaScript Document
//tab循环卡
$(document).ready(function(){
		var tabs=$("h1[name='tabs']");
		//alert(tabs.length);
    tabs.mouseover(function(){
		     var num=tabs.index($(this));
				 tabs.removeClass("current");
				 $("ul[name='ul_list']").css("display","none");
				 
				 $(this).addClass("current");
				 
			   $("ul[name='ul_list']").eq(num).css("display","block");
			})
});