$(function () {

	// 这里是收索
	$('#header #header-top #search .tab span').eq(0).addClass('active');
 $('#header #header-top #search .tab span').click(function (){
 	$('#header #header-top #search .tab span').removeClass('active');
 	$(this).addClass('active');

 	
 })


 // 这里是导航
 $('#header #header-bott #nav-main #a').css('width',60);
     $('#header #header-bott').mouseenter(function () {
     	
     	$('#header #header-bott #nav-main p').stop().slideDown('fast');

     	
     });
     $('#header #header-bott').mouseleave(function () {
     	$('#header #header-bott #nav-main p').slideUp("slow"); 
     	$('#header #header-bott #nav-main #a').css('width',$('#header #header-bott #nav-main p a').width());

     });

// 这里是轮播图


     var iNow = 0;
     var aLi2 = $('#blank #left .ul2 li');
     
     var liW = aLi2.width();
     var timer = null;

     $('#blank #left .ul2').width(aLi2.length*liW);
  // 下一页
  $('#blank #left .pre-next #next').on('click',nextPage);
  $('#blank #left .pre-next #pre').on('click',prePage);
  function prePage () {
     iNow--;
     if(iNow==-1){
          $('#blank #left .ul2').stop().animate({left: -(iNow+1)*liW},1000,function(){
               $('#blank #left .ul2').css('left',-(aLi2.length-2)*liW);
          });
          iNow=aLi2.length-3;
     }else{
          $('#blank #left .ul2').stop().animate({left: -(iNow+1)*liW},1000);
          
     }

      $('#blank #left .ul1 li').removeClass('active');
    
     $('#blank #left .ul1 li').eq(iNow).addClass('active');
}
  function nextPage () {
     iNow++;
     if(iNow==aLi2.length-2){
          $('#blank #left .ul2').stop().animate({left: -(iNow+1)*liW},1000,function(){
               $('#blank #left .ul2').css('left',-liW);
          });
          iNow=0;
     }else{
          $('#blank #left .ul2').stop().animate({left:-(iNow+1)*liW},1000)
          
     }

      $('#blank #left .ul1 li').removeClass('active');
   
     $('#blank #left .ul1 li').eq(iNow).addClass('active');
}
// 改变选项卡
$('#blank #left .ul1 li').click(function () {
     // 清空所有
     // 改变选项卡
     $('#blank #left .ul1 li').removeClass('active');
     iNow=$(this).index();
     $('#blank #left .ul1 li').eq(iNow).addClass('active');
     $('#blank #left .ul2').stop().animate({left: -(iNow+1)*liW},1000);

});
// 增加定时武器
clearInterval(timer);
timer = setInterval(nextPage,3000);

// 增加鼠标的移入移除

 $('#blank #left').mouseenter(function () {
     clearInterval(timer);


 });
  $('#blank #left').mouseleave(function () {
     timer = setInterval(nextPage,3000);
 });
  
// 这里是blank的右边

$('#blank #right li').hover(function (){
  $('#blank #right li img').eq($(this).index()).stop().animate({width: 393,height: 163});
},function(){
   $('#blank #right li img').stop().animate({width: 373,height: 143});
});

// 这里是index1
function random (n,m) {
  return Math.floor(Math.random()*(m-n)+n);
};

$('#body #index1 li').mouseenter(function () {

  $('#body #index1 li h4').eq($(this).index()).css('background','rgba('+random(0,256)+','+random(0,256)+','+random(0,256)+','+0.8+')');

    var x = $(this).index();
    $('#body #index1 li h4').eq(x).css('display','block').stop().animate({height:60},300);

    $('#body #index1 li').mouseleave(function(){
  
   $('#body #index1 li h4').eq(x).stop().animate({height:0},300).css('display','block')
});
});

// 这里是index2de
 $('#body #index2 #neirong #top button').hover(function () {
  $('#body #index2 #neirong #top button').css({'background':'#87161a','color':'#fff'})
 })






})