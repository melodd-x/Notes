/**
 * Created by zzz on 2017/3/2.
 */
var video=document.getElementById("video");

var playbtn=document.getElementById("play");
var time=document.getElementById("time");
var vol=document.getElementById("vol");
var circle=document.getElementById("circle");
var volchang=document.getElementById("volchang");
var color=document.getElementById("color");
var full=document.getElementById("full");
var player=document.getElementById("player");
var jindu=document.getElementById("jindu");
var now=document.getElementById("now");
var yiwan=document.getElementById("yiwan");

video.addEventListener("timeupdate",getTime);
vol.addEventListener("click",mut);
volchang.addEventListener("mousedown",mousedownHandler);    //添加监听事件
volchang.addEventListener("mousemove",mousemoveHandler);    //添加监听事件
volchang.addEventListener("mouseup",mouseupHandler);//添加监听事件
volchang.addEventListener("click",mouseClickHandler);
document.addEventListener("mouseup",mouseupHandler);
document.addEventListener("mousemove",mousemoveHandler);
jindu.addEventListener("mousedown",mousedownHand);    //添加监听事件
jindu.addEventListener("mousemove",mousemoveHand);    //添加监听事件
jindu.addEventListener("mouseup",mouseupHand);//添加监听事件
jindu.addEventListener("click",mouseClickHand);

full.addEventListener("click",fullsc);

video.volume=0.5;

playbtn.onclick=function () {
    if(video.paused){
        video.play();
        playbtn.className="iconfont icon-bofangqizanting"
    }else {
        video.pause();
        playbtn.className="iconfont icon-play"
    }
};

function getTime() {
    var cuurMin=parseInt(video.currentTime/60);
    var cuurSec=parseInt(video.currentTime%60);
    var durMin=parseInt(video.duration/60);
    var durSec=parseInt(video.duration%60);
    time.innerHTML=timechang(cuurMin)+":"+timechang(cuurSec)+" / "+timechang(durMin)+":"+timechang(durSec);
    now.style="left:"+((622/video.duration)*video.currentTime)+"px";
    yiwan.style="width:"+((622/video.duration)*video.currentTime+6)+"px";
}
function timechang(e) {
    if(e<10){
        e="0"+e;
    }else {
        e=e;
    }
    return e;
}
function mut() {
    if(video.muted==false){
        video.muted=true;
        vol.className="iconfont icon-tushuebofangqijingyin";
    }else{
        video.muted=false;
        vol.className="iconfont icon-tushubofangqiyousheng";
    }
}
//        document.onmousemove=function (e){
//            var ev=e||event;
//            var x=ev.offsetX;
//            var y=ev.offsetY;
//            alert(x);
//            document.getElementById("circle").style="left:"+x+"px;top:"+y+"px;";
//        }
var type=false;
var con=false;
function mousedownHandler(e) {
    type=true;
}
function mouseupHandler(){
    type=false;
    con=false;
}
function mousemoveHandler(e){
    if(type){
        var v=e.pageX-volchang.offsetLeft-player.offsetLeft-1;

        if(v>93){
            v=93;
        }else if(v<-7){
            v=-7;
        }

        circle.style="left:"+v+"px";
        color.style="width:"+(v+7)+"px";
        video.volume=(v+7)/100;
        if(v==-7){
            video.muted=true;
            vol.className="iconfont icon-tushuebofangqijingyin";
        }else{
            video.muted=false;
            vol.className="iconfont icon-tushubofangqiyousheng";
        }
    }
}

function mouseClickHandler(e) {
    var x=e.pageX-volchang.offsetLeft-player.offsetLeft-1;
    video.volume=x/100;
    circle.style="left:"+(x-7)+"px";
    color.style="width:"+x+"px";
    if(x==0){
        video.muted=true;
        vol.className="iconfont icon-tushuebofangqijingyin";
    }else{
        video.muted=false;
        vol.className="iconfont icon-tushubofangqiyousheng";
    }
}


function fullsc() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
//                  video.width = window.screen.width;
    }
}

function mouseClickHand(e) {
    var x=e.pageX-player.offsetLeft;
    if(x>622){
        x=622;
    }else if(x<0){
        x=0;
    }
    var j=video.duration/(640-18);
    video.currentTime=x*j;
    now.style="left:"+x+"px";
    yiwan.style="width:"+(x+6)+"px";

}
function mousedownHand() {
    con=true;
}
function mouseupHand(){
    con=false;
}
function mousemoveHand(e) {
    if(con){
        var x=e.pageX-player.offsetLeft;
        if(x>622){
            x=622;
        }else if(x<0){
            x=0;
        }
        var j=video.duration/(640-18);
        video.currentTime=x*j;
        now.style="left:"+x+"px";
        yiwan.style="width:"+(x+6)+"px";
    }
}

