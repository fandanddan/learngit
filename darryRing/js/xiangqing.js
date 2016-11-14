$(function(){
	$(".qhring-cookie-img").click(function(){
		var src = getCookie("src");
		$(this).attr("src",src);
	})
})