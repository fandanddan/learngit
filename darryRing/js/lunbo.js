$(function () {
    var uls = $("#uls");
    var lis = uls.find("li");
    var oli = $("ol").find("li");
    var index = 0;
    oli.on("click", function () {
        clearInterval(timer);    
        index = $(this).index();    
        lis.eq(index).stop().siblings().animate({opacity:0},2000);
        lis.eq(index).stop().animate({opacity:1},2000)
        $(this).siblings().attr("class","");
        $(this).attr("class","active");
        
        timer = setInterval(next,2500);
    })
    
    var lastIndex = uls.find("li").length;
    var timer = setInterval(next,2000);

    uls.hover(function () {
        clearInterval(timer);
        
    },function () {
        timer = setInterval(next,2500);
    })

    function next() {
        
        lis.eq(index).stop().siblings().animate({opacity:0},1800);
        lis.eq(index).stop().animate({opacity:1},1800);
        oli.eq(index).attr("class","active");
        oli.eq(index).siblings().attr("class","");
        index++;
        if(index>=lastIndex){
            index=0;
        }
    }
})