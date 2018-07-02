define(function(){
	return {
		slide : function(id){			
//			控制 下标
			var indexA = 0;
			var zIndex = 1;
			var timer = null;
			var bigPics = $(".banner-body ul li");
			var oradius = $(".arrows-switch li");
			//调用轮播和自动播放的
			slider();
			autoPlay();
			//给左右按钮添加点击事件
			$(".arrows .arrows-l").click(function(){
				indexA --;
				if(indexA == -1){
					indexA = 6;
				}
				//调用轮播
				slider();
			})
			$(".arrows .arrows-r").click(function(){
				indexA ++;
				if(indexA == 7){
					indexA = 0;
				}
				//调用轮播
				slider();
			})
			//给小圆点添加事件
			$(".arrows-switch li").each(function(index,value){
				$(value).mouseover(function(){
					indexA = index;
					//调用轮播
					slider();
				})
				/*$(value).hover(function(){
					if(indexA = index){
						$(this).find("a").css({"background":"#000"});
					}
				},function(){
					if(indexA != index){
						$(this).find("a").css({"background":"#fff"});
					}	
				})*/
			})
			//轮播
			function slider(){
				//大图轮播
				$(bigPics[indexA]).css("zIndex",++ zIndex);
				$(oradius).find("a").css({"background":"#fff"});
				$(oradius[indexA]).find("a").css({"background":"#000"});
			}
			//自动轮播
			function autoPlay(){
				timer = setInterval(function(){
					indexA ++;
					if(indexA == 7){
						indexA = 0;
					}
					slider();
				},3000)
			}
			$(".banner-body li a").mouseenter(function(){
				clearInterval(timer);
			})
			$(".banner-body li a").mouseleave(function(){
				autoPlay();
			})
		},
		sliderNew : function(id){
			var indexA = 0;
			var timer = null;
			var zIndex = 1;
			var bigPics = $(".new-tm-roll li");
			var smallLis = $(".progress .pro-list");
			sliderNew();
			autoPlayNew();
			
			$(smallLis).each(function(index,value){
				$(value).mouseover(function(){
					indexA = index;
					sliderNew();
				})
				$(value).hover(function(){
					if(indexA = index){
						$(this).css("background","#333");
					}
				},function(){
					$(this).css("background","#fff");
				})
			})
			//大图轮播
			function sliderNew(){
				$(bigPics[indexA]).css("zIndex",++ zIndex);
				$(smallLis).css("background","#fff");
				$(smallLis[indexA]).css("background","#333");
			}
			//自动轮播
			function autoPlayNew(){
				timer = setInterval(function(){
					indexA ++;
					if(indexA == 3){
						indexA = 0;
					}
					sliderNew();
				},3000);
			}
			$(bigPics).mouseenter(function(){
				clearInterval(timer);
			})
			$(bigPics).mouseleave(function(){
				autoPlayNew();
			})
		}
	}
})
