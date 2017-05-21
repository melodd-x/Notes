/**
 * Created by WXK on 2017/3/3.
 */
$(function () {

    var type=1;//选取邮箱还是QQ，1是QQ

    $("#intname").focus();


    //邮箱
    $("#intyouxiang").focus(function () {
        $(this).css("border","1px solid #c3d3df");
        $(this).next().css({"color":"#757177","line-height":"16px"}).html("<p>请输入你的常用的电子邮箱</p> <p> <a href='javascript:void (0)'>注册邮箱</a> 或 <a href='javascript:void (0)'>注册普通QQ号</a> </p>");
    }).blur(function () {
       if ($(this).val()==""){
           $(this).css("border","1px solid red");
           $(this).next().css({"color":"red","line-height":"35px"}).html("<svg class='icon' aria-hidden='true'><use" +
               " xlink:href='#icon-gantanhao1'></use></svg>&nbsp;请输入邮箱");
       }
    });

    //昵称
    $("#intname").focus(function () {
        $(this).css("border","1px solid #c3d3df");
        $(this).next().css("color","#757177").html("请输入昵称");
    }).blur(function () {
        if ($(this).val()==""){
            $(this).css("border","1px solid red");
            $(this).next().css("color","red").html("<svg class='icon' aria-hidden='true'><use xlink:href='#icon-gantanhao1'></use></svg>&nbsp;昵称不可以为空");
        }else {
            $(this).css("background","#F3F9FC");
            $(this).next().html("<svg class='icon' aria-hidden='true' style='font-size: 16px'><use xlink:href='#icon-gou'></use></svg>");
        }
    });

    //密码
        $("#intpassword").focus(function () {
            $(this).css("border","1px solid #c3d3df");
            $("#mimatishi").show();
            $(".qiangdu").hide();
        }).blur(function () {
            var mima = $("#intpassword").val();
            var array = mima.split("");
            var num=0;
            var zimuda = new RegExp("^[A-Z]+$");//大写字母
            var zimuxiao = new RegExp("^[a-z]+$");//小写字母
            var shuzi = new RegExp("^[0-9]*$");//数字

            var s = false;
            var d = false;
            var x = false;

            $(this).css("border", "1px solid red");
            $(".mimatishi1").css("color", "red");
            $(".mimatishi2").css("color", "red");
            $(".mimatishi3").css("color", "red");
            if(mima==""){

            }else if(mima.indexOf(" ") == -1){
                // console.log("没有空格");
                $(".mimatishi2").css("color", "green");
                num=num+1;
            }
            if(mima.length >=6 && mima.length <=16){
                // console.log("6-16");
                $(".mimatishi1").css("color", "green");
                num=num+1;
                if(mima.length>=9){
                    // console.log("9+");
                    $(".mimatishi3").css("color", "green");
                    num=num+1;
                }
            }
            //满足规则后，对密码强度进行判断
            if(num==3){
                $.each(array,function (i,n) {
                    console.log(i+":"+n);
                    if(shuzi.test(n)){
                        s = true;
                        // console.log("有数字");
                    }else if(zimuxiao.test(n)){
                        x = true
                    }else if(zimuda.test(n)){
                        d = true;
                        // console.log("有大写");
                    }
                });

                if (s&&x&&d){
                    console.log("密码强度三级");
                    $(this).css("background","#F3F9FC");
                    $(this).css("border","1px solid #c3d3df");
                    $("#mimatishi").hide();
                    $(".qiangdu").show();
                    $(".qiangdu1").css({"background-position":"0 -187px","color":"green"}).html("强");
                    $(".qiangdu2").html("密码强度好，请记牢！");
                }else if(s&&x||s&&d||x&&d){
                    console.log("密码强度二级");
                    $(this).css("background","#F3F9FC");
                    $(this).css("border","1px solid #c3d3df");
                    $("#mimatishi").hide();
                    $(".qiangdu").show();
                    $(".qiangdu1").css({"background-position":"0 -141px","color":"green"}).html("中等");
                    $(".qiangdu2").html("复杂度还行，再加强一下等级？");
                }else {
                    console.log("密码强度一级");
                    $(this).css("background","#F3F9FC");
                    $(this).css("border","1px solid #c3d3df");
                    $("#mimatishi").hide();
                    $(".qiangdu").show();
                    $(".qiangdu1").css({"background-position":"0 -99px","color":"orange"}).html("弱");
                    $(".qiangdu2").html("试试字母、数字、标点的组合吧");
                }
            }
        });



    //确认密码
    $("#intpasswordagain").focus(function () {
        $(this).css("border","1px solid #c3d3df");
        $(this).next().css("color","#757177").html("请再次输入密码");
    }).blur(function () {
        if ($(this).val()==""){
            $(this).css("border","1px solid red");
            $(this).next().css("color","red").html("<svg class='icon' aria-hidden='true'><use xlink:href='#icon-gantanhao1'></use></svg>&nbsp;请再次输入密码");
        }else if($(this).val()==$("#intpassword").val()){
            $(this).css("background","#F3F9FC");
            $(this).next().html("<svg class='icon' aria-hidden='true' style='font-size: 16px'><use xlink:href='#icon-gou'></use></svg>");
        }else {
            $(this).css("border","1px solid red");
            $(this).next().css("color","red").html("<svg class='icon' aria-hidden='true'><use xlink:href='#icon-gantanhao1'></use></svg>&nbsp;密码不一致");
        }
    });

    //生日





    //所在地
    var datas  = {"中国":["北京","上海","广东"],
        "日本":["本州岛","四州岛","九州岛"],
        "美国":["德州","夏威夷","纽约州"]};
    var datas2  = {
        "北京":["东城","海定","朝阳"],
        "上海":["浦东","浦西","五环外"],
        "广东":["深圳","佛手","广州"],
        "本州岛":["东京","西京","大板"],
        "四州岛":["四洲中","三环","一环"],
        "九州岛":["东边","西边","北边"],
        "德州":["湖人","火箭","西边"],
        "夏威夷":["北岛","中岛","南岛"],
        "纽约州":["中心","郊区","地下"]
    };

    var guojia = document.getElementById("guojia");
    var sheng   = document.getElementById("sheng");
    var shi = document.getElementById("shi");

    function addOptions(dom,child, array) {
        dom.addEventListener("change",function () {

            if (array[this.value] != "undefined"){
                var arra = array[this.value];
                child.innerHTML = "";
                var myOption  = "";
                arra.forEach(function (item) {
                    myOption += '<option value='+item+'>'+item+'</option>';
                });
                child.innerHTML = myOption;
            }
        })
    }

    addOptions(guojia,sheng,datas);
    addOptions(sheng,shi,datas2);


    //手机号码
    var pattern =  /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
    $("#intiphone").focus(function () {
        $(".intmessageyc").css("display","block");
    }).blur(function () {
        var phone=$("#intiphone").val();
        if (phone.length == ""){
        }else if(phone.length != 11){
            $(this).css("border","1px solid red");
            $(this).next().css("color","red").html("<svg class='icon' aria-hidden='true'><use" +
                    " xlink:href='#icon-gantanhao1'></use></svg>&nbsp;请输入有效的手机号码");
        }else if(!pattern.test(phone)){
            $(this).css("border","1px solid red");
            $(this).next().css("color","red").html("<svg class='icon' aria-hidden='true'><use" +
                " xlink:href='#icon-gantanhao1'></use></svg>&nbsp;请输入有效的手机号码");
        }else {
            $(this).css("border","1px solid #c3d3df");
            $(this).css("background","#F3F9FC");
            $(this).next().html("<svg class='icon' aria-hidden='true' style='font-size: 16px'><use xlink:href='#icon-gou'></use></svg>");
        }

    });

    //短信验证
    $(".btnmessage").attr("disabled",true);

    //立即注册
    $("#intsubmit").attr("disabled",true);

    //邮箱验证
    $(".btnyz").attr("disabled",true);

    //条款隐藏内容
    $(".tkyc1").click(function () {
        // console.log("1");
        $(".tkyc1").css({"border":"1px solid","border-color":"#84a8c8 #84a8c8 white #84a8c8"});
        $(".tkyc2").show();
    });






    //条款选中事件
    $("#inttk2").click(function () {
        if ($(this).prop("checked")){
            console.log($("#inttk2").prop("checked"));

            $("#intsubmit").css({"background":"#69b946","color":"white","border":"1px solid #white"});
        }else {
            console.log($("#inttk2").prop("checked"));

            $("#intsubmit").css({"background":"#f4f9fd","color":"gray","border":"1px solid #c3d3df"});
        }
    });


    //点击这里-地区
    $(".dianjizheli").click(function () {
        $(".intdqyc").css("display","block");
        $("#tishiyc").css("display","none");
    });


    //搜索放大镜
    $(".fdj").click(function () {
        alert("请输入4-10位数字");
    });




    //QQ帐号
    $(".QQ").click(function () {
        if(type==2){
            $(".YX").css({"background":"url('../img/ZH@2x.png') no-repeat","background-size":"209px 80px","margin-left":"0px"});
            $(this).css({"background":"url('../img/QQ@2x.png') no-repeat","background-size":"209px 80px","margin-left":"0px"});
            type=1;
            $(".zhuce").html("注册帐号");
            $("#youxiang").hide();
            $("#yz").hide();
            $("#shouji").show();

        }

    });
    //YX帐号
    $(".YX").click(function () {
        // $("#youxiang").focus();
        if (type==1){

            $(".QQ").css({"background":"url('../img/QQ2@2x.png') no-repeat","background-size":"209px 80px","margin-left":"2px"});
            $(this).css({"background":"url('../img/YX2@2x.png') no-repeat","background-size":"209px 80px","margin-left":"2px"});
            type=2;
            $(".zhuce").html("注册邮箱帐号");
            $("#youxiang").show();

            $("#shouji").hide();
            $("#yz").show();

        }
    });


    //具体哪天
    $("#ri").change(function () {
        var rizi = $("#ri option:selected").val();
        if (rizi == "10号前"){
            $(this).next().html("<svg class='icon' aria-hidden='true'> <use xlink:href='#icon-gantanhao'></use></svg> 然而并没有什么卵用");
        }else if(rizi == "10-20号"){
            $(this).next().html("<svg class='icon' aria-hidden='true'> <use xlink:href='#icon-gantanhao'></use></svg> 就是不想帮你算生肖");
        }else if(rizi == "20-30号"){
            $(this).next().html("<svg class='icon' aria-hidden='true'> <use xlink:href='#icon-gantanhao'></use></svg> 就是不想帮你算星座");
        }else {
            $(this).next().html(" ");
        }

    });


    //获取页面点击事件元素
    $(document).click(function (e) {
        var c = $(e.target).attr("class");
        var i = $(e.target).attr("id");
        if (c==undefined&&i!=undefined){
            // console.log("id:"+i);

        }else if(c!=undefined){
            // console.log("class:"+c);
            if (c!="tkycimg"){
                $(".tkyc1").css("border","0px solid");
                $(".tkyc2").hide();
            }
            if (c=="QQ"){
                $("#intname").focus();
            }
            if (c=="YX"){
                $("#intyouxiang").focus();
                $("#intname").css("border","1px solid #c3d3df").next().html("");
            }
        }else {
            // console.log("点击的元素没给id或class");
        }
    });

});
