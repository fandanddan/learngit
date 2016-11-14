;$(function(){
	$(".img-big").mousemove(
		function(e){
			//计算盒子内的鼠标位置：
			var x = e.pageX - $("div.img-big").offset().left;
			var y = e.pageY - $("div.img-big").offset().top;
			//验收，保证放大镜，不能移出盒子
			if(x < 87.5){
				x = 87.5;
			}
			
			if(y < 87.5){
				y = 87.5;
			}

			if(x > 400 - 87.5){
				x = 400 - 87.5;
			}
			if(y > 400 - 87.5){
				y = 400 -87.5;
			}

			//让放大镜跟随鼠标：
			$(".img-big .fangdajing").css(
				{
					"left":x - 87.5,
					"top":y - 87.5
				}	
			);

			//让大图的background-position，等比例变化
			var beijingx = -(300/175) * (x - 75);
			var beijingy = -(300/175) * (y - 75);
			$(".datu").css("background","url(" + $(".img-big").find("img").attr('src') + ")");
			$(".datu").css("background-position",beijingx + "px " + beijingy + "px");
		}
	);
				
	$(".img-big").mouseenter(
		function(){
			$(".fangdajing").show();
			$(".datu").show()
		}
	)
				
	$(".img-big").mouseleave(
		function(){
			$(".fangdajing").hide();
			$(".datu").hide()
		}
	)

});