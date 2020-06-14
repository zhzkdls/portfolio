// 메인 텍스트
//skrollr
   var s = skrollr.init({
    edgeStrategy: 'set',
    easing: 'linear'
});

setTimeout(start, 2000);

function start(){
    //$("#main h1").addClass("show");

    let tl = new TimelineMax();
    tl.staggerFromTo("#main h1 span", 0.8,  
        {ease: Back.easeOut.config(1.7), opacity: 0, y: 80},
        {ease: Back.easeOut.config(1.7), opacity: 1, y: 0}, 0.05);
} 

//페이지 로딩 imageProgress
function imagesProgress(){
    var $container = $('#progress'),
        $progressText = $container.find('.progress-text'),
        imgLoad = imagesLoaded('body'),	
        imgTotal = imgLoad.images.length,	
        imgLoaded = 0,										
        current = 0,							
        progressTimer = setInterval(updateProgress, 1000 / 60);

    imgLoad.on('progress', function(){
        imgLoaded++;
    });

    function updateProgress(){
        var target = ( imgLoaded / imgTotal) * 100;

        current += ( target - current) * 0.1;
        $progressText.text( Math.floor(current) + '%' );

        if(current >= 100){
            clearInterval(progressTimer);

            $container.animate({top: '-110%'},1000,'easeInOutQuint');




            $('body').addClass('active');
        }
        if(current > 99.98){
            current = 100;
        }
    }	
};

imagesProgress()


//텍스트 show
$(window).scroll(function(){
    let wScroll = $(window).scrollTop()

    if(wScroll >= $("#main").offset().top - $(window).height()/2){
        $("#main").addClass("show");
    }

    if(wScroll >= $("#about").offset().top - $(window).height()/2){
        $("#about").addClass("show");
    }

    if(wScroll >= $("#skill").offset().top - $(window).height()/2){
        $("#skill").addClass("show");
    }        

    if(wScroll >= $("#work1").offset().top - $(window).height()/2){
        $("#work1").addClass("show");
    }

    if(wScroll >= $("#work2").offset().top - $(window).height()/2){
        $("#work2").addClass("show");
    }
    
    if(wScroll >= $("#work3").offset().top - $(window).height()/2){
        $("#work3").addClass("show");
    }
    
    if(wScroll >= $("#work4").offset().top - $(window).height()/2){
        $("#work4").addClass("show");
    }
    
    if(wScroll >= $("#work5").offset().top - $(window).height()/2){
        $("#work5").addClass("show");
    }

    if(wScroll >= $("#work6").offset().top - $(window).height()/2){
        $("#work6").addClass("show");
    }

    if(wScroll >= $("#contact").offset().top - $(window).height()/2){
        $("#contact").addClass("show");
    }

    if(wScroll >= $("#footer").offset().top - $(window).height()/2){
        $("#footer").addClass("show");
    }
});

//스킬 counter
function counter() {
    if ($('.skill_one .count').size()) {
        $c = $('.skill_one .count');

        $c.each(function () {
            var $this = $(this);
            $this.data('target', parseInt($this.html()));
            $this.data('counted', false);
            $this.html('0');
        });

        $(window).on('scroll', function () {
            var speed = 5000;

            $c.each(function (i) {
                var $t = $(this);
                if (!$t.data('counted') && $(window).scrollTop() + $(window).height() >= $t.offset().top) {

                    $t.data('counted', true);

                    $t.animate({
                        dummy: 1
                    }, {
                        duration: speed,
                        step: function (now) {
                            var $this = $(this);
                            var val = Math.round($this.data('target') * now);
                            $this.html(val);
                        },
                        easing: 'easeInOutQuart'
                    });

                    // easy pie
                    $('.pie').easyPieChart({
                        barColor: '#ffd600',
                        trackColor: '#030303',
                        scaleColor: '#fff',
                        scaleLength: 5,
                        lineWidth: 2,
                        size: 180,
                        lineCap: 'round',
                        animate: { duration: speed, enabled: true }
                    });
                }
            });
        }).triggerHandler('scroll');
    }
}

counter();

//work6 modal
$(".css1 .btn1").click(function(){
    $("#modal1").removeClass("out").addClass("one");
});
$("#modal1 .close").click(function(){
    $("#modal1").addClass("out")
    setTimeout(de,1000)
    function de(){
        $("#modal1").removeClass("one out");
    }
});


$(".css2 .btn2").click(function(){
    $("#modal2").removeClass("out").addClass("one");
});
$("#modal2 .close").click(function(){
    $("#modal2").addClass("out")
    setTimeout(de,1000)
    function de(){
        $("#modal2").removeClass("one out");
    }
});

$(".css3 .btn3").click(function(){
    $("#modal3").removeClass("out").addClass("one");
});
$("#modal3 .close").click(function(){
    $("#modal3").addClass("out")
    setTimeout(de,1000)
    function de(){
        $("#modal3").removeClass("one out");
    }
});

$(".css4 .btn4").click(function(){
    $("#modal4").removeClass("out").addClass("one");
});
$("#modal4 .close").click(function(){
    $("#modal4").addClass("out")
    setTimeout(de,1000)
    function de(){
        $("#modal4").removeClass("one out");
    }
});

//스크롤
$(window).scroll(function(){
    let wScroll = $(window).scrollTop();
    $(".scroll").text(wScroll);

    let offset = $("#about").offset().top 
    if(wScroll > offset - 500){
        $("#about").addClass("show");
        $(".about_left p1").css("transform","translatex("+ wScroll +"px)");
    }

});
