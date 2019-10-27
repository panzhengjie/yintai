;(function(w){
	w.tools={}
	w.tools.toTop = function(){
		//右侧图标加回到顶点按钮
		//var scrollTop = $(document.documentElement).scrollTop() +$(document.body).scrollTop();
		$(window).scroll(function(event){
			
			var scrollTop = $(document.documentElement).scrollTop() +$(document.body).scrollTop();
			if (scrollTop>100) {
			$('.toTop').fadeIn()
			}else{
				$('.toTop').fadeOut()
			}
		})
		$('.toTop').on('click',function(){
			$('body,html').animate({
		       scrollTop: 0
		      }, 1000);
				});
	}
	w.tools.fancyShow = function(){
		$('[data-fancybox="gallery"]').fancybox({
				    
		    loop     : true, //循环
		    caption : function( instance, item ) { //可下载
			    var caption = $(this).data('caption') || '';
			
			    if ( item.type === 'image' ) {
			      caption = (caption.length ? caption + '<br />' : '') + '<a href="' + item.src + '">Download image</a>' ;
			    }
			
			    return caption;
		  	},
		    protect: true,//防止下载
			parentEl : '.list3',
			//控制图片相对大小
			afterLoad : function(instance, current) {
		        var pixelRatio = window.devicePixelRatio || 1;
		
		        if ( pixelRatio > 1.5 ) {
		            current.width  = current.width  / pixelRatio;
		            current.height = current.height / pixelRatio;
		        }
		   },
		   iframe : {
		        css : {
		            width : '600px'
		        }
		    }
		});
			
	}

})(window)
