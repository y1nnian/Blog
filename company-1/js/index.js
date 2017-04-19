// JavaScript Document
$(function(){
	$(".title ul li a").click(function(){ //找到a标签并添加click事件
		var inx=$(this).parent("li").index();//定义变量inx，返回这个元素在同辈中的索引位置
		$(".title ul li").find("a").removeClass("first");//移除已有的类
		$(".title ul li").eq(inx).find("a").addClass("first");//获取点击元素并添加类
		})
	
});


