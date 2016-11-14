$(function(){
	//手机号登录	
	/*
		取json值对比登录
		正确登录
		错误提示
	*/
	var name = getCookie("name");
	var password = getCookie("password");
	var nameE = getCookie("nameE");
	var passwordE = getCookie("passwordE");
	$("#login-login").click(function(){
		var iphone = $("#phone").val();
		var pwdd = $("#pwd").val();
		var url="../json/json.json";
		var num=0;		
		if(iphone=="" || pwdd==""){
			alert("用户名或密码为空");
		}else{
			$.get(url,function (response,status,xhr){
				if(status==="success"){
					var obj = response;

					for(var i=0;i<obj.length;i++){
						if((iphone==name && pwdd==password) || (iphone==nameE && pwdd==passwordE) ||(iphone==obj[i].name && pwdd==obj[i].password)){
							alert("登录成功");
							window.open("../html/index.html");
						}else{
							
							num++;
						}
					}
					if(num==obj.length){
						alert("账号密码错误");
					}
				}
			})			
		}	
	})
})