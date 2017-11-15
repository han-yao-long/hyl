




















if(typeof doyoo=='undefined' || !doyoo){
var d_genId=function(){
var id ='',ids='0123456789abcdef';
for(var i=0;i<34;i++){ id+=ids.charAt(Math.floor(Math.random()*16));  }  return id;
};
var doyoo={
env:{
secure:false,
mon:'http://m8100.looyu.com/monitor',
chat:'http://looyuoms7623.looyu.com/chat',
file:'http://yun-static.soperson.com/131221',
compId:20000651,
confId:10050003,
vId:d_genId(),
lang:'',
fixFlash:1,
fixMobileScale:0,
subComp:8776,
_mark:'06c6d2ae73c00f4c20bb869bec035daca3dd9857e4965aad472c867e7861bd9014c29876f9314fc1'
},
chat:{
    mobileColor:'',
    mobileHeight:80,
    mobileChatHintBottom:0,
    mobileChatHintMode:0,
    mobileChatHintColor:'',
    mobileChatHintSize:0
}


, panelParam:{
mobileIcon:'null',
mobileIconWidth:0,
mobileIconHeight:0,
category:'icon',
preferConfig:0,
position:0,
vertical:180,
horizon:5


,mode:1,
target:'10054519',
online:'http://a.looyu.com/20000651/210f44c7d0fd4087aa507aa5738d0d3b.jpg',
offline:'http://a.looyu.com/20000651/210f44c7d0fd4087aa507aa5738d0d3b.jpg',
width:168,
height:440,
status:1,
closable:1,
regions:[{type:"2",l:"10",t:"25",w:"140",h:"30",bk:"",v:"10054519"},{type:"2",l:"10",t:"67",w:"140",h:"30",bk:"",v:"10055474"},{type:"2",l:"10",t:"108",w:"140",h:"30",bk:"",v:"10056076"},{type:"2",l:"10",t:"150",w:"140",h:"30",bk:"",v:"10054519"},{type:"3",l:"10",t:"192",w:"140",h:"30",bk:"",v:"10054519"}],
collapse:0



}



};

if(typeof talk99Init == 'function'){
talk99Init(doyoo);
}
if(!document.getElementById('doyoo_panel')){
var supportJquery=typeof jQuery!='undefined';
var doyooWrite=function(html){
document.writeln(html);
}

doyooWrite('<div id="doyoo_panel"></div>');


doyooWrite('<div id="doyoo_monitor"></div>');


doyooWrite('<div id="talk99_message"></div>')

doyooWrite('<div id="doyoo_share" style="display:none;"></div>');
doyooWrite('<lin'+'k rel="stylesheet" type="text/css" href="http://yun-static.soperson.com/131221/oms.css?170728"></li'+'nk>');
doyooWrite('<scr'+'ipt type="text/javascript" src="http://yun-static.soperson.com/131221/oms.js?17072505" charset="utf-8"></scr'+'ipt>');
}
}
