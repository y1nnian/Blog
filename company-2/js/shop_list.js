//高级选项下拉菜单
$(document).ready(function(){
	$(".main_menu > a").on("click",function(){
				  //1.获得子菜单:当前主菜单的同辈元素 ul
					 var son_menu = $(this).siblings("ul");
				 //2.获得子菜单的状态：显示/隐藏的
         			var son_status = son_menu.css("display");
				 //3.是显示的，就隐藏,否则就显示
				 
				 son_menu.slideToggle();
				
		});

//更多按钮
	var i = 0;
	$(".right_more").on("click",function(){
		var current = $(this).parent().parent();
		i++;
		if(i%2!=0){  //默认高度不变 奇数点击次数则改变
			$(current).css("height","70px");
		}else{
			$(current).css("height","");
		}
				
	})		
})