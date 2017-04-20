//下拉菜单地址
$(document).ready(function(){
	$(".main_menu > a").bind("click",function(event){
	     event.preventDefault();//阻止默认事件
			  //1.获得子菜单:当前主菜单的同辈元素 ul
			 var son_menu = $(this).siblings("ul");
			 //2.获得子菜单的状态：显示/隐藏的
     var son_status = son_menu.css("display");
			 //3.是显示的，就隐藏,否则就显示
			son_menu.slideToggle();
	});
})