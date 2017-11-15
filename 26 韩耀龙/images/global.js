// JavaScript Document

//全局js
$(function(){
//start


//主导航设置
var h=0;
$(".nav_main .d p").each(function(index, element) {    
	if($(this).height()>h){
		h=$(this).height();
	}
	$(".nav_main").attr("h",h+52+2+30);
});
$(".nav_main .d p").height(h);
$(".nav_main").attr("h");
$(".nav_main .d:last").addClass("last");

//pc事件
if($(window).width()>=1003){

imgzoom(".market .block3 li");

//滚动条
$("html").niceScroll({
	cursorcolor:"#111",
	cursorborder:"none",
	cursorwidth:"8px",
	scrollspeed:80,
	background:"#aaa",
	cursoropacitymin:0,
	cursoropacitymax:0.7,
	enablekeyboard:false
});
$(".gotop").click(function(){
	$("html").animate({scrollTop:0},400+$(window).scrollTop()*0.3);
});
$(window).scroll(function(){
	if($(window).scrollTop()>100){$(".gotop").fadeIn();}
	else{$(".gotop").fadeOut();}
});

//主导航
$(".nav_main").hover(
	function(){
		$(this).stop(true,true).animate({height:$(this).attr("h")},400,"easeOutBack");
	},
	function(){
		$(this).stop().animate({height:52},300,"");
	}
);	
//浮动导航
$(".nav_float").css({marginTop:$(".nav_float").height()*-0.5});

//select1
$(".select1").toggle(
	function(event){
		event.stopPropagation();
		$(".select1").find("ul").hide();
		$(this).find("ul").slideDown();
	},
	function(event){
		event.stopPropagation();
		$(this).find("ul").slideUp();
	}
);
//全局点击事件
$(window).click(function(){
	$(".select1 ul").slideUp();
});
function navauto(){
	if($(window).width()<=1550){
		$(".nav_float").addClass("r");
	}
	else{
		$(".nav_float").removeClass("r");
	}		
}
//自适应
$(window).resize(function(){
	navauto();
});
navauto();
}
else{//手机

autoheight(".scene3 li",320,150);

$(".nav_m .nav li").bind("touchstart",function(event){
	if($(this).find("p").children().size()>0){
		$(".nav_m .nav li").height(38).removeClass("act");
		$(this).height($(this).find("p").outerHeight()+38+15).addClass("act");
	}
});
$("#header .menu").bind("touchstart",function(event){
	$(".nav_m").addClass("show");
});
$("#header2 .menu").bind("touchstart",function(event){
	$(".nav_m").addClass("show");
});
//全局点击事件
$(window).bind("touchstart",function(){
	$(".nav_m").removeClass("show");
	$(".nav_m .nav li").height(38).removeClass("act");
});

//停止派生
$("#header .menu").bind("touchstart",function(event){
	event.stopPropagation();
});
$("#header2 .menu").bind("touchstart",function(event){
	event.stopPropagation();
});
$(".nav_m").bind("touchstart",function(event){
	event.stopPropagation();
});

}

var idx=0;
$(".case_d a.free,.case_d a.order,.service .block2 .contact .btn,.shop_d .main5 .title .find,.index1 .btns .div:eq(2)").each(function(index, element) {
    if($(this).size()>0){
		var t=$(this);
		setTimeout(function(){
			setInterval(function(){
				if(t.attr("mt")==undefined){t.attr("mt",parseInt(t.css("margin-top")));}
				t.animate({marginTop:t.attr("mt")-10},200).animate({marginTop:t.attr("mt")},500,"easeOutBounce");
			},3000);			
		},idx*500);
		idx++;
	}
});
var idx=0;
$(".activity .buyBtn").each(function(index, element) {
    if($(this).size()>0){
		var t=$(this);
		setTimeout(function(){
			setInterval(function(){
				if(t.attr("ml")==undefined){t.attr("ml",parseInt(t.css("margin-left")));}
				t.animate({marginLeft:t.attr("ml")-10},100).animate({marginLeft:t.attr("ml")+5},100).animate({marginLeft:t.attr("ml")-2},100).animate({marginLeft:t.attr("ml")},200);
			},3000);			
		},idx*500);
		idx++;
	}
});
var idx=0;
$(".company .block1 .cont .btn:eq(0),.company .block1 .cont .btn:eq(1),.designer2 .main1 .text .top .a1,.designer2 .main1 .text .top .a2,.market .block2 .title .btn,.market .block3 .title .btn,.scene1 .title1 .more,.life .text .more,.exclusive .main1 .go").each(function(index, element) {
    if($(this).size()>0){
		var t=$(this);
		setTimeout(function(){
			setInterval(function(){
				t.animate({textIndent:-10},100).animate({textIndent:5},100).animate({textIndent:-2},100).animate({textIndent:0},200);
			},3000);			
		},idx*500);
		idx++;
	}
});
if($('.select1').size()>0){
	$('.select1').each(function(index, element) {
		$(this).find('ul').jScrollPane({"autoReinitialise":true});
		$(this).find('ul').hide();
	});
}


//end
});