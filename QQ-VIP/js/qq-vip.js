/**
 * Created by WXK on 2017/2/22.
 */
$(function () {
    var i=0;
    var setTime=null;
    var xunhuan=function () {
        $(".main .lun-bo img:eq("+i+")").css("display","none");
        $(".main .lun-bo .lunbo-icon li:eq("+i+")").css({
            backgroundColor:"#fff",
            color:"red"
        });
        i++;
        if (i==3){
            i=0;
        }
        $(".main .lun-bo img:eq("+i+")").css("display","block");
        $(".main .lun-bo .lunbo-icon li:eq("+i+")").css({
            backgroundColor:"black",
            color:"white"
        });
        setTime=setTimeout(xunhuan,2000);
    };
    setTime=setTimeout(xunhuan,2000);


    $(".main .lun-bo img").mouseover(function () {
        clearTimeout(setTime);
    });
    $(".main .lun-bo img").mouseout(function () {
        setTime=setTimeout(xunhuan,2000);
    });



    // var setInt=null;
    function scroll() {
        var num=$(document).scrollTop();
        if(num>195){
            $(".footer-nav").slideDown();
        }else {
            $(".footer-nav").slideUp();

        }
    }
    setInterval(scroll,100);

});