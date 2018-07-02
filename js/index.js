
/*顶部搜索框*/
var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
$(window).scroll(function(){
	var scrollTop = $(document).scrollTop();
	if(scrollTop > 100){
		$(".header-scroll").addClass("scroll-show");
		$(".scroll-show").css("top",0);
	}else{
		$(".header-scroll").css("top","-79px");
	}
})



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

$(".nav-right li a").each(function(index,value){
	$(value).hover(function(){
		$(this).css("color","#ff6f6f");
		var offsetX = $(value).offset().left;
		$(".doudou").css({"left": offsetX , "top" : "-12px"});
	},function(){
		$(this).css("color","#333");
		$(".doudou").css("display","none");
	})
})






$(".banner-life li").each(function(index,value){
	$(value).mouseover(function(){
		$(this).find("div").css('backgroundPosition',"0 -28px");
//		$(".ban-life-hover").css("display","block");
	})
	
})
