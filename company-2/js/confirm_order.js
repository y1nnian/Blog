$(document).ready(function(){
	$(".btn_ico").on("click",function(){
		var status = $(this).siblings("input").prop("checked");
		console.log(status);
		if(status == true){			
			$(this).attr("src","images/confirm_order_33.jpg");
			$(this).siblings("input").prop("checked",false)
		}else{
			$(this).attr("src","images/confirm_order_34.jpg");
			$(this).siblings("input").prop("checked",true)
		}
	})
})