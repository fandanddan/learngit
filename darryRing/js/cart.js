$(function(){
    var num = getCookie("num");
    // 申明一个空数组放拿出来的src路径
    var arr=[];
    var sum = 0;//总价
    // 遍历0-num，拿imgSrc后缀名0-num的路径
    for(var i = 0;i<=num ;i++){
        
        var price = parseInt(getCookie("jiage" + i).substr(1));
        var imgSrc = getCookie("tupian" + i);
        var ringName = getCookie("nameRing" + i);
        var caizhi = getCookie("caizhi" + i);
        var shoucun = getCookie("shoucun" + i);
        var kezi = getCookie("kezi" + i); 
        ringName = decodeURI(ringName);
        caizhi = decodeURI(caizhi);
        kezi = decodeURI(kezi);
        arr.push(imgSrc);
        sum = sum + price;
        $("tbody").first().append('<tr class=\"cp_tr\" ><td class=\"sp_td\"><a class=\"jx_shop\" href=\"#\"><img src=\"'+imgSrc+'\" width=\"85\" height=\"85\"><span>'+ringName+'</span></a></td><td class=\"cz_td\">'+caizhi+'</td><td class=\"sc_td\">'+shoucun+'</td><td class=\"kz_td\">'+kezi+'</td><td class=\"gm_td\" style=\"font-family:微软雅黑\">'+price+'</td><td class=\"close_td\" ><span class=\"sicon s_close\" ></span></td></tr><tr class=\"kb_tr\"><td class=\"sp_td\"></td><td class=\"cz_td\"></td><td class=\"sc_td\"></td><td class=\"kz_td\"></td><td class=\"gm_td\"></td><td class=\"close_td\"></td></tr>');
        $("tbody").eq(1).append('<tr class=\"shop-adressqr-sec\"><td class=\"shop-adress-shoop\">'+ringName+'</td><td class=\"shop-adress-cz\">'+caizhi+'</td><td class=\"shop-adress-sc\">'+shoucun+'</td><td class=\"shop-adress-kz\">'+kezi+'</td><td class=\"shop-adress-pirce\"><span style=\"font-family: 微软雅黑\">'+price+'</span></td></tr>');
        
    }
    var a=$(".cp_tr").length;
    //删除购物车货物
    $(".s_close").click(function(){  
        var a=$(".cp_tr").length;      
       $(this).parent().parent().remove();
       a--;
        console.log(a);
    })
    $("#shop-num").html(a);
    $(".shop-adress-zj .fr i").first().html(a);
    $(".fw-bold").html(sum);   
    $(".shop_ofor-font i").html(sum);
   
})


