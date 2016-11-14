
$(function(){
	$(".ring-xiangqing-body").eq(0).addClass('active');
	$(".ring-xiangqing-title span").click(function() {
		$(".ring-xiangqing-title span").attr("class","");
		$(this).addClass("ring-xiangqing-current");
		$(".active").removeClass("active");
		$(".ring-xiangqing-body").eq($(this).index()).addClass("active");
	}) 
})	

//求婚钻戒
//左边的ul li 
$(function(){
	$(".qh-hid-left .qh-img").eq(0).addClass('disblock');
	$(".qh-hid-left ul li").mouseover(function() {
		$(".qh-hid-left .disblock").removeClass("disblock");
		$(".qh-hid-left .qh-img").eq($(this).index()).addClass("disblock");
	}) 
})
//右边的ul li 
$(function(){
	$(".qh-hid-right .qh-img").eq(0).addClass('disblock');
	$(".qh-hid-right ul li").mouseover(function() {
		$(".qh-hid-right .disblock").removeClass("disblock");
		$(".qh-hid-right .qh-img").eq($(this).index()).addClass("disblock");
	}) 
})

//爱的礼物
//左边的ul li 
$(function(){
	$(".love-hid-left .love-img").eq(0).addClass('disblock');
	$(".love-hid-left ul li").mouseover(function() {
		$(".love-hid-left .disblock").removeClass("disblock");
		$(".love-hid-left .love-img").eq($(this).index()).addClass("disblock");
	}) 
})
//右边的ul li 
$(function(){
	$(".love-hid-right .love-img").eq(0).addClass('disblock');
	$(".love-hid-right ul li").mouseover(function() {
		$(".love-hid-right .disblock").removeClass("disblock");
		$(".love-hid-right .love-img").eq($(this).index()).addClass("disblock");
	}) 
})


$(function(){
	$(window).scroll(function () {
	    var scrollTop = $(window).scrollTop();
	    
	    if (scrollTop >=806){
	    	$('.ring-xiangqing-title').css("position","fixed").css("top",0).css("border-bottom","1px solid #d6b870");
	    	
	    }
	    else{
	    	$('.ring-xiangqing-title').css("position","relative").css("border-bottom","none");
	    } 
	});
})
