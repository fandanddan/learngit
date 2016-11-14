$(function () {
  //小方块移动
   var as = $(".drshop-main-ul li");  
   var kuai = $(".line-kuai");
   var line = $(".drshop-line1");
   var a = as.width();
   as.mouseover(function () {
        var x = as.eq($(this).index()).width();
        var l = as.eq($(this).index()).position().left;
        var sum = x + l;
        kuai.animate({left:sum},1000);
        line.animate({width:sum},1000);

    })
   //侧边栏
   $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop >=806){
        $('.dr_quickservice').css("display","block");
        
      }else{
        $('.dr_quickservice').css("display","none");
      } 
  });
   //侧边购物车
   $(".dr_quick-cort").eq(0).mouseover(function(){
    $(".dr_quick2").css("background-position","-41px -33px");
    $(".em3").css("opacity",1).css("display","block").css("right",0).css("width","143px").css("padding-right","10px");
   })
   $(".dr_quick-cort").eq(0).mouseout(function(){
    $(".dr_quick-cort").eq(0).css("background","");
    $(".dr_quick2").css("background-position","0px -33px");
    $(".em3").css("display","none");
   })
   //侧边订单
   $(".dr_quick-cort").eq(1).mouseover(function(){
    $(".dr_quick3").css("background-position","-44px -74px");
    $(".myindent").css("opacity",1).css("display","block").css("right",0).css("width","125px").css("padding-right","50px");
   })
   $(".dr_quick-cort").eq(1).mouseout(function(){
    $(".dr_quick-cort").eq(1).css("background","");
    $(".dr_quick3").css("background-position","-3px -74px");
    $(".myindent").css("display","none");
   })
   //回到顶部
   $(".dr_quick-cort").eq(6).mouseover(function(){
    $(".dr_totop").css("background-position","-50px 0px");
    $(".totop").css("opacity",1).css("display","block").css("z-index","-1").css("width","120px").css("padding-right","50px");
   })
   $(".dr_quick-cort").eq(6).mouseout(function(){
    $(".dr_quick-cort").eq(6).css("background","");
    $(".dr_totop").css("background-position","-0px -0px");
    $(".totop").css("display","none");
   })
})