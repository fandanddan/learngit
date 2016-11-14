$(function(){
	var flag = false;

	//购物车-->真爱协议
	$(".form-block").eq(0).addClass('active');
	$(".end-bt").click(function(){
		$(".active").removeClass("active");
		$(".agreement").addClass("active");
	})
	
	
	//清空购物车
	$(".qk-shop").click(function(){
		$(".cp_tr").remove();
		$(".kb_tr").remove();
	})


	//添加购物车
	
	var num = 0;
	$("#addcort").click(function(){
		if($(".userlogin").html()=="登录"){
			window.open("login.html");
		}else{
			if(!getCookie("num")){
				num = 0;
			}else{
				alert("成功加入购物车");
				num = parseInt(getCookie("num"))+1;
			}
			var date = new Date();
			date.setDate(date.getDate()+10);
			var price = $("#price").html();
			var imgSrc = $(".img-small-ul").first().find("img").attr("src")	 
			var ringName = $(".price-top").find("h4").html();
			var caizhi = $(".price-pink").first().find("i").html();
			var shoucun = $("#shoucun").val();
			var kezi = $("#yyy").val();
			
			setCookie("jiage" + num,price,date);
			setCookie("tupian" + num,imgSrc,date);
			setCookie("nameRing" + num,encodeURI(ringName),date);
			setCookie("caizhi" + num,encodeURI(caizhi),date);
			setCookie("shoucun" + num,shoucun,date);
			setCookie("kezi" + num,encodeURI(kezi),date);
			setCookie("num",""+num+"",date);
		}
	})

	$("#addcort").click(function(){
		var price = $("#price").html();
		var imgSrc = $(".img-small-ul").first().find("img").attr("src")	 
		var ringName = $(".price-top").find("h4").html();
		var caizhi = $(".price-pink").first().find("i").html();

		var shoucun = $(".price-pink").find("p").eq(1).find("select").find("option")
		setCookie("")
	})

	//真爱协议-->订单详情
	$(".agreement-bt1").click(function(){
		if($('#ladyName').val() == ""){
			alert("女士姓名不能为空 ");	
			flag = false;		
		}
		if(!$('#cbAgree').is(':checked')){
			alert("必须先接受真爱协议");
			flag = false;
		}
		if(($('#ladyName').val() != "") && ($('#cbAgree').is(':checked'))){
			flag = true;
		}
		if(flag){
			$(".active").removeClass("active");
			$(".write-indent").addClass("active");
		}	
	})

	//添加新地址
	$("#addressNew").click(function(){
		$(".shop-adress-add").addClass("active");				
	})

	



	//保存收货人信息  (保存不了)
	var n=0;
	$(".save").click(function(event){
		if(!getCookie("n")){
			n = 0;
		}else{
			n = parseInt(getCookie("n"))+1;
		}
		var date1 = new Date();
		date1.setDate(date1.getDate()+10);
		var name = $("#addressName").val();
		var area = $("#area").val();
		var cmbProvince = $("#cmbProvince").val();
		var cmbCity = $("#cmbCity").val();
		var cmbArea = $("#cmbArea").val();
		var street = $("#street").val();
		var mobile = $("#mobile").val();
		console.log(mobile);
		
    	$(".shop-cart-main-fl h3").append('<p>收货人：'+name+'&nbsp;地址：'+area+cmbProvince+cmbCity+cmbArea+street+'&nbsp;手机号：'+mobile+'</p>');
    
		$(".shop-adress-add").removeClass("active");				
	})



	//订单详情-->提交订单
	$(".indent-bt1").click(function(){
		$(".active").removeClass("active");
		$(".submit-indent").addClass("active");				
	})


	//提交订单-->支付成功
	$(".submit-indent-bt3").click(function(){
		$(".active").removeClass("active");
		$(".pay-success").addClass("active");				
	})
})