$(function(){

	$(document).scroll(function(){
		var obj=document.body.scrollTop?document.body:document.documentElement;
		if(obj.scrollTop>=200){
			$(".zd-header").css({top:"-200px"});
		}else if(obj.scrollTop<200){
			$(".zd-header").css({top:"0"});
			
		}

	})
		var flag=true;
	$(".dhbox").click(function(){
	
		if(flag){
			$(".zd-bigbox").css({display:"block"});
		}else{
			$(".zd-bigbox").css({display:"none"});
		}
		flag=!flag;
	
	})

	$(".zd-map .btn").click(function(){
	$(".zd-map .mapapi").css("height","244px");
	})
	$(".zd-map .btn-down").click(function(){
	$(".zd-map .mapapi").css("height","0px");
	})

	$('.wx').hover(function(){
		$(".ewm").css("height","140px")
	},function(){
		$(".ewm").css("height","0")

	})

})