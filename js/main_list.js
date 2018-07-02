require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"slide"	 : "slide"
	}
})

require(["jquery","slide"],function($,slide){
	/*nevigater*/
	
	$(".nevigate-show").on('mouseenter',function(){
		$(".menu-date").removeClass("hide");
	}).on("mouseleave",function(){
		$(".menu-date").addClass("hide");
		$(".menu-date ul li").addClass("hide");
		var li_data = $(this).attr("data-id");
		$('.nav-show ul li').css("background","");
		$('.nav-show ul li').find("a").css("text-decoration","none");
	}).on("mouseenter","li",function(e){
		var li_data = $(this).attr("data-id");
		$('.menu-date ul li').addClass("hide");
		$('.menu-date ul li[data-id="' + li_data + '"]').removeClass('hide');
		$('.nav-show ul li').css("background","");
		$('.nav-show ul li').find("a").css("text-decoration","none");
		$('.nav-show ul li[data-id="' + li_data + '"]').css("background","#9c9797");
		$('.nav-show ul li[data-id="' + li_data + '"]').find("a").css("text-decoration","underline");
	})
	
	$(".nevigate").mouseenter(function(){
		$(".nav-con .nevigate-show").css("display","block");
	})
	$(".nav-con .nevigate-show").mouseleave(function(){
		$(".nav-con .nevigate-show").css("display","none");
	})
})
