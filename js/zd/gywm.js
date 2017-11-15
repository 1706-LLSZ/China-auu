window.onload=function(){
	var zd_box=document.querySelectorAll('.zd-box ');
	var left=document.querySelector('.left ');
	var right=document.querySelector('.right');
	for(let i=0;i<zd_box.length;i++){
		if(i!=0){
			zd_box[i].style.left="900px";
		}
	}
	var now=0;
	var next=0;
		var flag=true;

	function moones(type_1="l"){
			if(!flag){
				return
			}
		flag=false
		if(type_1=="l"){
			next++
				if(next>=zd_box.length){
					next=zd_box.length-1;
					flag=true;
				return
				}
	
			animate(zd_box[now],{left:"-900"},500)
		}
		else if(type_1=="r"){
				next--;
				if(next<0){
					next=0
					flag=true;
				return
				}
	
			animate(zd_box[now],{left:"900"},500)
		}
			animate(zd_box[next],{left:"0"},function(){
				flag=true
			})

			now=next;
		}
		right.onclick=function(){
			moones()
		}
		left.onclick=function(){
			moones("r")
		}
}