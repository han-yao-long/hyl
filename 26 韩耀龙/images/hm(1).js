(function(){var h={},mt={},c={id:"e905e3609d6521fd1aa2782b670d7711",dm:["qumei.com"],js:"tongji.baidu.com/hm-web/js/",etrk:[{id:"fastbuy",eventType:"onclick"}],icon:'',ctrk:true,align:1,nv:-1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:0,vcard:0,qiao:0,lxb:0,conv:0,med:0,cvcc:'',cvcf:[],apps:''};var q=void 0,r=!0,s=null,t=!1;mt.i={};mt.i.aa=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.i.Na=/msie (\d+\.\d+)/i.test(navigator.userAgent)?document.documentMode||+RegExp.$1:q;mt.i.cookieEnabled=navigator.cookieEnabled;mt.i.javaEnabled=navigator.javaEnabled();mt.i.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.i.Qa=(window.screen.width||0)+"x"+(window.screen.height||0);mt.i.colorDepth=window.screen.colorDepth||0;mt.cookie={};
mt.cookie.set=function(a,b,e){var d;e.L&&(d=new Date,d.setTime(d.getTime()+e.L));document.cookie=a+"="+b+(e.domain?"; domain="+e.domain:"")+(e.path?"; path="+e.path:"")+(d?"; expires="+d.toGMTString():"")+(e.gb?"; secure":"")};mt.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:s};mt.m={};mt.m.M=function(a){return document.getElementById(a)};mt.m.za=function(a){var b;for(b="A";(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==b)return a;return s};
(mt.m.S=function(){function a(){if(!a.C){a.C=r;for(var b=0,g=d.length;b<g;b++)d[b]()}}function b(){try{document.documentElement.doScroll("left")}catch(d){setTimeout(b,1);return}a()}var e=t,d=[],g;document.addEventListener?g=function(){document.removeEventListener("DOMContentLoaded",g,t);a()}:document.attachEvent&&(g=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",g),a())});(function(){if(!e)if(e=r,"complete"===document.readyState)a.C=r;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",
g,t),window.addEventListener("load",a,t);else if(document.attachEvent){document.attachEvent("onreadystatechange",g);window.attachEvent("onload",a);var d=t;try{d=window.frameElement==s}catch(l){}document.documentElement.doScroll&&d&&b()}})();return function(b){a.C?b():d.push(b)}}()).C=t;mt.event={};mt.event.c=function(a,b,e){a.attachEvent?a.attachEvent("on"+b,function(d){e.call(a,d)}):a.addEventListener&&a.addEventListener(b,e,t)};
mt.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=t};mt.k={};mt.k.parse=function(){return(new Function('return (" + source + ")'))()};
mt.k.stringify=function(){function a(d){/["\\\x00-\x1f]/.test(d)&&(d=d.replace(/["\\\x00-\x1f]/g,function(d){var a=e[d];if(a)return a;a=d.charCodeAt();return"\\u00"+Math.floor(a/16).toString(16)+(a%16).toString(16)}));return'"'+d+'"'}function b(d){return 10>d?"0"+d:d}var e={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(d){switch(typeof d){case "undefined":return"undefined";case "number":return isFinite(d)?String(d):"null";case "string":return a(d);case "boolean":return String(d);
default:if(d===s)return"null";if(d instanceof Array){var g=["["],e=d.length,l,p,f;for(p=0;p<e;p++)switch(f=d[p],typeof f){case "undefined":case "function":case "unknown":break;default:l&&g.push(","),g.push(mt.k.stringify(f)),l=1}g.push("]");return g.join("")}if(d instanceof Date)return'"'+d.getFullYear()+"-"+b(d.getMonth()+1)+"-"+b(d.getDate())+"T"+b(d.getHours())+":"+b(d.getMinutes())+":"+b(d.getSeconds())+'"';l=["{"];p=mt.k.stringify;for(e in d)if(Object.prototype.hasOwnProperty.call(d,e))switch(f=
d[e],typeof f){case "undefined":case "unknown":case "function":break;default:g&&l.push(","),g=1,l.push(p(e)+":"+p(f))}l.push("}");return l.join("")}}}();mt.lang={};mt.lang.d=function(a,b){return"[object "+b+"]"==={}.toString.call(a)};mt.lang.cb=function(a){return mt.lang.d(a,"Number")&&isFinite(a)};mt.lang.fb=function(a){return mt.lang.d(a,"String")};mt.localStorage={};
mt.localStorage.I=function(){if(!mt.localStorage.h)try{mt.localStorage.h=document.createElement("input"),mt.localStorage.h.type="hidden",mt.localStorage.h.style.display="none",mt.localStorage.h.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.h)}catch(a){return t}return r};
mt.localStorage.set=function(a,b,e){var d=new Date;d.setTime(d.getTime()+e||31536E6);try{window.localStorage?(b=d.getTime()+"|"+b,window.localStorage.setItem(a,b)):mt.localStorage.I()&&(mt.localStorage.h.expires=d.toUTCString(),mt.localStorage.h.load(document.location.hostname),mt.localStorage.h.setAttribute(a,b),mt.localStorage.h.save(document.location.hostname))}catch(g){}};
mt.localStorage.get=function(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var b=a.indexOf("|"),e=a.substring(0,b)-0;if(e&&e>(new Date).getTime())return a.substring(b+1)}}else if(mt.localStorage.I())try{return mt.localStorage.h.load(document.location.hostname),mt.localStorage.h.getAttribute(a)}catch(d){}return s};
mt.localStorage.remove=function(a){if(window.localStorage)window.localStorage.removeItem(a);else if(mt.localStorage.I())try{mt.localStorage.h.load(document.location.hostname),mt.localStorage.h.removeAttribute(a),mt.localStorage.h.save(document.location.hostname)}catch(b){}};mt.sessionStorage={};mt.sessionStorage.set=function(a,b){if(window.sessionStorage)try{window.sessionStorage.setItem(a,b)}catch(e){}};
mt.sessionStorage.get=function(a){return window.sessionStorage?window.sessionStorage.getItem(a):s};mt.sessionStorage.remove=function(a){window.sessionStorage&&window.sessionStorage.removeItem(a)};mt.ea={};mt.ea.log=function(a,b){var e=new Image,d="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[d]=e;e.onload=e.onerror=e.onabort=function(){e.onload=e.onerror=e.onabort=s;e=window[d]=s;b&&b(a)};e.src=a};mt.H={};
mt.H.Fa=function(){var a="";if(navigator.plugins&&navigator.mimeTypes.length){var b=navigator.plugins["Shockwave Flash"];b&&b.description&&(a=b.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a=b.GetVariable("$version"))&&(a=a.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(e){}return a};
mt.H.sa=function(a,b,e,d,g){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+a+'" width="'+e+'" height="'+d+'"><param name="movie" value="'+b+'" /><param name="flashvars" value="'+(g||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+a+'" width="'+e+'" height="'+d+'" src="'+b+'" flashvars="'+(g||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.f=function(a,b){var e=a.match(RegExp("(^|&|\\?|#)("+b+")=([^&#]*)(&|$|#)",""));return e?e[3]:s};mt.url.bb=function(a){return(a=a.match(/^(https?:)\/\//))?a[1]:s};mt.url.Ca=function(a){return(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):s};mt.url.Z=function(a){return(a=mt.url.Ca(a))?a.replace(/:\d+$/,""):a};mt.url.ab=function(a){return(a=a.match(/^(https?:\/\/)?[^\/]*(.*)/))?a[2].replace(/[\?#].*/,"").replace(/^$/,"/"):s};
(function(){function a(){for(var a=t,e=document.getElementsByTagName("script"),d=e.length,d=100<d?100:d,g=0;g<d;g++){var m=e[g].src;if(m&&0===m.indexOf("https://hm.baidu.com/h")){a=r;break}}return a}return h.ya=a})();var y=h.ya;
h.j={Ma:"http://tongji.baidu.com/hm-web/welcome/ico",R:"hm.baidu.com/hm.gif",la:"baidu.com",Ja:"hmmd",Ka:"hmpl",Ya:"utm_medium",Ia:"hmkw",$a:"utm_term",Ga:"hmci",Xa:"utm_content",La:"hmsr",Za:"utm_source",Ha:"hmcu",Wa:"utm_campaign",w:0,l:Math.round(+new Date/1E3),W:Math.round(+new Date/1E3)%65535,protocol:"https:"===document.location.protocol?"https:":"http:",D:y()||"https:"===document.location.protocol?"https:":"http:",eb:0,qa:6E5,ra:10,V:1024,pa:1,s:2147483647,fa:"cc cf ci ck cl cm cp cu cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api sn ct u tt".split(" ")};
(function(){var a={r:{},c:function(a,e){this.r[a]=this.r[a]||[];this.r[a].push(e)},A:function(a,e){this.r[a]=this.r[a]||[];for(var d=this.r[a].length,g=0;g<d;g++)this.r[a][g](e)}};return h.o=a})();
(function(){function a(a,d){var g=document.createElement("script");g.charset="utf-8";b.d(d,"Function")&&(g.readyState?g.onreadystatechange=function(){if("loaded"===g.readyState||"complete"===g.readyState)g.onreadystatechange=s,d()}:g.onload=function(){d()});g.src=a;var m=document.getElementsByTagName("script")[0];m.parentNode.insertBefore(g,m)}var b=mt.lang;return h.load=a})();
(function(){function a(){var a="";h.b.a.nv?(a=encodeURIComponent(document.referrer),window.sessionStorage?e.set("Hm_from_"+c.id,a):b.set("Hm_from_"+c.id,a,864E5)):a=(window.sessionStorage?e.get("Hm_from_"+c.id):b.get("Hm_from_"+c.id))||"";return a}var b=mt.localStorage,e=mt.sessionStorage;return h.X=a})();
(function(){var a=h.j,b=mt.H,e={init:function(){if(""!==c.icon){var d;d=c.icon.split("|");var g=a.Ma+"?s="+c.id,e=("http:"==a.protocol?"http://eiv":"https://bs")+".baidu.com"+d[0]+"."+d[1];switch(d[1]){case "swf":d=b.sa("HolmesIcon"+a.l,e,d[2],d[3],"s="+g);break;case "gif":d='<a href="'+g+'" target="_blank"><img border="0" src="'+e+'" width="'+d[2]+'" height="'+d[3]+'"></a>';break;default:d='<a href="'+g+'" target="_blank">'+d[0]+"</a>"}document.write(d)}}};h.o.c("pv-b",e.init);return e})();
(function(){var a=mt.m,b=mt.event,e={ha:function(){b.c(document,"click",e.va());for(var d=c.etrk.length,g=0;g<d;g++){var m=c.etrk[g],l=a.M(decodeURIComponent(m.id));l&&b.c(l,m.eventType,e.K())}},K:function(){return function(a){(a.target||a.srcElement).setAttribute("HM_fix",a.clientX+":"+a.clientY);h.b.a.et=1;h.b.a.ep="{id:"+this.id+",eventType:"+a.type+"}";h.b.g()}},va:function(){return function(a){var b=a.target||a.srcElement;if(b){var e=b.getAttribute("HM_fix"),l=a.clientX+":"+a.clientY;if(e&&e==
l)b.removeAttribute("HM_fix");else if(e=c.etrk.length,0<e){for(l={};b&&b!=document.body;)b.id&&(l[b.id]=""),b=b.parentNode;for(b=0;b<e;b++){var p=decodeURIComponent(c.etrk[b].id);l.hasOwnProperty(p)&&(h.b.a.et=1,h.b.a.ep="{id:"+p+",eventType:"+a.type+"}",h.b.g())}}}}}};h.o.c("pv-b",e.ha);return e})();
(function(){var a=mt.m,b=mt.event,e=mt.i,d=h.j,g=[],m={ga:function(){c.ctrk&&(b.c(document,"mouseup",m.oa()),b.c(window,"unload",function(){m.F()}),setInterval(function(){m.F()},d.qa))},oa:function(){return function(a){a=m.Aa(a);if(""!==a){var b=(d.D+"//"+d.R+"?"+h.b.da().replace(/ep=[^&]*/,"ep="+encodeURIComponent("["+a+"]"))).length;b+(d.s+"").length>d.V||(b+encodeURIComponent(g.join(",")+(g.length?",":"")).length+(d.s+"").length>d.V&&m.F(),g.push(a),(g.length>=d.ra||/t:a/.test(a))&&m.F())}}},Aa:function(b){if(0===
d.pa){var g=b.target||b.srcElement,f=g.tagName.toLowerCase();if("embed"==f||"object"==f)return""}e.aa?(g=Math.max(document.documentElement.scrollTop,document.body.scrollTop),f=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),f=b.clientX+f,g=b.clientY+g):(f=b.pageX,g=b.pageY);var k=window.innerWidth||document.documentElement.clientWidth||document.body.offsetWidth;switch(c.align){case 1:f-=k/2;break;case 2:f-=k}f="{x:"+f+",y:"+g+",";g=b.target||b.srcElement;return f=(b="a"==g.tagName.toLowerCase()?
g:a.za(g))?f+("t:a,u:"+encodeURIComponent(b.href)+"}"):f+"t:b}"},F:function(){0!==g.length&&(h.b.a.et=2,h.b.a.ep="["+g.join(",")+"]",h.b.g(),g=[])}};h.o.c("pv-b",m.ga);return m})();
(function(){var a=mt.m,b=h.j,e=h.load,d=h.X;h.o.c("pv-b",function(){var g=b.protocol+"//crs.baidu.com/";c.rec&&a.S(function(){for(var m=0,l=c.rp.length;m<l;m++){var p=c.rp[m][0],f=c.rp[m][1],k=a.M("hm_t_"+p);if(f&&!(2==f&&!k||k&&""!==k.innerHTML))k="",k=Math.round(Math.random()*b.s),k=4==f?g+"hl.js?"+["siteId="+c.id,"planId="+p,"rnd="+k].join("&"):g+"t.js?"+["siteId="+c.id,"planId="+p,"from="+d(),"referer="+encodeURIComponent(document.referrer),"title="+encodeURIComponent(document.title),"rnd="+k].join("&"),
e(k)}})})})();(function(){var a=h.j,b=h.load,e=h.X;h.o.c("pv-b",function(){if(c.trust&&c.vcard){var d="https://tag.baidu.com/vcard/v.js?"+["siteid="+c.vcard,"url="+encodeURIComponent(document.location.href),"source="+e(),"rnd="+Math.round(Math.random()*a.s),"hm=1"].join("&");b(d)}})})();
(function(){function a(){return function(){h.b.a.nv=0;h.b.a.st=4;h.b.a.et=3;h.b.a.ep=h.J.Da()+","+h.J.Ba();h.b.g()}}function b(){clearTimeout(B);var a;w&&(a="visible"==document[w]);C&&(a=!document[C]);p="undefined"==typeof a?r:a;if((!l||!f)&&p&&k)x=r,n=+new Date;else if(l&&f&&(!p||!k))x=t,u+=+new Date-n;l=p;f=k;B=setTimeout(b,100)}function e(k){var a=document,n="";if(k in a)n=k;else for(var b=["webkit","ms","moz","o"],d=0;d<b.length;d++){var e=b[d]+k.charAt(0).toUpperCase()+k.slice(1);if(e in a){n=
e;break}}return n}function d(a){if(!("focus"==a.type||"blur"==a.type)||!(a.target&&a.target!=window))k="focus"==a.type||"focusin"==a.type?r:t,b()}var g=mt.event,m=h.o,l=r,p=r,f=r,k=r,v=+new Date,n=v,u=0,x=r,w=e("visibilityState"),C=e("hidden"),B;b();(function(){var k=w.replace(/[vV]isibilityState/,"visibilitychange");g.c(document,k,b);g.c(window,"pageshow",b);g.c(window,"pagehide",b);"object"==typeof document.onfocusin?(g.c(document,"focusin",d),g.c(document,"focusout",d)):(g.c(window,"focus",d),
g.c(window,"blur",d))})();h.J={Da:function(){return+new Date-v},Ba:function(){return x?+new Date-n+u:u}};m.c("pv-b",function(){g.c(window,"unload",a())});return h.J})();
(function(){var a=mt.lang,b=h.j,e=h.load,d={Oa:function(d){if((window._dxt===q||a.d(window._dxt,"Array"))&&"undefined"!==typeof h.b){var m=h.b.N();e([b.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(m)].join(""),d)}},Va:function(b){if(a.d(b,"String")||a.d(b,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",b])}};return h.ta=d})();
(function(){function a(k,a,n,b){if(!(k===q||a===q||b===q)){if(""===k)return[a,n,b].join("*");k=String(k).split("!");for(var d,e=t,f=0;f<k.length;f++)if(d=k[f].split("*"),String(a)===d[0]){d[1]=n;d[2]=b;k[f]=d.join("*");e=r;break}e||k.push([a,n,b].join("*"));return k.join("!")}}function b(k){for(var a in k)if({}.hasOwnProperty.call(k,a)){var n=k[a];d.d(n,"Object")||d.d(n,"Array")?b(n):k[a]=String(n)}}function e(a){return a.replace?a.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):a}var d=
mt.lang,g=mt.k,m=h.j,l=h.o,p=h.ta,f={z:[],G:0,ba:t,p:{U:"",page:""},init:function(){f.e=0;l.c("pv-b",function(){f.ua();f.wa()});l.c("pv-d",function(){f.xa();f.p.page=""});l.c("stag-b",function(){h.b.a.api=f.e||f.G?f.e+"_"+f.G:"";h.b.a.ct=[decodeURIComponent(h.b.getData("Hm_ct_"+c.id)||""),f.p.U,f.p.page].join("!")});l.c("stag-d",function(){h.b.a.api=0;f.e=0;f.G=0})},ua:function(){var a=window._hmt||[];if(!a||d.d(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,k=0;k<arguments.length;k++){var b=
arguments[k];d.d(b,"Array")&&(a.cmd[a.id].push(b),"_setAccount"===b[0]&&(1<b.length&&/^[0-9a-f]{32}$/.test(b[1]))&&(b=b[1],a.id=b,a.cmd[b]=a.cmd[b]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},wa:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var b=a.cmd[c.id],n=/^_track(Event|MobConv|Order|RTEvent)$/,d=0,e=b.length;d<e;d++){var g=b[d];n.test(g[0])?f.z.push(g):f.Q(g)}a.cmd[c.id]={push:f.Q}},xa:function(){if(0<f.z.length)for(var a=0,b=f.z.length;a<b;a++)f.Q(f.z[a]);
f.z=s},Q:function(a){var b=a[0];if(f.hasOwnProperty(b)&&d.d(f[b],"Function"))f[b](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(f.e|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],t===a||r===a))f.e|=2,h.b.$=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){f.e|=4;h.b.a.et=0;h.b.a.ep="";h.b.O?(h.b.a.nv=0,h.b.a.st=4):h.b.O=r;var b=h.b.a.u,n=h.b.a.su;h.b.a.u=m.protocol+"//"+document.location.host+a[1];f.ba||(h.b.a.su=document.location.href);
h.b.g();h.b.a.u=b;h.b.a.su=n}},_trackEvent:function(a){2<a.length&&(f.e|=8,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=4,h.b.a.ep=e(a[1])+"*"+e(a[2])+(a[3]?"*"+e(a[3]):"")+(a[4]?"*"+e(a[4]):""),h.b.g())},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],n=a[4]||3;if(0<b&&6>b&&0<n&&4>n){f.G++;for(var d=(h.b.a.cv||"*").split("!"),g=d.length;g<b-1;g++)d.push("*");d[b-1]=n+"*"+e(a[2])+"*"+e(a[3]);h.b.a.cv=d.join("!");a=h.b.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==a?h.b.setData("Hm_cv_"+
c.id,encodeURIComponent(a),c.age):h.b.Pa("Hm_cv_"+c.id)}}},_setUserTag:function(b){if(!(3>b.length)){var d=e(b[1]);b=e(b[2]);if(d!==q&&b!==q){var n=decodeURIComponent(h.b.getData("Hm_ct_"+c.id)||""),n=a(n,d,1,b);h.b.setData("Hm_ct_"+c.id,encodeURIComponent(n),c.age)}}},_setVisitTag:function(b){if(!(3>b.length)){var d=e(b[1]);b=e(b[2]);if(d!==q&&b!==q){var n=f.p.U,n=a(n,d,2,b);f.p.U=n}}},_setPageTag:function(b){if(!(3>b.length)){var d=e(b[1]);b=e(b[2]);if(d!==q&&b!==q){var n=f.p.page,n=a(n,d,3,b);
f.p.page=n}}},_setReferrerOverride:function(a){1<a.length&&(h.b.a.su=a[1].charAt&&"/"===a[1].charAt(0)?m.protocol+"//"+window.location.host+a[1]:a[1],f.ba=r)},_trackOrder:function(a){a=a[1];d.d(a,"Object")&&(b(a),f.e|=16,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=94,h.b.a.ep=g.stringify(a),h.b.g())},_trackMobConv:function(a){if(a={webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])f.e|=32,h.b.a.et=93,h.b.a.ep=a,h.b.g()},_trackRTPageview:function(a){a=a[1];d.d(a,"Object")&&(b(a),a=g.stringify(a),512>=encodeURIComponent(a).length&&
(f.e|=64,h.b.a.rt=a))},_trackRTEvent:function(a){a=a[1];if(d.d(a,"Object")){b(a);a=encodeURIComponent(g.stringify(a));var e=function(a){var b=h.b.a.rt;f.e|=128;h.b.a.et=90;h.b.a.rt=a;h.b.g();h.b.a.rt=b},n=a.length;if(900>=n)e.call(this,a);else for(var n=Math.ceil(n/900),u="block|"+Math.round(Math.random()*m.s).toString(16)+"|"+n+"|",l=[],w=0;w<n;w++)l.push(w),l.push(a.substring(900*w,900*w+900)),e.call(this,u+l.join("|")),l=[]}},_setUserId:function(a){a=a[1];p.Oa();p.Va(a)}};f.init();h.ma=f;return h.ma})();
(function(){function a(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=r,this.a={},this.$=r,this.O=t,this.init())}var b=mt.url,e=mt.ea,d=mt.H,g=mt.lang,m=mt.cookie,l=mt.i,p=mt.localStorage,f=mt.sessionStorage,k=h.j,v=h.o;a.prototype={P:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},ca:function(a,b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},B:function(a){for(var d=0;d<c.dm.length;d++)if(-1<
c.dm[d].indexOf("/")){if(this.ca(a,c.dm[d]))return r}else{var e=b.Z(a);if(e&&this.P(e,c.dm[d]))return r}return t},N:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.P(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/,"");return a},Y:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.ca(document.location.href,d))return d.replace(/^[^\/]+(\/.*)/,"$1")+"/"}return"/"},Ea:function(){if(!document.referrer)return k.l-k.w>c.vdur?1:4;
var a=t;this.B(document.referrer)&&this.B(document.location.href)?a=r:(a=b.Z(document.referrer),a=this.P(a||"",document.location.hostname));return a?k.l-k.w>c.vdur?1:4:3},getData:function(a){try{return m.get(a)||f.get(a)||p.get(a)}catch(b){}},setData:function(a,b,d){try{m.set(a,b,{domain:this.N(),path:this.Y(),L:d}),d?p.set(a,b,d):f.set(a,b)}catch(e){}},Pa:function(a){try{m.set(a,"",{domain:this.N(),path:this.Y(),L:-1}),f.remove(a),p.remove(a)}catch(b){}},Ta:function(){var a,b,d,e,f;k.w=this.getData("Hm_lpvt_"+
c.id)||0;13===k.w.length&&(k.w=Math.round(k.w/1E3));b=this.Ea();a=4!==b?1:0;if(d=this.getData("Hm_lvt_"+c.id)){e=d.split(",");for(f=e.length-1;0<=f;f--)13===e[f].length&&(e[f]=""+Math.round(e[f]/1E3));for(;2592E3<k.l-e[0];)e.shift();f=4>e.length?2:3;for(1===a&&e.push(k.l);4<e.length;)e.shift();d=e.join(",");e=e[e.length-1]}else d=k.l,e="",f=1;this.setData("Hm_lvt_"+c.id,d,c.age);this.setData("Hm_lpvt_"+c.id,k.l);d=k.l===this.getData("Hm_lpvt_"+c.id)?"1":"0";if(0===c.nv&&this.B(document.location.href)&&
(""===document.referrer||this.B(document.referrer)))a=0,b=4;this.a.nv=a;this.a.st=b;this.a.cc=d;this.a.lt=e;this.a.lv=f},da:function(){for(var a=[],b=this.a.et,d=0,e=k.fa.length;d<e;d++){var f=k.fa[d],g=this.a[f];"undefined"!==typeof g&&""!==g&&("tt"!==f||"tt"===f&&0===b)&&("ct"!==f||"ct"===f&&0===b)&&a.push(f+"="+encodeURIComponent(g))}switch(b){case 0:a.push("sn="+k.W);this.a.rt&&a.push("rt="+encodeURIComponent(this.a.rt));break;case 3:a.push("sn="+k.W);break;case 90:this.a.rt&&a.push("rt="+this.a.rt)}return a.join("&")},
Ua:function(){this.Ta();this.a.si=c.id;this.a.su=document.referrer;this.a.ds=l.Qa;this.a.cl=l.colorDepth+"-bit";this.a.ln=String(l.language).toLowerCase();this.a.ja=l.javaEnabled?1:0;this.a.ck=l.cookieEnabled?1:0;this.a.lo="number"===typeof _bdhm_top?1:0;this.a.fl=d.Fa();this.a.v="1.2.16";this.a.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");this.a.tt=document.title||"";var a=document.location.href;this.a.cm=b.f(a,k.Ja)||"";this.a.cp=b.f(a,k.Ka)||b.f(a,k.Ya)||"";this.a.cw=b.f(a,k.Ia)||b.f(a,
k.$a)||"";this.a.ci=b.f(a,k.Ga)||b.f(a,k.Xa)||"";this.a.cf=b.f(a,k.La)||b.f(a,k.Za)||"";this.a.cu=b.f(a,k.Ha)||b.f(a,k.Wa)||""},init:function(){try{this.Ua(),0===this.a.nv?this.Sa():this.T(".*"),h.b=this,this.na(),v.A("pv-b"),this.Ra()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));e.log(k.D+"//"+k.R+"?"+b.join("&"))}},Ra:function(){function a(){v.A("pv-d")}this.$?(this.O=r,
this.a.et=0,this.a.ep="",this.g(a)):a()},g:function(a){var b=this;b.a.rnd=Math.round(Math.random()*k.s);v.A("stag-b");var d=k.D+"//"+k.R+"?"+b.da();v.A("stag-d");b.ka(d);e.log(d,function(d){b.T(d);g.d(a,"Function")&&a.call(b)})},na:function(){var a=document.location.hash.substring(1),d=RegExp(c.id),e=-1<document.referrer.indexOf(k.la),f=b.f(a,"jn"),g=/^heatlink$|^select$/.test(f);a&&(d.test(a)&&e&&g)&&(this.a.rnd=Math.round(Math.random()*k.s),a=document.createElement("script"),a.setAttribute("type",
"text/javascript"),a.setAttribute("charset","utf-8"),a.setAttribute("src",k.protocol+"//"+c.js+f+".js?"+this.a.rnd),f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(a,f))},ka:function(a){var b=f.get("Hm_unsent_"+c.id)||"",d=this.a.u?"":"&u="+encodeURIComponent(document.location.href),b=encodeURIComponent(a.replace(/^https?:\/\//,"")+d)+(b?","+b:"");f.set("Hm_unsent_"+c.id,b)},T:function(a){var b=f.get("Hm_unsent_"+c.id)||"";b&&(a=encodeURIComponent(a.replace(/^https?:\/\//,"")),
a=RegExp(a.replace(/([\*\(\)])/g,"\\$1")+"(%26u%3D[^,]*)?,?","g"),(b=b.replace(a,"").replace(/,$/,""))?f.set("Hm_unsent_"+c.id,b):f.remove("Hm_unsent_"+c.id))},Sa:function(){var a=this,b=f.get("Hm_unsent_"+c.id);if(b)for(var b=b.split(","),d=function(b){e.log(k.D+"//"+decodeURIComponent(b),function(b){a.T(b)})},g=0,l=b.length;g<l;g++)d(b[g])}};return new a})();var z=h.j,A=h.load;if(c.apps){var D=[z.protocol,"//ers.baidu.com/app/s.js?"];D.push(c.apps);A(D.join(""))}var E=h.j,F=h.load;
c.lxb&&F([E.protocol,"//lxbjs.baidu.com/lxb.js?sid=",c.lxb].join(""));var G=h.load,H=h.j.protocol;if(c.qiao){for(var I=[H+"//goutong.baidu.com/site/"],J=c.id,K=5381,L=J.length,M=0;M<L;M++)K=(33*K+Number(J.charCodeAt(M)))%4294967296;2147483648<K&&(K-=2147483648);I.push(K%1E3+"/");I.push(c.id+"/b.js");I.push("?siteId="+c.qiao);G(I.join(""))}
(function(){var a=mt.m,b=mt.event,e=mt.url,d=mt.k;try{if(window.performance&&performance.timing&&"undefined"!==typeof h.b){var g=+new Date,m=function(a){var b=performance.timing,d=b[a+"Start"]?b[a+"Start"]:0;a=b[a+"End"]?b[a+"End"]:0;return{start:d,end:a,value:0<a-d?a-d:0}},l=s;a.S(function(){l=+new Date});var p=function(){var a,b,f;f=m("navigation");b=m("request");f={netAll:b.start-f.start,netDns:m("domainLookup").value,netTcp:m("connect").value,srv:m("response").start-b.start,dom:performance.timing.domInteractive-
performance.timing.fetchStart,loadEvent:m("loadEvent").end-f.start};a=document.referrer;var p=a.match(/^(http[s]?:\/\/)?([^\/]+)(.*)/)||[],x=s;b=s;if("www.baidu.com"===p[2]||"m.baidu.com"===p[2])x=e.f(a,"qid"),b=e.f(a,"click_t");a=x;f.qid=a!=s?a:"";b!=s?(f.bdDom=l?l-b:0,f.bdRun=g-b,f.bdDef=m("navigation").start-b):(f.bdDom=0,f.bdRun=0,f.bdDef=0);h.b.a.et=87;h.b.a.ep=d.stringify(f);h.b.g()};b.c(window,"load",function(){setTimeout(p,500)})}}catch(f){}})();
(function(){var a=mt.i,b=mt.lang,e=mt.event,d=mt.k;if("undefined"!==typeof h.b&&(c.med||(!a.aa||7<a.Na)&&c.cvcc)){var g,m,l,p,f=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},k=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===t)return t},v=function(a,e){var f={};f.n=g;f.t="clk";f.v=a;if(e){var k=e.getAttribute("href"),m=e.getAttribute("onclick")?""+e.getAttribute("onclick"):s,n=e.getAttribute("id")||"";l.test(k)?(f.sn="mediate",
f.snv=k):b.d(m,"String")&&l.test(m)&&(f.sn="wrap",f.snv=m);f.id=n}h.b.a.et=86;h.b.a.ep=d.stringify(f);h.b.g();for(f=+new Date;400>=+new Date-f;);};if(c.med)m="/zoosnet",g="swt",l=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,p={click:function(){for(var a=[],b=f(document.getElementsByTagName("a")),b=[].concat.apply(b,f(document.getElementsByTagName("area"))),b=[].concat.apply(b,f(document.getElementsByTagName("img"))),d,e,g=0,k=b.length;g<k;g++)d=b[g],e=d.getAttribute("onclick"),
d=d.getAttribute("href"),(l.test(e)||l.test(d))&&a.push(b[g]);return a}};else if(c.cvcc){m="/other-comm";g="other";l=c.cvcc.q||q;var n=c.cvcc.id||q;p={click:function(){for(var a=[],b=f(document.getElementsByTagName("a")),b=[].concat.apply(b,f(document.getElementsByTagName("area"))),b=[].concat.apply(b,f(document.getElementsByTagName("img"))),d,e,g,k=0,m=b.length;k<m;k++)d=b[k],l!==q?(e=d.getAttribute("onclick"),g=d.getAttribute("href"),n?(d=d.getAttribute("id"),(l.test(e)||l.test(g)||n.test(d))&&
a.push(b[k])):(l.test(e)||l.test(g))&&a.push(b[k])):n!==q&&(d=d.getAttribute("id"),n.test(d)&&a.push(b[k]));return a}}}if("undefined"!==typeof p&&"undefined"!==typeof l){var u;m+=/\/$/.test(m)?"":"/";var x=function(a,d){if(u===d)return v(m+a,d),t;if(b.d(d,"Array")||b.d(d,"NodeList"))for(var e=0,f=d.length;e<f;e++)if(u===d[e])return v(m+a+"/"+(e+1),d[e]),t};e.c(document,"mousedown",function(a){a=a||window.event;u=a.target||a.srcElement;var d={};for(k(p,function(a,e){d[a]=b.d(e,"Function")?e():document.getElementById(e)});u&&
u!==document&&k(d,x)!==t;)u=u.parentNode})}}})();(function(){var a=mt.m,b=mt.lang,e=mt.event,d=mt.k;if("undefined"!==typeof h.b&&b.d(c.cvcf,"Array")&&0<c.cvcf.length){var g={ia:function(){for(var b=c.cvcf.length,d,p=0;p<b;p++)(d=a.M(decodeURIComponent(c.cvcf[p])))&&e.c(d,"click",g.K())},K:function(){return function(){h.b.a.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.b.a.ep=d.stringify(a);h.b.g()}}};a.S(function(){g.ia()})}})();
(function(){var a=mt.event,b=mt.k;if(c.med&&"undefined"!==typeof h.b){var e=+new Date,d={n:"anti",sb:0,kb:0,clk:0},g=function(){h.b.a.et=86;h.b.a.ep=b.stringify(d);h.b.g()};a.c(document,"click",function(){d.clk++});a.c(document,"keyup",function(){d.kb=1});a.c(window,"scroll",function(){d.sb++});a.c(window,"unload",function(){d.t=+new Date-e;g()});a.c(window,"load",function(){setTimeout(g,5E3)})}})();})();
