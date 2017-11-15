// JavaScript Document
$(function(){
	$('.dowlist .dowli').hover(function(){
		$(this).find('.title').find('a').css({color:'#b61f24',});
		$(this).find('.date').css({color:'#b61f24',});
	},function(){
		$(this).find('.title').find('a').css({color:'#707070',});
		$(this).find('.date').css({color:'#707070',});
	});	
	
	$('#header_select').click(function(){
		$(this).find('ul').stop().slideDown(500);	
	});
	$('#header_select').mouseleave(function(){
		$(this).find('ul').stop().slideUp(500);	
	});
	
	$('#header_select ul li').click(function(e){
		e.stopPropagation();
		var text = $(this).text();	
		$(this).parent('ul').prev('input').val(text);
		$(this).parent('ul').stop().slideUp(500);
	});
	$('.links a.jqs_login').click(function(){
		$('.meng').show();
		$('.myalert').show();
	});
	
	$('.myalert .close').eq(0).click(function(){
		$('.meng').hide();
		$(this).parent().hide();
	});
})