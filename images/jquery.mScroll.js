/*
基于scrollLeft和scrollTop
根据minsize计算child宽度和滚动距离
支持count,title,index
支持自适应
支持jquery.easing

<style>
body{margin:0;}
a{text-decoration:none;color:#333;}
.focus{width:213px;position:relative;margin:auto;}
.focus .prev{position:absolute;left:-20px;top:50%;font-weight:bold;}
.focus .next{position:absolute;right:-20px;top:50%;font-weight:bold;}
.focus .prevg{position:absolute;left:-50px;top:50%;font-weight:bold;}
.focus .nextg{position:absolute;right:-50px;top:50%;font-weight:bold;}
.focus .start{position:absolute;left:-100px;top:50%;font-weight:bold;}
.focus .end{position:absolute;right:-100px;top:50%;font-weight:bold;}
.frame{width:213px;overflow:hidden;}
.frame .child{float:left;}
.nav{width:200px;overflow:hidden;margin:auto;}
.nav .child{float:left;}
.nav .now{opacity:0.5;}
</style>
<div class="focus">
  <div class="frame">
    <div class="child"><img src="image/pic1.jpg" width="213" height="189" /></div>
    <div class="child"><img src="image/pic1.jpg" width="213" height="189" /></div>
    <div class="child"><img src="image/pic1.jpg" width="213" height="189" /></div>
    <div class="child"><img src="image/pic1.jpg" width="213" height="189" /></div>
    <div class="child"><img src="image/pic1.jpg" width="213" height="189" /></div>
    <div class="child"><img src="image/pic1.jpg" width="213" height="189" /></div>
  </div>
  <div class="nav">
    <a href="javascript:;" class="child"><img src="image/pic1.jpg" width="50" /></a>
    <a href="javascript:;" class="child"><img src="image/pic1.jpg" width="50" /></a>
    <a href="javascript:;" class="child"><img src="image/pic1.jpg" width="50" /></a>
    <a href="javascript:;" class="child"><img src="image/pic1.jpg" width="50" /></a>
    <a href="javascript:;" class="child"><img src="image/pic1.jpg" width="50" /></a>
    <a href="javascript:;" class="child"><img src="image/pic1.jpg" width="50" /></a>
  </div>
  <a href="javascript:;" class="prev">&lt;</a>
  <a href="javascript:;" class="next">&gt;</a>
</div>
*/

