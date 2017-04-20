$(document).ready(function () {
	$(".agree_btn").on("click",function(){
		var status = $(".radio").prop("checked");
		if (status == true) {
			$(this).attr("src","images/login_01.jpg");
			$(this).siblings().prop("checked",false)
		}else{
			$(this).attr("src","images/login_16.jpg");
			$(this).siblings().prop("checked",true)
		}
	})
})