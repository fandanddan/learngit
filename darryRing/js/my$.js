/**
 * Created by Master on 2016/9/23.
 */
/*
 1 目的 获得元素 ,之前document的写法太麻烦 ，所以考虑封装
 2  规定 i #开头的是拿 id     getElementById    #box
        ii .开头的是拿class  getElementsByClassName
        iii 什么都不写，直接拿标签名 getElementsByTagName
 3 我只要处理好str的问题，就知道 要用什么方法了
 */
function my$(str) {
    var head = str.substr(0,1);
    if(head == "#"){
       return  document.getElementById(str.substring(1));
    }else if(head == "."){
       return  document.getElementsByClassName(str.substring(1));
    }else{
       return  document.getElementsByTagName(str);
    }
}
/*
 目的 : 1 由于真正项目中 拿元素属性都是通过引入的，所以 不能直接.
        2 要换一种方式拿  obj.currentStyle[attr]   getComputedStyle(obj)[attr]

        3 i 对象
            ii 对象的属性


        方法的要素 1 方法名 ，function关键字
                2 形参列表 每个形参代表什么意思
                3 需不需要有返回值 ，以及返回什么结果
 */
function getStyle(obj,attr) {
     if(obj.currentStyle){
         return obj.currentStyle[attr];
     }else{
         return getComputedStyle(obj)[attr];
     }
}