(function($) {
	$.fn.mScroll = function(options) {
		var opts = $.extend({},$.fn.mScroll.defaults,options); 
		this.each(function(){
			//初始化
			var f,s,c,n,np,ns,w,ww,h,hh,w1,h1,size,iv,ti,sw=1,idx=0;
			f = $(this);
			
			if(f.children().is("ul")){
				f.children().addClass("scroll");
			}
			else{
				f.children().wrapAll("<div class='scroll' style='height:100%;'></div>");
			}
			s = f.find(".scroll");
			
			size=s.children().size();
			$(opts.count).text(size);
			
			if(opts.cycle==1){s.append(s.html());}
			c = s.children();
			
			n = $(opts.nav);
			if(opts.scrollnav){
				w1 = n.outerWidth()+(parseInt(n.css("margin-left"))?parseInt(n.css("margin-left")):0)+(parseInt(n.css("margin-right"))?parseInt(n.css("margin-right")):0);
				h1 = n.outerHeight()+(parseInt(n.css("margin-top"))?parseInt(n.css("margin-top")):0)+(parseInt(n.css("margin-bottom"))?parseInt(n.css("margin-bottom")):0);
				np= $(opts.nav).parent();
				n.wrapAll("<div class='scroll' style='height:100%;'></div>");
				ns=np.find(".scroll");
				ns.width(n.size()*w1);
				np.stop().animate({scrollLeft:0},100);
			}
			n.eq(0).addClass("now");
			
			
			
			//f.width(w*opts.minsize);
			if(opts.direction=="h"){
				if(parseInt(c.eq(1).css("margin-left"))+parseInt(c.eq(1).css("margin-right"))+parseInt(c.eq(1).css("padding-left"))+parseInt(c.eq(1).css("padding-right"))==0){
					w = parseInt(f.width()/opts.minsize);
					c.css({width:w});
				}
				else{
					
					w = c.width()+parseInt(c.eq(1).css("margin-left"))+parseInt(c.eq(1).css("margin-right"))+parseInt(c.eq(1).css("padding-left"))+parseInt(c.eq(1).css("padding-right"));
				}
				s.css({width:100000});
				ww=c.size()*w;
				hh=c.size()*h;
				f.stop().animate({scrollLeft:0},100);
			}
			if(opts.direction=="v"){
				if(parseInt(c.eq(1).css("margin-top"))+parseInt(c.eq(1).css("margin-bottom"))+parseInt(c.eq(1).css("padding-top"))+parseInt(c.eq(1).css("padding-bottom"))==0){					
					h = parseInt(f.height()/opts.minsize);
					c.css({height:h});
				}
				else{
					h =c.height()+parseInt(c.eq(1).css("margin-top"))+parseInt(c.eq(1).css("margin-bottom"))+parseInt(c.eq(1).css("padding-top"))+parseInt(c.eq(1).css("padding-bottom"));
				}
				s.height(100000);
				ww=c.size()*h;
				hh=c.size()*h;
				f.stop().animate({scrollTop:0},100);
			}
			
			if(opts.cycle==0){opts.auto=0;}
			$(opts.title).text(c.eq(0).attr("alt"));
			
			if(opts.isfocus){
				$(window).resize(function(){rs();});
				rs();
				setTimeout(function(){rs();},300);
			}
			if(opts.auto==1){
				iv = window.setInterval(function(){move(opts.dtype);},opts.delay);
			}
			
			function rs(){
				sw==0;
				clearTimeout(ti);
				if(opts.direction=="h"){
					if(parseInt(c.eq(1).css("margin-left"))+parseInt(c.eq(1).css("margin-right"))+parseInt(c.eq(1).css("padding-left"))+parseInt(c.eq(1).css("padding-right"))==0){
						c.css({width:w});
						w=parseInt(f.width()/opts.minsize);
					}
					else{
						w=c.width()+parseInt(c.eq(1).css("margin-left"))+parseInt(c.eq(1).css("margin-right"))+parseInt(c.eq(1).css("padding-left"))+parseInt(c.eq(1).css("padding-right"));						
					}
					
				}
				if(opts.direction=="v"){
					if(parseInt(c.eq(1).css("margin-top"))+parseInt(c.eq(1).css("margin-bottom"))+parseInt(c.eq(1).css("padding-top"))+parseInt(c.eq(1).css("padding-bottom"))==0){
						c.css({height:h});
						h=parseInt(f.height()/opts.minsize);
					}
					else{
						h=parseInt(f.height()/opts.minsize)+parseInt(c.eq(1).css("margin-top"))+parseInt(c.eq(1).css("margin-bottom"))+parseInt(c.eq(1).css("padding-top"))+parseInt(c.eq(1).css("padding-bottom"));
					}
					
				}
				ww=c.size()*w;
				hh=c.size()*h;
				if(opts.direction=="h"){f.scrollLeft(idx*w);}
				if(opts.direction=="v"){f.scrollTop(idx*h);}
				ti=setTimeout(function(){
					sw==1;
				},500);
			}
			
			function move(act){
				if(sw==1){
					sw=0;
					if(opts.direction=="h"){
						if(act=="left"){
							if(opts.cycle!=1){
								if(idx+opts.minsize<size){
									idx++;
									f.animate({scrollLeft:f.scrollLeft()+w},opts.speed,opts.easing,function(){sw=1;});
								}
							}
							if(opts.cycle==1){	
								if(f.scrollLeft()+1>=ww*0.5){f.scrollLeft(0);}							
								if(idx+opts.minsize==size){idx=0;}
								else{idx++;}
								f.animate({scrollLeft:f.scrollLeft()+w},opts.speed,opts.easing,function(){sw=1;});
							}							
						}
						if(act=="right"){
							if(opts.cycle!=1){
								if(idx>0){
									idx--;
									f.animate({scrollLeft:f.scrollLeft()-w},opts.speed,opts.easing,function(){sw=1;});
								}
							}
							if(opts.cycle==1){	
								if(f.scrollLeft()<=0 && opts.cycle==1){f.scrollLeft(ww*0.5);}							
								if(idx==0){idx=size-1;}
								else{idx--;}
								f.animate({scrollLeft:f.scrollLeft()-w},opts.speed,opts.easing,function(){sw=1;});
							}
						}						
					}
					if(opts.direction=="v"){
						if(act=="left"){
							if(opts.cycle!=1){
								if(idx+opts.minsize<size){
									if(opts)idx++;
									f.animate({scrollTop:f.scrollTop()+h},opts.speed,opts.easing,function(){sw=1;});
								}
							}
							if(opts.cycle==1){	
								if(f.scrollTop()+1>=hh*0.5){f.scrollTop(0);}
								if(idx==size-1){idx=0;}
								else{idx++;}
								f.animate({scrollTop:f.scrollTop()+h},opts.speed,opts.easing,function(){sw=1;});
							}	
						}
						if(act=="right"){
							if(opts.cycle!=1){
								if(idx>0){
									idx--;
									f.animate({scrollTop:f.scrollTop()-h},opts.speed,opts.easing,function(){sw=1;});
								}
							}
							if(opts.cycle==1){	
								if(f.scrollTop()<=0 && opts.cycle==1){f.scrollTop(hh*0.5);}							
								if(idx==0){idx=size-1;}
								else{idx--;}
								f.animate({scrollTop:f.scrollTop()-h},opts.speed,opts.easing,function(){sw=1;});
							}
						}
					}
					n.removeClass("now");
					n.eq(idx).addClass("now");
					$(opts.title).text(c.eq(idx).attr("alt"));
					if(opts.scrollnav){autonav();}
				}
			}
			
			if(opts.prev){
				$(opts.prev).hover(function(){sw=1;});
				$(opts.prev).click(function(){
					if(opts.arrow==1){move("right");}
					else{move("left");}
				});
				
			}
			if(opts.next){
				$(opts.next).hover(function(){sw=1;});
				$(opts.next).click(function(){
					if(opts.arrow==1){move("left");}
					else{move("right");}
				});
			}
			
			//导航溢出部分滑动显示
			function autonav(){
				/*if(opts.direction=="h"){
					if(idx*w1==np.scrollLeft()){
						np.animate({scrollLeft:np.scrollLeft()-w1});
					}
					if(idx*w1==np.scrollLeft()+np.width()-w1){
						np.animate({scrollLeft:np.scrollLeft()+w1});
					}
				}
				if(opts.direction=="v"){
					if(idx*h1==np.scrollTop()){
						np.animate({scrollTop:np.scrollTop()-h1});
					}
					if(idx*h1==np.scrollTop()+np.height()-h1){
						np.animate({scrollTop:np.scrollTop()+h1});
					}
				}*/
				np.animate({scrollLeft:idx*w1});
			}
			
			n.each(function(index, element) {
				$(this).click(function(){
					if(opts.direction=="h"){f.stop().animate({scrollLeft:index*w},opts.speed,opts.easing,function(){sw=1;});}
					if(opts.direction=="v"){f.stop().animate({scrollTop:index*h},opts.speed,opts.easing,function(){sw=1;});}
					idx=index;
					n.removeClass("now");
					n.eq(idx).addClass("now");
					if(opts.scrollnav){autonav();}
					$(opts.title).text(c.eq(idx).attr("alt"));
					if(opts.auto){
						clearInterval(iv);
						iv = window.setInterval(function(){move(opts.dtype);},opts.delay);
					}						
				});
			});
			
			if(opts.mousewheel){
				f.mousewheel(function(event,delta,deltaX,deltaY){
					if(delta<0){
						if(opts.arrow==1){move("left");}
						else{move("right");}
					}
					else{
						if(opts.arrow==1){move("right");}
						else{move("left");}
					}
					event.stopPropagation();
					event.preventDefault();
				});
			}
			
			if(opts.mousestop && !opts.mousewheel){
				f.hover(function(){sw=0},function(){sw=1});
			}		
		})
	};
	$.fn.mScroll.defaults = {
		     auto : 1,             //自动开始
		direction : "h",           //h横向,v纵向
		    dtype : "left",             //正反方向
		  isfocus : 0,             //是否作为焦点图
		  minsize : 1,             //最小数量
		    speed : 800,           //滚动速度
		   easing : "jswing",            //渐变缓冲类型
			delay : 5000,          //自动滚动延迟
			  nav : null,          //导航
        scrollnav : 0,             //导航滚动
			 prev : null,          //前一个按钮
			 next : null,          //后一个按钮
		    index : null,          //当前序号
			count : null,          //总数
			title : null,          //标题
			arrow : 1,             //是否反转
			cycle : 1,             //是否循环
		mousestop : 1,             //是否鼠标划入停止
	   mousewheel : 0              //是否开启滚轮事件
	}
})(jQuery);
/*
$().mScroll({
		     auto : 1,             //自动开始
		direction : "h",           //h横向,v纵向
		    dtype : "left",        //正反方向
		  isfocus : 0,             //是否作为焦点图
		  minsize : 1,             //最小数量
		    speed : 800,           //滚动速度
		   easing : "",            //渐变缓冲类型
			delay : 5000,          //自动滚动延迟
			  nav : null,          //导航
        scrollnav : 0,             //导航滚动
			 prev : null,          //前一个按钮
			 next : null,          //后一个按钮
		    index : null,          //当前序号
			count : null,          //总数
			title : null,          //标题
			arrow : 1,             //是否反转
			cycle : 1,             //是否循环
		mousestop : 1,             //是否鼠标划入停止
	   mousewheel : 0              //是否开启滚轮事件
});
*/