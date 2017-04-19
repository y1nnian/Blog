window.onload=function(){
	var page=1;//当前显示的图片
	var img_list = $(".img_list ul li");//图片列表
	var img_total = img_list.length;    //图片总数 3
	
	//图片自适应，所有要获取图片显示的高度
	var img_li = $(".img_list ul li:first");
	var img_height = img_li.find("a > img").height();//width();
	//alert(img_height);
	
	//改变大盒子的高，让他等于图片的高。
	$("#full-slider").css("height",img_height+"px");
	
	//当调整窗口大小的时候，同样要设置一下 大盒子的高度
	$(window).bind("resize",function(){
		var img_li = $(".img_list ul li:first");
		var img_height = img_li.find("a > img").height();//width();
		//alert(img_height);
		
		//改变大盒子的高，让他等于图片的高。
		$("#full-slider").css("height",img_height+"px");
	});
		//右侧按钮（下一个）
	$(".next_btn a").bind("click",function(){
		page++;//page = page+1;
		
		if(page>img_total){
			page=1;//如果到最后一张，回到第一张
		}
		//console.log("next:"+page);
		
		//显示当前的图片，其他的图片全部隐藏(使用z-index 实现)
		slide_img();
		//小圆点样式
		circle_style();
		
	});
	
	//上一个按钮
	$(".pre_btn a").bind("click",function(){
		page--;//page = page+1;
		
		if(page<1){
			page=img_total;//如果到第一张，回到最后一张 4
		}
		//console.log("pre:"+page);
		
		//显示当前的图片，其他的图片全部隐藏(使用z-index 实现)
		slide_img();
		//小圆点样式
		circle_style();
		
	});
	
	//自动切换:每2s 开始切换
	var my_intval = setInterval("$('.next_btn a').click();",3000);
	//var my_intval = setInterval("loop_play();",2000);
	
	//点击小圆点，实现切换
	$(".item ul li a").on("click",function(event){
		event.preventDefault(); //阻止默认事件
		//var curr_page = $(this).text(); //方法1：当前点击的是第几个按钮
		//var curr_page = $(this).parent("li").attr("data-index"); //方法2：获得自己定义的属性
		var curr_page = $(this).parent("li").index()+1;   //方法3：获得元素li的索引，从0开始
		
		page = curr_page;
		
		//显示当前的图片，其他的图片全部隐藏(使用z-index 实现)
		slide_img();
		//小圆点样式
		circle_style();
	});
	
	//当鼠标移动到图片上，停止切换,离开的时候，继续切换
	$(".next_btn a,.pre_btn a,.img_list ul li,.item ul li a").hover(
		function(){
			clearInterval(my_intval);//清除定时器，停止切换
		},
		function(){
			my_intval = setInterval("$('.next_btn a').click();",3000);
			//开启定时器，开始切换
		}
	);
	
	//鼠标经过，离开效果
	$(".next_btn a,.pre_btn a").hover(
		function(){
			$(this).css({"opacity":"1","filter":"alpha(opacity=100)"});
		},
		function(){
			$(this).css({"opacity":"0.3","filter":"alpha(opacity=30)"});
		}
	);
	
	//实现切换效果
	function slide_img(){
		for(var i=1;i<=img_total;i++){
			if(page==i){
				//img_list.eq(page-1).css("z-index","10");//当前的图片顺序放高一点
				//img_list.eq(page-1).fadeIn("fast");
				img_list.eq(page-1).animate(
					{
						"zIndex":10,
						"opacity":1
					},200);
			}else{
				//img_list.eq(i-1).css("z-index","0");//层的叠放顺序放低一点
				//img_list.eq(i-1).fadeOut("slow");
				img_list.eq(i-1).animate({
					"zIndex":0,
					"opacity":0
				},200);
			}	
		}
	}
	
	//定义函数，实现切换与小圆点样式对应起来
	function circle_style(){
		var ol_li = $(".item ul li");
		//参数：k li 索引，ele 是li 对象 ，名称可以自定义
		ol_li.each(function(k,ele){
			//alert($(ele).html());  $(ele) 选择当前循环的li
			$(this).children().removeClass("active");   //获得当前li下的a,移除样式
		});
		ol_li.eq(page-1).children().addClass("active"); //获得当前li下的a，添加样式
	}
	
	//独立切换函数；当，没有上下按钮的时候，可以调用这个，进行切换
//	function loop_play(){
//		page++;//page = page+1;
//		
//		if(page>img_total){
//			page=1;//如果到最后一张，回到第一张
//		}
//		//console.log("next:"+page);
//		
//		//显示当前的图片，其他的图片全部隐藏(使用z-index 实现)
//		slide_img();
//		//小圆点样式
//		circle_style();
//	}
	
};
