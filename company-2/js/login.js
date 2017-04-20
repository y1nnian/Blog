//自动登录按钮
$(document).ready(function () {
	$(".remember_button").on("click",function(){
		var status = $(".remember").prop("checked");
		if (status == true) {
			$(this).attr("src","images/login_16.jpg");
			$(this).siblings().prop("checked",false)
		}else{
			$(this).attr("src","images/login_01.jpg");
			$(this).siblings().prop("checked",true)
		}
	})
})