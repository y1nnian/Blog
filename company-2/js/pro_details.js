//商品图片大小图切换
$(document).ready(function(){
	$(".img_thumb li a").on("mouseover",function(){
		var num = $(this).attr("data-index");//获取每张图片的data-index
		$("#small img").removeClass("img_small");//点击后隐藏属性为img_small的图
		$("#small img").eq(num-1).addClass("img_small");//显示当前eq的图
		$(".img_thumb li").removeClass("current");//点击后移除原来选中的状态
		$(".img_thumb li").eq(num-1).addClass("current");//给当前目标添加状态
	});

//放大镜
	(function(window){
		function $(id){
			return document.getElementById(id);
		};

		// 获取对象
		var wrapper = $("wrapper"),smallBox = $("small"),mask = $("mask"),bigImg = $("big_img"),bigBox = $("big");
		
		// smallBox的hover事件
		smallBox.onmouseover = function(){
			mask.style.display = "block";
			bigBox.style.display = "block";
		};
		smallBox.onmouseout = function(){
			mask.style.display = "none";
			bigBox.style.display = "none";
		};
		// 鼠标移动事件
		 smallBox.onmousemove = function(event){
			var event = event || window.event;
			// 获取鼠标在页面上的坐标
			var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
			var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;
			// mask的位置坐标
			var boxX = pageX - wrapper.offsetLeft;
			var boxY = pageY - wrapper.offsetTop;
			var maskX = boxX - mask.offsetWidth / 2;
			var maskY = boxY - mask.offsetHeight / 2;
			// 限制mask的移动范围
			if( maskX < 0 ){
				maskX = 0;
			};
			if( maskX > smallBox.offsetWidth - mask.offsetWidth){
				maskX = smallBox.offsetWidth - mask.offsetWidth;
			};
			if( maskY < 0 ){
				maskY = 0;
			};
			if( maskY > smallBox.offsetHeight - mask.offsetHeight){
				maskY = smallBox.offsetHeight - mask.offsetHeight;
			};
			// 黄色遮罩层的位置坐标
			mask.style.top = maskY + "px";
			mask.style.left = maskX + "px";
			// 大图片移动的比例
			var prop = ( bigImg.offsetWidth - bigBox.offsetWidth ) / (smallBox.offsetWidth - mask.offsetWidth);
			// 大图片的坐标
			var bigImgX = prop * maskX;
			var bigImgY = prop * maskY;
			bigImg.style.top = -bigImgY + "px";
			bigImg.style.left = -bigImgX + "px";
			
		}
	})(window)


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

//手动输入商品数量
	$(".amount_input").blur(function(){
		var num = $(this).val();//获取input值
		if(num<1){
			num = 1;
		}
		$(this).val(num);//手动更改输入的值
	})

//商品详情评论切换
	$(".tabbar li a").on("click",function(){
		var num = $(this).attr("data-index");
		$(".tabbar li a").css("color","#000000");//默认颜色黑色
		$(".attributes_list").css("display","none");//隐藏所有子页面
		$(".attributes_list").eq(num-1).css("display","block");//点击后显示页面
		$(this).css("color","#ff4466");//点击后标题颜色变化
	});


	
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

})










