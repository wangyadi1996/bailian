require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"slide"	 : "slide"
	}
})


require(["jquery","slide"],function($,slide){
	/*顶部搜索框*/
	$(window).scroll(function(){
		var scrollTop = $(document).scrollTop();
		if(scrollTop > 100){
			$(".header-scroll").addClass("scroll-show");
			$(".scroll-show").css("top",0);
		}else{
			$(".header-scroll").css("top","-79px");
		}
		$(".navicon").hover(function(){
			$(".header-nav .nevigate-show").css("display","block");
			$(".header-nav .nevigate-show .nav-show").css("display","block");
		})
		$(".header-nav .nevigate-show").mouseleave(function(){
			$(".header-nav .nevigate-show").css("display","none");
		})
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
			$(".doudou").css("display","block");
			$(".doudou").css({"left": offsetX });
		},function(){
			$(this).css("color","#333");
			$(".doudou").css("display","none");
		})
	})
	
	/*banner*/
	$(".banner-life li").each(function(index,value){
		$(value).mouseover(function(){
			$(this).find("div").css('backgroundPosition',"0 -28px");
		})
		$(value).mouseleave(function(){
			$(this).find("div").css('backgroundPosition',"0 0");
		})
	})
	$(".banner-life .life11").mouseover(function(){
		$(".life_2_btn").css("display","none");
		$(".life_3_btn").css("display","none");
		$(".life-x").css("display","block")
		$(".ban-life-hover").css("display","block");
		$(".life_btn").css("display","block");
		$(".life_1_btn").css("display","block");
	})
	$(".life-x").click(function(){
			$(".ban-life-hover").css("display","none");
			$(".life-x").css("display","none");
		})
	$(".banner-life .life22").mouseover(function(){
		$(".life_1_btn").css("display","none");
		$(".life_3_btn").css("display","none");
		$(".life-x").css("display","block")
		$(".ban-life-hover").css("display","block");
		$(".life_btn").css("display","block");
		$(".life_2_btn").css("display","block");
	})
	$(".banner-life .life33").mouseover(function(){
		$(".life_2_btn").css("display","none");
		$(".life_1_btn").css("display","none");
		$(".life-x").css("display","block")
		$(".ban-life-hover").css("display","block");
		$(".life_btn").css("display","block");
		$(".life_3_btn").css("display","block");
	})	
	
//	slide
	slide.slide($(".banner-eye"));
	
	//czt
	$(".czt-next").click(function(){
		$(".czt-list").css("left","-966px");
		$(".czt-next").css("display","none");
		$(".czt-prev").css("display","block");
	})
	$('.czt-prev').click(function(){
		$(".czt-list").css("left","0");
		$(".czt-prev").css("display","none");
		$(".czt-next").css("display","block");
	})
	
	//new-tm
	slide.sliderNew($(".new-tm-left"));
	
	//floor
	$(window).scroll(function(){
		var scrollTop = $(document).scrollTop();
		var currentId = "";
		var bigBox = $(".floor-con");
		if(scrollTop > $(".floor1-con").offset().top){
			$(".suspend").css("display","block");
		}else{
			$(".suspend").css("display","none");
		}
		bigBox.each(function(index,value){
			var m = $(this);
			var bigBoxTop = $(value).offset().top;
			if(scrollTop > bigBoxTop - 20){
				currentId = "#" + $(value).attr("id");//#floor1
			}else{
				return false;
			}
		});
		//相应楼层设置样式
		var currentA = $(".suspend").find(".select");
		if(currentId && currentA.attr("href") != currentId){
			currentA.removeClass("select");
			$(".suspend").find("[href="+currentId+"]").addClass("select");
		}
		$(".suspend9").hover(function(){
			$(".suspend9").css("backgroundPosition","0 -50px");
		},function(){
			$(".suspend9").css("backgroundPosition","0 0");
		});
	})
	
	
	
	/*reside*/
	$(".resideMsg").click(function(){
		$(".reside-con").css("right","0");
	})
	$(".closed").click(function(){
		$(".reside-con").css("right","-278px");
	})
	$(window).resize(function(){
		var h = $(window).height();
		$(".reside-con").height(h);
		$(".reside-left").height(h);
		$(".reside-right").height(h);
	})
})


