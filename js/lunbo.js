!(function(w){
	w.tool = {};
	w.tool.lunbo = function(){
		var animationLis = document.querySelectorAll('.home1 li');
		var home1 = document.querySelector('.home1');
		var clickLis = document.querySelectorAll('.home2 li')
		//自动轮播
		var autoIndex = 0
		
		var timer2 = 0
		
		var nowIndex = 0 
		var dotIndex = 0
			home1.onmouseenter=function(){
			clearInterval(timer2)
		}
		home1.onmouseleave=function(){
			animation()
		}
		clickMove()
		function clickMove(){
			
			for (var i = 0 ; i<clickLis.length;i++) {
				(function(i){
					
					clickLis[i].onclick=function(){
						clearInterval(timer2)
						for (var j = 0 ; j<clickLis.length;j++) {
							clickLis[j].classList.remove('active')
						}
						this.classList.add('active')
						
						if(nowIndex<i){
							animationLis[nowIndex].classList.remove('leftShow')
							animationLis[nowIndex].classList.remove('rightHide')
							animationLis[nowIndex].classList.remove('rightShow')
							animationLis[nowIndex].classList.add('leftHide')
							
							
							animationLis[i].classList.remove('leftShow')
							animationLis[i].classList.remove('rightHide')
							animationLis[i].classList.remove('leftHide')
							animationLis[i].classList.add('rightShow')
						}
						if (nowIndex>i) {
							animationLis[nowIndex].classList.remove('leftShow')
							animationLis[nowIndex].classList.remove('rightShow')
							animationLis[nowIndex].classList.remove('leftHide')
							animationLis[nowIndex].classList.add('rightHide')
							
							
							animationLis[i].classList.remove('rightShow')
							animationLis[i].classList.remove('rightHide')
							animationLis[i].classList.remove('leftHide')
							animationLis[i].classList.add('leftShow')
						}
						console.log(i)
						nowIndex = i
						
						autoIndex = i
						
					}
				})(i)
			}
			
		}
		
		function animation(){
			clearInterval(timer2)
			timer2 = setInterval(function(){			
				autoIndex ++
				
				/*for (var i = 0 ; i<animationLis.length;i++) {
					animationLis[i].classList.remove('')
				}*/
				
				if (autoIndex==animationLis.length) {
					autoIndex =0
				}
				for (var i = 0 ; i<animationLis.length;i++) {
					clickLis[i].classList.remove('active')
				}
				clickLis[autoIndex].classList.add('active')
				animationLis[nowIndex].classList.remove('leftShow')
				animationLis[nowIndex].classList.remove('rightHide')
				animationLis[nowIndex].classList.remove('rightShow')
				animationLis[nowIndex].classList.add('leftHide')
				
				
				animationLis[autoIndex].classList.remove('leftShow')
				animationLis[autoIndex].classList.remove('rightHide')
				animationLis[autoIndex].classList.remove('leftHide')
				animationLis[autoIndex].classList.add('rightShow')
				
				nowIndex = autoIndex
			},2000)
		
		}
	}
})(window);
