$(function(){
    var oBox = $(".thing-main-top-img");
    var oBig = $(".img-big img");
    var ali = $(".img-small-ul li");

    ali.mouseover(function(){      
        ali.attr("class","");
        ali.eq($(this).index()).attr("class","small-active");
        oBig.attr("src",$(this).find("img").attr('src'));
    })
})
