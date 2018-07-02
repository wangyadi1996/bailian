require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"slide"	 : "slide"
	}
})

require(["jquery","slide"],function($,slide){
	/*用户名验证*/
	/*$(".input1").focus(function(){
		$(".prompt1").css("display","block");
		$(".prompt-text").css("display","block");
	})*/
	$(".input1").blur(function(){
		$(".prompt1").css("display","block");
		
		var value1 = $(".input1").val();
		// value1 = value1.replace(/\s/g,"");
		/*if(value1.length === 0){
			$(".prompt-text").css("display","block");
		}else*/ 
		if(value1.length < 6 || value1.length > 20){
			$(".prompt-correct").css("display","none");
			$(".prompt-error").css("display","block");
			$(".prompt-error span").html("请输入6-20位字符");
			$(".prompt-error span").css("color","red");
		}else if(/\W/g.test(value1)){
			$(".prompt-correct").css("display","none");
			$(".prompt-error").css("display","block");
			$(".prompt-error span").html("请输入数字字母下划线");
			$(".prompt-error span").css("color","red");
		}else{
			$(".prompt-error").css("display","none");
			$(".prompt-correct").css("display","block");
			$(".prompt-correct span").html("输入正确");
			$(".prompt-correct span").css("color","green");
		}
	})
	/*密码验证*/
	$(".input2").blur(function(){
		var value = $(".input2").val();
		if(value.length == 0){
			$(".prompt2").css("display","block");
			$(".prompt2 .prompt-correct").css("display","none");
			$(".prompt2 .prompt-caps").css("display","none");
			$(".prompt2 .prompt-text").css("display","block");
			$(".prompt2 .prompt-text span").html("请输入密码");
		}else{
			$(".prompt2").css("display","block");
			$(".prompt2 .prompt-caps").css("display","none");
			$(".prompt2 .prompt-correct").css("display","block");
			$(".prompt2 .prompt-text").css("display","none");
			$(".prompt2 .prompt-correct span").html("输入成功");
			$(".prompt2 .prompt-correct span").css("color","green");
		}
	})
	$('.input2').keydown(function (e) {
	    if(e.keyCode === 20){
	    	$(".prompt2 .prompt-text").css("display","none");
	    	$(".prompt2").css("display","block");
	    	$(".prompt2 .prompt-caps").css("display","block");

	    }else{
	    	$(".prompt2").css("display","none");
	    	$(".prompt2 .prompt-caps").css("display","none");
	    }
	})
	/*确认密码*/
	$(".input3").blur(function(){
		if($(".input2").val() === $(".input3").val() && $(".input3").val().length != 0){
			$(".prompt3").css("display","block");
			$(".prompt3 .prompt-error").css("display","none");
			$(".prompt3 .prompt-correct").css("display","block");
			$(".prompt3 .prompt-correct span").html("输入正确");
			$(".prompt3 .prompt-correct span").css("color","green");
		}else{
			$(".prompt3").css("display","block");
			$(".prompt3 .prompt-correct").css("display","none");
			$(".prompt3 .prompt-error").css("display","block");
			$(".prompt3 .prompt-error span").html("输入错误，请重新输入");
			$(".prompt3 .prompt-error span").css("color","red");
		}
	})
	/*手机号验证*/
	$(".input4").blur(function(){
		var value = $(".input3").val();
		 // value = value.replace(/\s+/g,"");
		 if(value.length != 11){
		 	$(".prompt4").css("display","block");
		 	$(".prompt4 .prompt-error").css("display","block");
		 	$(".prompt4 .prompt-error span").html("请输入11位手机号码");
		 	$(".prompt4 .prompt-error span").css("color","red");
		 }else if(/^1/.test(value)){
		 	$(".prompt4").css("display","block");
		 	$(".prompt4 .prompt-error").css("display","block");
		 	$(".prompt4 .prompt-error span").html("首位数字须为1");
		 	$(".prompt4 .prompt-error span").css("color","red");
		 }else{
		 	$(".prompt4").css("display","block");
		 	$(".prompt4 .prompt-correct").css("display","block");
		 	$(".prompt4 .prompt-correct span").html("输入正确");
		 	$(".prompt4 .prompt-correct span").css("color","green");
		 }
	})
})