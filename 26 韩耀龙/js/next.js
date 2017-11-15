$(function () {





	$('#index3 #table li').hover(function () {
		$(this).siblings().attr('style','background-position:-25px 0')
		var index = $(this).index();
		$('#index3 #cont li').removeClass('active');
		$('#index3 #cont li').eq(index).addClass('active');
		$(this).attr('style','background-position:-20px -194px');
	})
	


// 这里是index4
 
   $('#index4 #text .btm2 li').hide();
    $('#index4 #text .btm2 li').eq(0).show();
   $('#index4 #text .bottom .li1').attr('style','background-position:0 -140px');
    $('#index4 #text .bottom li').hover(function () {
    	 $(this).siblings().attr('style','background-position:0px 0px');
    	 $(this).attr('style','background-position:0 -140px');
    	 var x = $(this).index()

    $('#index4 #text .btm2 li').hide();

   $('#index4 #text .btm2 li').eq(x).show();
    })


// 这里是index9
$('#index9 #btm .btm1 li').hover(function () {
	
	$(this).siblings().children('.on').css('display','none');
	$(this).children('.on').css('display','block')
})

// 这里是index10
$(window).scroll(function() {
	var top = $('#index10').offset().top;
	var result = $(window).scrollTop()
	if(result>=top){

	
		 ; $('#index10 img').fadeIn();
	}else{
		 $('#index10 img').fadeOut();
	}

	  
});
console.log($('#index1-1 img').offset().top)
  lazeLoad()
// 懒加载
function lazeLoad() {
			// 右边线
    
			var result = $(window).height() + $(window).scrollTop();
              // console.log(result)
			$('div').each(function (index,ele) {
				// ele-->js对象-->jq对象
				var top = $(ele).offset().top;
				// console.log(top)
				if (result>= top) {
					// 加载图片
					// ele.src = ele.getAttribute('_src');
					var _src = $(ele).children('img').attr('_src');
					$(ele).children('img').attr('src',_src);
				}
			});
		$('img').each(function (index,ele) {
				// ele-->js对象-->jq对象
				var top = $(ele).offset().top;
				// console.log(top)
				if (result>= top) {
					// 加载图片
					// ele.src = ele.getAttribute('_src');
					var _src = $(ele).attr('_src');
					$(ele).attr('src',_src);
				}
			});
		};
		$(window).scroll(lazeLoad);
		$(window).resize(lazeLoad);













})