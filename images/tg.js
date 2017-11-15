try {
    (function(a,b,c,d){
    a[c]=function(){a[c]['ar']=a[c]['ar']||[];a[c]['ar'].push(arguments);};
    var s=b.createElement('script');s.async = 1;s.src='//t.agrantsem.com/js/agt.js';
    var r=b.getElementsByTagName('script')[0];r.parentNode.insertBefore(s,r);
    })(window,document,'_agtjs','script');
    _agtjs('init','AG_755278_ITRW','$website$');
    _agtjs('trackPv');
    
    var agtGetTopUrl = function() {
        var win=window;
        var doc=document;
        var topwin=window.top || window.parent || window;
    
        var localUrl = "";
        try{
            localUrl=topwin.location.href;
        }catch(err){
            localUrl=doc.referrer || win.location.href;
        }
        return localUrl;
    };
    var agtTopUrl = agtGetTopUrl();
    
    var agtCheckString = function(regular, str) {
        var re = new RegExp(regular);
        return re.test(str);
    };
    
    var agtBindClick = function(element,fn){
        if(element.attachEvent){
            element.attachEvent('onclick',fn);
        }else if(element.addEventListener){
            element.addEventListener('click',fn);
        }
    };
    
    var agtBindEventByTimer = function(selector,fn){
        var interval=setInterval(function(){
            var elements=_agtjs.Sizzle(selector);
            if(elements && elements.length>0){
                clearInterval(interval);
                for(var i in elements){
                    agtBindClick(elements[i],fn);
                }
            }
        },1000);
    };
    
    function agt_207(){
        _agtjs('loadEvent',{atsev:207});
    }
    if (agtCheckString('www.qumei.com/index.php/renewal.html',agtTopUrl)) {
        // agtBindEventByTimer('$需要绑定的页面元素$',agt_207);
    }

    function agt_206(){
        _agtjs('loadEvent',{atsev:206});
    }
    if (agtCheckString('www.qumei.com/index.php/renewal.html',agtTopUrl)) {
        // agtBindEventByTimer('$需要绑定的页面元素$',agt_206);
    }

    function agt_101(){
		var account = "";
		if ($('.action-account-check')) {
			account = $('.action-account-check').val();
		}
        _agtjs('loadEvent',{atsev:101,'atsp1':account,'atsp2':'$email$','atsp3':'$手机号$'});
    }
    if (agtCheckString('www.qumei.com',agtTopUrl)) {
        agtBindEventByTimer('#qmlogin',agt_101);
    }
	if (agtCheckString('www.qumei.com/index.php/renewal.html',agtTopUrl)) {
		agtBindEventByTimer('.sure',agt_101);
    }

    function agt_201(){
        _agtjs('loadEvent',{atsev:201,'atsp1':'$url$'});
    }
    if (agtCheckString('www.qumei.com',agtTopUrl)) {
        agtBindEventByTimer('.talk99_region',agt_201);
    }

    function agt_200(){
        _agtjs('loadEvent',{atsev:200,'atsp1':'$用户名$','atsp2':'$商品名称$','atsp3':'$金额$','atsp4':'$IP$'});
    }
    if (agtCheckString('www.qumei.com/index.php/product',agtTopUrl)) {
        // agtBindEventByTimer('$需要绑定的页面元素$',agt_200);
    }

    function agt_208(){
        _agtjs('loadEvent',{atsev:208,'atsp1':'$手机号$','atsp2':'$地域$','atsp3':'$称谓$'});
    }
    if (agtCheckString('www.qumei.com/index.php/renewal.html',agtTopUrl)) {
        // agtBindEventByTimer('$需要绑定的页面元素$',agt_208);
    }

    function agt_209(){
        _agtjs('loadEvent',{atsev:209});
    }
    if (agtCheckString('www.qumei.com/index.php/renewal.html',agtTopUrl)) {
        // agtBindEventByTimer('$需要绑定的页面元素$',agt_209);
    }

    function agt_104(){
        _agtjs('loadEvent',{atsev:104,'atsp1':'$用户名$','atsp2':'$商品名称$','atsp3':'$金额$','atsp4':'$IP$'});
    }
    if (agtCheckString('www.qumei.com/index.php/product',agtTopUrl)) {
        // agtBindEventByTimer('$需要绑定的页面元素$',agt_104);
    }



} catch (err) {
    console.log('err:' + err);
}
