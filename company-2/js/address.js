$(document).ready(function(){
	//默认地址勾选
	$(".select_btn").on("click",function(){
		var status = $(".radio").prop("checked");
		console.log(status);
		if (status == true) {
			$(this).attr("src","images/login_01.jpg");
			$(this).siblings().prop("checked",false)
		}else{
			$(this).attr("src","images/login_16.jpg");
			$(this).siblings().prop("checked",true)
		}
	})

	//地址选择
	$(".main_menu > a").bind("click",function(event){
	     event.preventDefault();//阻止默认事件
			  //1.获得子菜单:当前主菜单的同辈元素 ul
			 var son_menu = $(this).siblings("ul");
			 //2.获得子菜单的状态：显示/隐藏的
     var son_status = son_menu.css("display");
			 //3.是显示的，就隐藏,否则就显示
			son_menu.slideToggle();
	});
	


	//地址删除
	$(".add_delete").on("click",function(e){
		e.preventDefault();//阻止頁面跳轉
		$(this).parent().parent().remove();
	})
})