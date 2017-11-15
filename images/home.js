var isIphone = navigator.userAgent.match(/(iPhone\sOS)\s([\d_]+)/),
	isAndroid = navigator.userAgent.match(/(Android)\s+([\d.]+)/),
	isMobile = isIphone || isAndroid;
if ( isMobile ) {
    location.href = '/index.php/wap/index.html';
}
