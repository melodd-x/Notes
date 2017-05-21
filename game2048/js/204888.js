/**
 * Created by WXK on 2017/2/14.
 */
//用一个二维数组表示表格的位置
var initRC=[[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15]];

$(function () {

    $(".main div").addClass("bg");

    //控制格子是否移动过
    var type=true;

    //把空余的格子放在一个数组里面
    function getEmptyDiv() {
        var divs=[];
        $(".main div").each(function (index,element) {
            if (element.innerHTML==""){
                divs.push(element);
            }
        });
        return divs;
    }

    //在数组里面随机一个格子，随机给个2或者4
    function getRandomNum() {
        var divs=$(".main div");
        var EmptyDivs=getEmptyDiv();
        if (EmptyDivs.length==0){
            // alert("格子没有了");
            //游戏结束规则
            var num=0;
            for(var i=0;i<4;i++){
                if (divs[initRC[i][0]].innerText==divs[initRC[i][1]].innerText|| divs[initRC[i][1]].innerText==divs[initRC[i][2]].innerText         ||   divs[initRC[i][2]].innerText==divs[initRC[i][3]].innerText){
                    // alert("Come on");
                    num++;
                }
            }

            for(var j=0;j<4;j++){
                if (divs[initRC[0][j]].innerText==divs[initRC[1][j]].innerText|| divs[initRC[1][j]].innerText==divs[initRC[2][j]].innerText      ||            divs[initRC[2][j]].innerText==divs[initRC[3][j]].innerText){
                    // alert("Come on");
                    num++;
                }
            }
            if(num==0){
                // alert("Game Over!!!");
                // $(".main").css("margin-top","0px");
                $(".los").css("display","block");
            }

        }


        var ranNum=Math.random()>0.2?"2":"4";
        var divRanNum=parseInt(Math.random()*EmptyDivs.length);
        EmptyDivs[divRanNum].innerHTML=ranNum;
    }



    //根据格子里面的数字添加样式
    function addClassAll() {
        $(".main div").each(function (index,element) {
            var num=element.innerText;
            $(element).removeClass().addClass("bg"+num);
        })
    }

    //点击事件
    $(".start").click(function () {
        $(".start").css("display","none");
        $(".main").css("display","block");
        $(".main div").empty();//移除所有div元素的内容
        getRandomNum();
        getRandomNum();
        addClassAll();
    });

    //左右移动
    function colLeftMove(col1,col2){
        var divs=$(".main div");
        for(var i=0;i<4;i++){
            if(divs[initRC[i][col2]].innerText==""){

            }else if(divs[initRC[i][col1]].innerText==""){
                divs[initRC[i][col1]].innerText=divs[initRC[i][col2]].innerText;
                divs[initRC[i][col2]].innerText="";
                type=false;
            }else if(divs[initRC[i][col1]].innerText==divs[initRC[i][col2]].innerText){
                divs[initRC[i][col1]].innerText=divs[initRC[i][col1]].innerText*2;
                divs[initRC[i][col2]].innerText="";
                type=false;


                divs.each(function (index,element) {
                    if(element.innerText=="2048"){
                        // alert("游戏通关");
                        $(".main").css("display","none");
                        $(".win").css("display","block");

                    }
                });

            }
        }
    }

    //上下移动
    function rowUpMove(row1,row2) {
        var divs=$(".main div");
        for (var i=0;i<4;i++){
            var div1=divs[initRC[row1][i]];
            var div2=divs[initRC[row2][i]];
            if (div2.innerText==""){

            }else if(div1.innerText==""){
                div1.innerText=div2.innerText;
                div2.innerText="";
                type=false;
            }else if(div1.innerText==div2.innerText){
                div1.innerText=div1.innerText*2;
                div2.innerText="";
                type=false;


                divs.each(function (index,element) {
                    if(element.innerText=="2048"){
                        // alert("游戏通关");
                        $(".main").css("display","none");
                        $(".win").css("display","block");
                    }
                });
            }
        }
    }

    //键盘事件
    $(window).keyup(function (e) {
        var ev=e||event;
        switch (ev.keyCode){
            //左
            case 37:
                for (var i=0;i<3;i++) {
                    colLeftMove(0,1);
                    colLeftMove(1,2);
                    colLeftMove(2,3);
                }
                if (type==false){
                    getRandomNum();
                    addClassAll();
                }
                break;
            //上
            case 38:
                for (var i=0;i<3;i++){
                    rowUpMove(0,1);
                    rowUpMove(1,2);
                    rowUpMove(2,3);
                }
                if (type==false){
                    getRandomNum();
                    addClassAll();
                }
                break;

            //右
            case 39:
                for (var i=0;i<3;i++) {
                    colLeftMove(3,2);
                    colLeftMove(2,1);
                    colLeftMove(1,0);
                }
                if (type==false){
                    getRandomNum();
                    addClassAll();
                }
                break;

            //下
            case 40:
                for (var i=0;i<3;i++){
                    rowUpMove(3,2);
                    rowUpMove(2,1);
                    rowUpMove(1,0);
                }
                if (type==false){
                    getRandomNum();
                    addClassAll();
                }
                break;

        }
        var EmptyDivs=getEmptyDiv();
        if (EmptyDivs.length==0){
            return;
        }
        type=true;


    });

    //游戏失败页面点击事件
    $(".los").click(function () {
        $(".los").css("display","none");
        $(".main").css("display","none");
        $(".start").css("display","block");
    });

    //游戏通关页点击事件
    $(".win").click(function () {
        $(".win").css("display","none");
        $(".start").css("display","block");
    })
});