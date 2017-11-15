$(function(){
	//-------------------------------------- banner轮播
	var mySwiper = new Swiper('.swiper-container', {
		loop : true,
		prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
	})

	//--------------------------------------我们服务
	$(".cont li").hover(
		function(){
			$(".imgtwo",this).css({top:0});
			$(".imgone",this).css({opacity:1});
			$("h3",this).css({color:"#e4392a"});
			$("p",this).css({color:"#000"});
		},
		function(){
			$(".imgtwo",this).css({top:"-127px"});
			$(".imgone",this).css({opacity:0});
			$("h3",this).css({color:"#999"});
			$("p",this).css({color:"#999"});
		}
	)

	//-------------------------------------成功案例
	$(".container1 li").hover(
		function(){
			$('.hover',this).css({top:0})
		},
		function(){
			$('.hover',this).css({top:"-100%"})
		}
	)
	//--------------------------------------我们服务2
	$(".container2 li").hover(
		function(){
			$(".hover",this).css({top:0})
			$(".pad",this).css({bottom:0})
		},
		function(){
			$(".hover",this).css({top:"-100%"})
			$(".pad",this).css({bottom:"-200%"})
		}
	)
	//---------------------------------------地图
	//创建和初始化地图函数：
    function initMap(){
      createMap();//创建地图
      setMapEvent();//设置地图事件
      addMapControl();//向地图添加控件
      addMapOverlay();//向地图添加覆盖物
    }
    function createMap(){ 
      map = new BMap.Map("map"); 
      map.centerAndZoom(new BMap.Point(117.186681,39.119297),15);
    }
    function setMapEvent(){
      map.enableScrollWheelZoom();
      map.enableKeyboard();
      map.enableDragging();
      map.enableDoubleClickZoom()
    }
    function addClickHandler(target,window){
      target.addEventListener("click",function(){
        target.openInfoWindow(window);
      });
    }
    function addMapOverlay(){
    }
    //向地图添加控件
    function addMapControl(){
      var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
      scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
      map.addControl(scaleControl);
      var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
      map.addControl(navControl);
      var overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});
      map.addControl(overviewControl);
    }
    var map;
    initMap();

    $(".kai a").click(function(){
    	$(".kai").css({display:"none"});
    	$(".zhan").css({display:"block"});
    	$("#map").css({height:"580px;"});
    })
    $('.zhan a').click(function(){
    	$(".zhan").css({display:"none"});
    	$(".kai").css({display:"block"});
    	$("#map").css({height:"0px;"});
    })


   $(document).ready(function(){
		$(".side1 ul li").hover(function(){
			$(this).find(".sidebox").stop().animate({"width":"175px"},200).css({"background":"#e4392a","padding-left":"17px"})
		},function(){
			 $(this).find(".sidebox").stop().animate({"width":"50px"},200).css({"background":"#002","padding-left":"0"})
		})
		$(".side2 ul li").hover(function(){
			$(this).find("a").css({"background":"#002"})
		},function(){
			$(this).find("a").css({"background":"#e4392a"})
		})
		$(".side2 li").eq(1).click(function(){
			$("html,body").animate({"scrollTop":"0"},600)
		})
		$('.side2 li').hover(function(){
		    $(this).find('.weixin').stop().slideToggle();
		})
	})

})