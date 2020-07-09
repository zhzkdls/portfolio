//커서
$(".cursor img").hide();

$("body").hover(function(){
    $(".cursor .cur").show();
}, function(){
    $(".cursor .cur").hide();
});

$("a, button").hover(function(){
    $(".cursor .pointer").show();
    $(".cursor .cur").hide();
},function(){
    $(".cursor .pointer").hide();
    $(".cursor .cur").show();
});

$(document).mousemove(function(e) {
    $(".cursor").css({"left" : e.pageX +3,"top" : e.pageY});    
});

//패럴럭스
$("#nav ul li").click(function(){
    let cont = $(".cm");
    let target = $(this);
    let index = target.index();
    let section = cont.eq(index);
    let offset = section.offset().top;
    $("html, body").animate({ scrollTop:offset }, 600);
});
$(".snav ul li").click(function(){        
    let cont = $(".cm");
    let target = $(this);
    let index = target.index();
    let section = cont.eq(index);
    let offset = section.offset().top;
    $("html, body").animate({ scrollTop:offset }, 600);
});

//애니메이션
$(document).ready(function() {
    $(window).scroll(function(){
        const scrollTop = $(window).scrollTop()+$(window).height()/3;

        $("section").each(function(){
            if(scrollTop > $(this).offset().top) {
                $(this).addClass("show");
            }
        });
        $(".cont03 .site-wrap").each(function(){
            if(scrollTop > $(this).offset().top) {
                $(this).addClass("show");
            }
        });

        //기프트 게이지
        let lotto = $(window).scrollTop();
        $(".bargauge").width(lotto/11);

        if(lotto >= 2000) {
            $(".gift-left p:first-child").removeClass("on");
            $(".gift-left p:nth-child(2)").addClass("on");
        } else {
            $(".gift-left p:first-child").addClass("on");
            $(".gift-left p:nth-child(2)").removeClass("on");
        };

        if(lotto >= 7500) {
            $(".gift-left p:nth-child(2)").removeClass("on");
            $(".gift-left p:nth-child(3)").addClass("on");
        } else {
            $(".gift-left p:nth-child(3)").removeClass("on");
        };

        if(lotto >= 12500) {
            $(".gift-left p:nth-child(3)").removeClass("on");
            $(".gift-left p:nth-child(4)").addClass("on");
            $(".lottoBox").css("display","none");
            $("#canvas").css("display","block");
        } else {
            $(".gift-left p:nth-child(4)").removeClass("on");
            $(".lottoBox").css("display","block");
            $("#canvas").css("display","none");
        };
    });
});

//서브메뉴 클릭
$(".sub-icon").click(function(){
    $(this).toggleClass("on");
    $("#smenu").slideToggle(300);
    $(".snav ul li").click(function(){
        $("#smenu").slideUp();
        $(".sub-icon").removeClass("on");
    });    
});

//사이트 소스 보기
$(".cont03 > div").each(function(index){
    $(this).find(".tab-wrap").attr("data-num",index);
    $(this).find(".tab-wrap").addClass("num"+index)
    
    $(".tab-btn > ul > li").click(function(e){
        e.preventDefault();
        let target = $(this);
        let num = target.parent().parent().parent().attr("data-num");
        let index = target.index();

        $(".tab-wrap.num"+num+" .tab-btn > ul > li").removeClass("active");  
        target.addClass("active");  
        
        $(".tab-wrap.num"+num+" .tab-cont > div").css("display","none");
        $(".tab-wrap.num"+num+" .tab-cont > div").eq(index).css("display","block");  
    });            
});

//다크 모드
$(".toggle-item").click(function(e){
    e.preventDefault("a");            
    let target = $(this);
    let num = target.parent().parent().parent().parent().attr("data-num");

    $(".tab-wrap.num"+num+" .tab-cont > div .language-js").toggleClass("on");
    $(".tab-wrap.num"+num+" .tab-mode").toggleClass("on");
});

//탭 바
let tabBar = $(".tabBar > ul > li");
let contBox = $(".contBox");

contBox.hide().eq(0).show();

tabBar.click(function(){
    let target = $(this);
    let index = target.index();
    
    tabBar.removeClass("show");
    target.addClass("show");
    contBox.css("display","none");
    contBox.eq(index).css({"display":"block","display":"grid"});
});

//애니메이션 슬라이드
$(".aniBox .iframe .frame-box").hide();
$(".aniBox .iframe img").click(function() {
    $(this).toggleClass("on")
    $(this).next(".frame-box").slideToggle(400);
});

//복권
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var width = 400;
var height = 250;

init()
function init() { 
    context.fillStyle = '#F9BC60';
/*     context.font = '15px Recoleta';
    context.fillText('gift for you', 20, 50); */
    context.fillRect(0, 0, width, height); 
    canvas.style.background = 'url("https://tistory2.daumcdn.net/tistory/3795912/skin/images/lotto.png") no-repeat center';
    canvas.style.backgroundSize = "100% 100%";
    
    context.lineWidth = 35;
    context.lineJoin = "round";
};

canvas.addEventListener('mousedown', mouseDown, false);
canvas.addEventListener('mousemove', mouseMove, false);
canvas.addEventListener('mouseup', mouseUp, false);

var isDrawing; 
var startX=0;
var startY=0; 

function mouseDown(e){
    isDrawing = true;
    startX = e.layerX;
    startY = e.layerY;
};

function mouseMove(e){
    if(isDrawing){
    var x = e.layerX;
    var y = e.layerY;

    context.globalCompositeOperation = "destination-out"; 

    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(x, y);
    context.closePath(); 
    context.stroke();

    startX = x;
    startY = y; 
    };
};

function mouseUp(e){
    isDrawing = false;
    var data = context.getImageData(0, 0, width, height).data;
    var length = data.length;
    var k = 0;

    for (var i = 0; i < length - 3; i += 4) {
        if (data[i] == 0 && data[i + 1] == 0 && data[i + 2] == 0 && data[i + 3] == 0) {
            k++;
        };
    };
};