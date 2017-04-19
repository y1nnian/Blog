// JavaScript Document
$(function(){
	$(".middle_content ul li").mouseover(function(){
		  $(this).find(".date").css("background","url(images/news_11.gif)");
		})
		$(".middle_content ul li").mouseout(function(){
		  $(this).find(".date").css("background","url(images/news_21.gif)");
		})
	})