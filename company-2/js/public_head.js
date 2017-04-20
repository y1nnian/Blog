$(document).ready(function(){
	$(".top_nav").hover(
		//鼠标经过
		function(){
			//主菜单
			var main_menu = $(this).children("a");
			//子菜单
			var son_menu = $(this).children("ul");
			son_menu.slideDown();
		},
		//鼠标离开
		function(){
			//主菜单
			var main_menu = $(this).children("a");
			//子菜单
			var son_menu = $(this).children("ul");
			son_menu.slideUp();
		}
	)
})