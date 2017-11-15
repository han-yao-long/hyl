$(function () {

	// 这里是收索
	$('#header #header-top #search .tab span').eq(0).addClass('active');
 $('#header #header-top #search .tab span').click(function (){
 	$('#header #header-top #search .tab span').removeClass('active');
 	$(this).addClass('active');
   var dd = $(this).index()
   if(dd==0){
    $('#header #header-top #search .form .kw').attr('placeholder','查找曲美家具体验店')
   }
   if(dd==1){
    $('#header #header-top #search .form .kw').attr('placeholder','查找曲美家具相关商品')
   }
   if(dd==2){
    $('#header #header-top #search .form .kw').attr('placeholder','查找曲美家具相关文章')
   }

 	
 })


 // 这里是导航
 // $('#header #header-bott #nav-main #a').css('width',60);
 $('#header #header-bott #nav-main .aaaa').eq(2).css('width',78)
     $('#header #header-bott').mouseenter(function () {
     	
     	$('#header #header-bott #nav-main p').stop().slideDown('fast');
      $('#header #header-bott #nav-main a').hover(function () {
          $('#header #header-bott #nav-main a').css('color','#fff')
          $(this).css('color','#b61f24')
      })


     	
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

     // $('#blank #left .ul2').width(aLi2.length*liW);

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

// 增加鼠标的移入移除/

 $('#blank #left').mouseenter(function () {
     clearInterval(timer);


 });
  $('#blank #left').mouseleave(function () {
     clearInterval(timer);
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
// 所有的button变色
 $('#body #index2 #neirong #top button').hover(function () {
  $('#body #index2 #neirong #top button').css({'background':'#87161a','color':'#fff'})
 },function () {
   $('#body #index2 #neirong #top button').css({'background':'none','color':'#707070'})
 });
 // index3
 $('#body #index3 button').hover(function () {
  $('#body #index3 button').css({'background':'#87161a','color':'#fff'})
 },function () {
   $('#body #index3 button').css({'background':'none','color':'#707070'})
 });

// index4

 $('#body #index4 #top button').hover(function () {
  $('#body #index4 #top button').css({'background':'#87161a','color':'#fff'})
 },function () {
   $('#body #index4 #top button').css({'background':'none','color':'#707070'})
 });
 // index5
 $('#index5 #top button').hover(function () {
  $('#index5 #top button').css({'background':'#87161a','color':'#fff'})
 },function () {
   $(' #index5 #top button').css({'background':'none','color':'#707070'})
 });
 // index6
 $('#index6 #top button').hover(function () {
  $('#index6 #top button').css({'background':'#87161a','color':'#fff'})
 },function () {
   $(' #index6 #top button').css({'background':'none','color':'#707070'})
 });
 // index7
 $('#index7 #top button').hover(function () {
  $('#index7 #top button').css({'background':'#87161a','color':'#fff'})
 },function () {
   $(' #index7 #top button').css({'background':'none','color':'#707070'})
 });


 // 风格
   $('#body #index2 #neirong #top ul li').click(function () {
    var x = $(this).index();
    $('#body #index2 #neirong #top ul li').removeClass('active');
    $(this).addClass('active');
    if(x==0){
    $('#body #index2 #neirong #bottom .left h2').html('清北北欧风格');
    $('#body #index2 #neirong #bottom .left p').html('对北欧的风格非常痴迷,轻松,简洁,时尚而又温馨,这也是他对一个家的梦想和要求.这是个充满梦想的家,到处流露着与众不同的精心设计,也非常大胆而巧妙,尤其在色彩对比上更是携手自如...');
    $('#body #index2 #neirong #bottom .left .LB img').attr('src','images/1-151026095614U6.png');



    $('#body #index2 #neirong #bottom .right .RT img').attr('src','images/1-151026095603537.png');

    $('#body #index2 #neirong #bottom .right .RB1 img').attr('src','images/1-151026095635292.png');

     $('#body #index2 #neirong #bottom .right .RB2 img').attr('src','images/1-151026095A2L3.png');   
    }
    if(x==1){
    $('#body #index2 #neirong #bottom .left h2').html('精致北欧风格');
    $('#body #index2 #neirong #bottom .left p').html('轻松,自然,美妙,简洁...源自遥远小岛的北欧风,凭借亲近,舒适的北欧风在家具舞台上历久弥新,开放式的格局规划,感受纯粹的开阔空间的通透,借助清雅气质,轻松演绎上品品质...');
    $('#body #index2 #neirong #bottom .left .LB img').attr('src','images/1-151026095P0S9.png');

     $('#body #index2 #neirong #bottom .right .RT img').attr('src','images/1-151026095JVE.png');
    $('#body #index2 #neirong #bottom .right .RB1 img').attr('src','images/1-151026095Q1Y6.png');
     $('#body #index2 #neirong #bottom .right .RB2 img').attr('src','images/1-151026095R2193.png');   
        
    }
    if(x==2){
    $('#body #index2 #neirong #bottom .left h2').html('经典北欧风格');
    $('#body #index2 #neirong #bottom .left p').html('实用的传统北欧经典造型,设计简单大方,实用,针对通用大众,突出功能,没有太多繁琐装饰简洁,时尚而又温馨,这也是他对一个家的梦想和要求,这也是都市进入后时代的一个社会倾向.');
    $('#body #index2 #neirong #bottom .left .LB img').attr('src','images/1-160201140015220.png');

    $('#body #index2 #neirong #bottom .right .RT img').attr('src','images/1-160201143553394.png');
    $('#body #index2 #neirong #bottom .right .RB1 img').attr('src','images/1-160201140042429.png');
     $('#body #index2 #neirong #bottom .right .RB2 img').attr('src','images/1-160201131234634.png');   
        
    }
    if(x==3){
    $('#body #index2 #neirong #bottom .left h2').html('意大利时尚风格');
    $('#body #index2 #neirong #bottom .left p').html('意大利时尚风格的家具,从设计风格来讲,他们拥有古典和现代的两张面孔,把艺术和功能结合的相当紧密,意大利人不但很会生活跟懂得艺术在生活中的地位');
        $('#body #index2 #neirong #bottom .left .LB img').attr('src','images/1-151024204412364.png');

        $('#body #index2 #neirong #bottom .right .RT img').attr('src','images/1-151024204400H7.png');
    $('#body #index2 #neirong #bottom .right .RB1 img').attr('src','images/1-151024204425J1.png');
     $('#body #index2 #neirong #bottom .right .RB2 img').attr('src','images/1-151024204441101.png');   
    }
    if(x==4){
    $('#body #index2 #neirong #bottom .left h2').html('B8定制管家');
    $('#body #index2 #neirong #bottom .left p').html('以客户为中心，以设计师的设计服务为重点，强调专属感和个性化的量身定制。对每个你而言，尺寸、规格都非常精准，方案考究，精工制作，好比私家菜。');
    $('#body #index2 #neirong #bottom .left .LB img').attr('src','images/1-151024204512363.png');

     $('#body #index2 #neirong #bottom .right .RT img').attr('src','images/1-151024204459142.png');
    $('#body #index2 #neirong #bottom .right .RB1 img').attr('src','images/1-15102420452DW.png');
     $('#body #index2 #neirong #bottom .right .RB2 img').attr('src','images/1-15102420453G37.png');   
    }
    if(x==5){
    $('#body #index2 #neirong #bottom .left h2').html('中式复古');
    $('#body #index2 #neirong #bottom .left p').html('以客户为中心，以设计师的设计服务为重点，强调专属感和个性化的量身定制。对每个你而言，尺寸、规格都非常精准，方案考究，精工制作，好比私家菜。');
    $('#body #index2 #neirong #bottom .left .LB img').attr('src','images/1-15102420461a13.png');
    $('#body #index2 #neirong #bottom .right .RT img').attr('src','images/1-15102420460Y38.png');
    $('#body #index2 #neirong #bottom .right .RB1 img').attr('src','images/1-151024204635602.png');
     $('#body #index2 #neirong #bottom .right .RB2 img').attr('src','images/1-15102420464Oc.png');   
        
    }
    if(x==6){
    $('#body #index2 #neirong #bottom .left h2').html('中式简素');
    $('#body #index2 #neirong #bottom .left p').html('相较于传统中式，新中式设计被注入了鲜明的时代气息。新中式设计在保留传统中式风格的含蓄秀美和古朴韵味的基础上，将丰富的经典中式元素与现代都市风尚进行改良融合，最后形成了更符合当代人审美需求的新中式风格');
    $('#body #index2 #neirong #bottom .left .LB img').attr('src','images/1-151024204G9106.png');


     $('#body #index2 #neirong #bottom .right .RT img').attr('src','images/1-151024204F62I.png');
    $('#body #index2 #neirong #bottom .right .RB1 img').attr('src','images/1-151024204I0948.png');
     $('#body #index2 #neirong #bottom .right .RB2 img').attr('src','images/1-151024204J2195.png');   
        
        
    }

   });

   // 这里是点击卡选项
    // 图片放大
   $('#body #index2 #neirong #bottom .left img').hover(function () {
    $(this).stop().animate({'width':540,'height':380},500)
   },function() {
     $(this).stop().animate({'width':520,'height':360},500)
   });
    $('#body #index2 #neirong #bottom .right .RT img').hover(function () {
    $(this).stop().animate({'width':697,'height':424},500)
   },function() {
     $(this).stop().animate({'width':677,'height':404},500)
   });
     $('#body #index2 #neirong #bottom .right .RB img').hover(function () {
    $(this).stop().animate({'width':353,'height':196},500)
   },function() {
     $(this).stop().animate({'width':333,'height':176},500)
   });

  // 点击



   // index4
$('#body #index4 #bot ul li').hover(function () {
  var x = $(this).index();
  
  if(x==0){
    $('#body #index4 #bot ul li').eq(x).css('cursor','pointer')}
   
  if(x==2){
     $('#body #index4 #bot ul li').eq(x).css('cursor','pointer')}
  
   if(x==5){
    $('#body #index4 #bot ul li').eq(x).css('cursor','pointer')}
   
  if(x==7){
     $('#body #index4 #bot ul li').eq(x).css('cursor','pointer')}
  
});


// 这里是index5
$('#body #index5 #bot .right .rT li img').hover(

  function () {

      if($(this).parent().index()==3){
     
  $(this).stop().animate({'width':196,'height':196});
    }else{
       $(this).stop().animate({'width':216,'height':218});
    };
    
   
  },function () {
     $(this).stop().animate({'width':196,'height':196});
  }
);




// 这里是index6
$('#body #index6 #bot li img').hover(function () {

  $(this).stop().animate({'margin-top':-15},500)
  

},function () {
$(this).stop().animate({'margin-top':0},500)
});



// 这里是index7 
 
var liww = $('#body #index7 #bot .ul2 li').width();
var iNoww = 0;
var aLii2 = $('#body #index7 #bot .ul2 li')

$('#body #index7 #bot .ul1 li').click(function () {
     iNoww = $(this).index();
    
  $('#body #index7 #bot .ul1 li').removeClass('active');
  $(this).addClass('active');
   $('#body #index7 #bot .ul2').stop().animate({left:-(iNoww+1)*liww});



});
// 增加定时武器
function next () {

         iNoww++; 
      if (iNoww == aLii2.length - 2) {
        $('#body #index7 #bot .ul2').stop().animate({left: -(iNoww + 1) * liww},1000,function () {
          $('#body #index7 #bot .ul2').css('left',-liww);
        });
        iNoww = 0;
      } else {
        // 给ul设置left
        // $('.ul2').css('left',-(iNoww + 1) * liW);
        $('#body #index7 #bot .ul2').stop().animate({left: -(iNoww+1)*liww},3000);
      }

      // 改变选项
      $('#body #index7 #bot .ul1 li').removeClass('active');
      $('#body #index7 #bot .ul1 li').eq(iNoww).addClass('active');
};
var ddd = null;
 ddd=setInterval(next,3000);
 $('#body #index7 #bot .ul2 li').mouseenter(function () {
      clearInterval(ddd)
 });
 $('#body #index7 #bot .ul2 li').mouseleave(
   function () {
     ddd=setInterval(next,3000);
   }
  );


// 这里是help

$('#help #block .left .btns li').hover(function () { 
      $('#help #block .left .btns li').removeClass('active');
      $(this).addClass('active')
},function() {
       $('#help #block .left .btns li').removeClass('active');
})
// 这里是help的滚动

var dis = 0;
  
var xx = $('#help #block .right li .text .select .input1 .xx');
// 滚条
var gundong =$('#help #block .right li .text .select .input1 .xx .gundong');
 // 滚条的最大距离
var maxBarTop = xx.outerHeight()-$('#help #block .right li .text .select .input1 .xx .gundong').outerHeight();
// 列表
var liebiao = $('#help #block .right li .text .select .input1 .xx .liebiao');
 // ul的最大距离
var maxUlTop = xx.outerHeight()-liebiao.outerHeight();



gundong.mousedown(function (evt) {
       evt = evt||window.event;
       var y=evt.pageY;
       
     var  disY =y-gundong.offset().top;
  $(document).mousemove(function (evt){
     evt = evt||window.event;
     var dis  = evt.pageY-disY-xx.offset().top;
     if(dis <=0) {
      dis=0;
     };
     if(dis>=maxBarTop){
      dis = maxBarTop;
     }


  
    var scale = dis / maxBarTop;
    var ulTop = -scale*maxUlTop;
      gundong.css('top',dis);
     liebiao.css('top',ulTop);
    
  });

 $(document).mouseup(function (e) {
      $(document).unbind('mousemove');
    });
return false;
});
function isUp (evt) {
  var up = false; // up向上滚 
  if (evt.wheelDelta) { // 除了火狐
    if (evt.wheelDelta < 0) {
      up = false;
    } else {
      up = true;
    }

  } else { // 火狐
    if (evt.detail < 0) {
      up = true;
    } else {
      up = false;
    }
  }
  return up;
}
// 打开列表事件
$('#help #block .right li .text .select .input1 i').toggle(function () {
    
     xx.css('display','block')
},function(){
     xx.css('display','none')
}) 



// 添加滚轮事件
var liebiaoo = document.getElementById('liebiao')

 function addMouseWheel (obj,fn) {
    if (navigator.userAgent.indexOf('Firefox') != -1) {
      // 专门给火狐
      obj.addEventListener('DOMMouseScroll',fn,false);
    } else {
      //除了火狐
      obj.onmousewheel = fn;
    }
}


// 增加滚动事件
addMouseWheel(liebiaoo,function (evt) {
  evt = evt || window.event ;
  if(isUp(evt)) {
    dis -= 10;
    if(dis<=0) {
      dis=0;}
    } else {
      dis+=10;
      if(dis>=maxBarTop){
        dis = maxBarTop;
    }
  }
  var scale = dis / maxBarTop;
  var ulTop = -scale*maxUlTop;
  // alert()

   gundong.css('top',dis);
     liebiao.css('top',ulTop);
     return false;

});
// 点击后input的val发生变化
liebiao.on('click','li',function () {

 $('#help #block .right li .text .select .input1 input').val($(this).html())
    
});
// 字变红
liebiao.on('hover','li',function () {
   liebiao.children().removeClass('active');
   $(this).addClass('active');
})



// input2
var dis2 = 0;
  
var xx2 = $('#help #block .right li .text .select .input2 .xx');
// 滚条
var gundong2 =$('#help #block .right li .text .select .input2 .xx .gundong');
 // 滚条的最大距离
var maxBarTop2 = xx2.outerHeight()-gundong2.outerHeight();
// 列表
var liebiao2 = $('#help #block .right li .text .select .input2 .xx .liebiao');
 // ul的最大距离
var maxUlTop2 = xx2.outerHeight()-liebiao2.outerHeight();



gundong2.mousedown(function (evt) {
       evt = evt||window.event;
       var y2=evt.pageY;

       
     var  disY2 =y2-gundong2.offset().top;
  $(document).mousemove(function (evt){
     evt = evt||window.event;
     var dis2  = evt.pageY-disY2-xx2.offset().top;
     if(dis2 <=0) {
      dis2=0;
     };
     if(dis2>=66){
      dis2 = 66;
     }


  
    var scale2 = dis2 / maxBarTop2;
    var ulTop2 = -scale2*maxUlTop2;
      gundong2.css('top',dis2);
     liebiao2.css('top',ulTop2);
    
  });

 $(document).mouseup(function (e) {
      $(document).unbind('mousemove');
    });
return false;
});

// 打开列表事件
$('#help #block .right li .text .select .input2 i').toggle(function () {
     xx2.css('display','block')
},function(){ 
     xx2.css('display','none');
}) 
$(document).click(function () {
  xx2.css('display','none');
  xx.css('display','none');
})



// 添加滚轮事件
var liebiaoo2 = document.getElementById('liebiao2')

// 增加滚动事件2
addMouseWheel(liebiaoo2,function (evt) {
  evt = evt || window.event ;
  if(isUp(evt)) {
    dis2 -= 10;
    if(dis<=0) {
      dis2=0;}
    } else {
      dis2+=10;
      if(dis2>=66){
        dis2 = 66;
    }
  }
  var scale2 = dis2 / maxBarTop2;
  var ulTop2 = -scale2*maxUlTop2;
  // alert()

   gundong2.css('top',dis2);
  liebiao2.css('top',ulTop2);
     return false;

});
// 点击后input的val发生变化
liebiao2.on('click','li',function () {

 $('#help #block .right li .text .select .input2 input').val($(this).html())
    
});
// 字变红
liebiao2.on('hover','li',function () {
   liebiao2.children().removeClass('active');
   $(this).addClass('active');
})

// 这里是font2

$('#font2  #dd #left li').hover(function () {
     
      $(this).css('color','#940b10')
    },function () {
       $(this).css('color','#fff')
     });
// 这里是浮动2

 $('#fix2 #ask li button').hover(function () {
    $('#fix2 #ask li button').removeClass('active');
    $(this).addClass('active')
 })

  
// 懒加载
$('img').css('display','none');
   lazeLoad ();
 
 $(window).scroll(lazeLoad);
 $(window).resize(lazeLoad);
 function lazeLoad () {
   
  var result = $(window).height() + $(document).scrollTop()+100;
  $('img').each(function (index,ele) {
    var top = $(ele).offset().top;
    if(top<=result) {
      $(ele).css('display','block');
    }
  })



 }





})