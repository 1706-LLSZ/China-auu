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
	$(".side2 li #top").click(function(){
		$("html,body").animate({"scrollTop":"0"},600)
	})
	$('.side2 li').hover(function(){
	    $(this).find('.weixin').stop().slideToggle();
	})
})
