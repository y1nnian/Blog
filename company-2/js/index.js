//头部banner定时自动轮播
$(document).ready(function(){
	var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay:2000,//自动轮播
    autoplayDisableOnInteraction: false,
    })



    //侧导航折叠菜单
    $(".left_sidebar_menu").on("click",function(){
    	var son_menu = $(".left_sidebar");
    	var son_status = son_menu.css("display");
    		son_menu.slideToggle();
    })
})