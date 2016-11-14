/**
 * Created by Master on 2016/10/12.
 */
function getStyle(obj,attr) {
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,false)[attr];
    }
}
/*
运动函数
obj
json  {"width":500,"height":300,"opacity":1}
func
 */
function startMove(obj,json,func) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;//代表全部达到目标值
        for(var i in json){//i指的是每一个属性名
            var target = json[i];//每一个属性的目标值
            var current = getStyle(obj,i);//每一个属性的 当前值
            if(i=="opacity"){//进行 属性到操作值 预处理
                current = Math.round(current*100);
            }else{
                current = parseInt(current);
            }
            var speed = (target - current)/8;//规定速度
            speed = speed>0?Math.ceil(speed):Math.floor(speed);//速度值取整

            if(current == target){//判断是否达到目标值,前面有一个flag进行标记是否全达到
            }else{
                flag = false;//只要有一个没达到，就改成false
                if(i == "opacity"){//最后操作完要重新赋值给 原来的对象
                    obj.style.opacity = (current + speed)/100;
                }else{
                    obj.style[i] = current + speed + "px";
                }
            }
        }
        if(flag){//如果flag=true说明都到达目标值，所以取消间歇
            clearInterval(obj.timer);
            if(func){
                func(obj);
            }
        }
    },30);
}

function averageMove(obj,json,func) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for(var i in json){//首先要知道有哪些属性被他设置了目标点
            var speed = 0 ;
            var target = json[i];
            var current = parseInt(getStyle(obj,i));
            var result = target - current;
            if(result>0){
                speed = 5;
                if(current + speed >= target){
                    obj.style[i] = target + "px";
                }else{
                    flag = false;
                    obj.style[i] = current + speed + "px";
                }
            }else{
                speed = -5;
                if(current + speed <= target){
                    obj.style[i] = target + "px";
                }else{
                    flag = false;
                    obj.style[i] = current + speed + "px";
                }
            }
        }
        if(flag){
            clearInterval(obj.timer);
            if(func){
                func(obj);
            }
        }
    },100)
}