$(document).ready(function(){
	//单个删除订单
	$(".delete_list").on("click",function(){
		$(this).parent().parent().parent().remove();
	})


	//点击+
	$(".add").on("click",function(){
		var num = parseInt($(this).prev().val());//获取input框内容
		num++;
		if (num>10){
			num = 10;
			return false;
		};
		$(this).prev().val(num);//给input框重新赋值

		//计算小计价格
		var xb = $(this).attr("data-add");
		console.log(xb);
		var price = parseInt($(".unitPrice").eq(xb).html());
		var total = num*price;
		//console.log(total);
		parseInt($(".totalPrice").eq(xb).html(toDecimal2(total)));

		//计算总价
		var sum= parseInt($(".total_last").html());//获取总价的值
		var checked=$(".radio").eq(xb).prop("checked");//获取复选框的状态
		if(checked==true){
				sum+=price;
				parseInt($(".total_last").html(toDecimal2(sum)));
			}
	})
		
	//点击-
	$(".reduce").on("click",function(){
		var xb = $(this).attr("data-reduce");
		var num = parseInt($(this).next().val());//获取input框内容
		num--;
		if (num<1) {
			num = 1;
			return false;
		};
		$(this).next().val(num);//给input框重新赋值

		//计算小计价格	
		var price = parseInt($(".unitPrice").eq(xb).html());
		var total = num*price;
		//console.log(total);
		parseInt($(".totalPrice").eq(xb).html(toDecimal2(total)));

		//计算总价
		var sum= parseInt($(".total_last").html());//获取总价的值
		var checked=$(".radio").eq(xb).prop("checked");//获取复选框的状态
		if(checked==true){
				sum-=price;
				parseInt($(".total_last").html(toDecimal2(sum)));
			}
	})


	//全选
	$(".check_btn_all").on("click",function(){
		var status = $(this).prev().prop("checked");//获取全选框的状态
		if (status==false) { //点击前没选中
			$(this).attr("src","images/shop_cart_003.jpg");
			$(this).prev().prop("checked",true);
			$(".check_btn").attr("src","images/shop_cart_003.jpg");//单选全部被选中
			$(".radio").prop("checked",true);

			//计算总价
			var sum = 0;
			for(var i=0;i<$(".order_amount").length;i++){//i表示小计的下标
				var content = parseInt($(".totalPrice").eq(i).text());
				sum += content;
			}
			$(".total_last").html(toDecimal2(sum));
		}else{
			$(this).attr("src","images/shop_cart_03.jpg");
			$(this).prev().prop("checked",false);
			$(".check_btn").attr("src","images/shop_cart_03.jpg");//单选全部取消选中
			$(".radio").prop("checked",false);
			$(".total_last").html("0.00");
		}
	})

	//单选
	$(".check_btn").on("click",function(){
		var list = $(this).prev().prop("checked");
		var xb = $(this).attr("data-list");
		if(list==false){
			$(this).attr("src","images/shop_cart_003.jpg");
			$(this).prev().prop("checked",true);
			total = parseInt($(".totalPrice").eq(xb).text());//获取对应小计价格
			var sum = parseInt($(".total_last").text());//获取总计的价格
			sum += total;

			//计算总价
			$(".total_last").html(toDecimal2(sum));
		}else{
			$(this).attr("src","images/shop_cart_03.jpg");
			$(this).prev().prop("checked",false);
			total = parseInt($(".totalPrice").eq(xb).text());//获取对应小计价格
			var sum = parseInt($(".total_last").text());//获取总计的价格
			sum -= total;
			$(".total_last").html(toDecimal2(sum));
		}
	})

// 批量删除

      


	//商品分类tab循环卡
	$(".pro_select li a").on("click",function(){
		var num = $(this).attr("data-index");
		$(".pro_select li a").css({"color":"#000000","border-bottom":"none"});//默认黑色
		$(".order_list_detail").css("display","none");//默认隐藏
		$(".order_list_detail").eq(num-1).css("display","block");//点击显示
		$(this).css({"color":"#ff4466","border-bottom":"2px solid #ff4466"});//点击后标题颜色变化
	})

	//手动输入
	$(".amount").blur(function(){
		var num = $(this).val();//获取input值
		if(num<1){
			num = 1;
		}
		if (num>10){
			num = 10;
		};
		$(this).val(num);//手动更改输入的值
		var xb = $(this).attr("data-num");
		var price = parseInt($(".unitPrice").eq(xb).html());
		var total = price*num;
		$(".totalPrice").eq(xb).html(total);
		var status = $(".radio").eq(xb).prop("checked");
	})







})




function toDecimal2(x) { 
      var f = parseFloat(x); 
      if (isNaN(f)) { 
        return false; 
      } 
      var f = Math.round(x*100)/100; 
      var s = f.toString(); 
      var rs = s.indexOf('.'); 
      if (rs < 0) { 
        rs = s.length; 
        s += '.'; 
      } 
      while (s.length <= rs + 2) { 
        s += '0'; 
      } 
      return s; 
    } 