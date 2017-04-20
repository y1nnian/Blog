$(document).ready(function(){
	//alert(1);
	//评论内容有无
	$(".hascontent").on("click",function(){
		var status = $(".rate_list_hascontent").prop("checked");
		//console.log(status);
		if(status == true){			
			$(this).attr("src","images/comments_777.jpg");
			$(this).siblings("input").prop("checked",false)
		}else{
			$(this).attr("src","images/comments_956.jpg");
			$(this).siblings("input").prop("checked",true)
		}
	})

	//商品数量加减
	var val = $(".amount_input").val();
	var stock = $(".stock span").html();
	$(".amount_increase").on("click",function(){
		val--;	//购买数量减少
		stock++;	//库存相对增加
		if(val<=1){		//购买数量最小为1
			val = 1;
			stock = $(".stock span").html();
		};
		$(".stock span").html(stock);
		$(".amount_input").val(val);
	});
	$(".amount_decrease").on("click",function(){
		
		val++;
		stock--;
		if(val>=stock){
			val = stock;
			stock = 0;
		}		
		$(".stock span").html(stock);
		$(".amount_input").val(val);

	});
	//商品大小图切换
	$(".img_thumb li a").on("mouseover",function(){
		var num = $(this).attr("data-index");//获取每张图片的data-index
		$(".pro_img img").removeClass("img_big");//点击后隐藏属性为img_big的图
		$(".pro_img img").eq(num-1).addClass("img_big");//显示当前eq的图
	});
})