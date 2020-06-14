$(function(){
    imagesProgress();     
});


//imageProgress
function imagesProgress(){
    var $container = $("#progress"),
        $progressBar = $container.find(".progress-box"),
        $progressText = $container.find(".progress-text"),
        imgLoad = imagesLoaded("body"),	
        imgTotal = imgLoad.images.length,	
        imgLoaded = 0,										
        current = 0,							
        progressTimer = setInterval(updateProgress, 2000 / 60);	

        $progressText.css("display","block");

    imgLoad.on("progress", function(){
        imgLoaded++;
    });

    function updateProgress(){
        var target = ( imgLoaded / imgTotal) * 100;

        current += ( target - current) * 0.1;
        $progressBar.css({ width: current + '%' });
        $progressText.text( Math.floor(current) + '%' );

        if(current >= 100){
            clearInterval(progressTimer);
            $container.addClass("progress-complete");
            $progressBar.add($progressText)
                .delay(300)
                .animate({opacity: 0},2000,function(){
                    $container.animate({opacity: '0'},1500,'easeInOutQuint').animate({top: '-100%'},1500,'easeInOutQuint');
                    $("body").addClass("active");
                });
            setInterval(function(){
                $("#section1").addClass("show");
            },3000)
            
        }
        if(current > 99.9){
            current = 100;
        };

    };
};
window.setTimeout(imagesProgress, 740);


//skrollr
var s = skrollr.init({
    edgeStrategy: 'set',
    easing: 'linear'
});

//menu
$('#toggle').click(function() {
     $('#overlay').toggleClass("show");
        if( $("#overlay").hasClass("show") ){
            $("#toggle").text("Close");
        } else {
            $("#toggle").text("Menu");
            $("#overlay").removeClass("show");
        }
});

var all = $("#overlay .column a")
var overlay = $("#overlay")
all.click(function(){
    $(overlay).toggleClass("show");
    $("#toggle").text("Menu");
});



//sec2 skill count
document.querySelectorAll('a[href^="#"]').forEach(elem => {
    elem.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(elem.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function counter() {
    if( $('.content-item .content-item-num').size() ){
        var count = $('.content-item .content-item-num');

        count.each(function () {
            var $this = $(this);    
            $this.data('target', parseInt($this.html()));  
            $this.data('counted', false);
            $this.html('0');
        });

        $(window).on('scroll', function() {
            count.each(function(i) {
                var target = $(this);
                if (!target.data('counted') && $(window).scrollTop() + $(window).height() >= target.offset().top) {
                    target.data('counted', true);
                    target.animate({
                        dummy: 1
                    }, {
                        duration: 3000,
                        step: function(now) {
                            var $this = $(this);
                            var val = Math.round($this.data('target') * now);
                            $this.html(val);
                        },
                    });
                }
            });
        })
    }
}
counter();

$(window).scroll(function(){
    let wScroll = $(window).scrollTop();
    $(".scroll").text(wScroll);

    //sec2
    if(wScroll > $("#section2").offset().top - $(window).height()/2){
        $("#section2").addClass("show");
    };

    if (wScroll >= $("h2.skill-tit").offset().top - $(window).height()/2) {
        $("h2.skill-tit").addClass("show");
    };

    if(wScroll > $(".designBox3.slide2").offset().top - $(window).height() * 0.8){
        $(".designBox3.slide2").addClass("show");
    };
    if(wScroll > $(".designBox3.slide2").offset().top - $(window).height() * 0.8){
        $(".designBox4.slide2").addClass("show");
    };
    if(wScroll > $(".designBox3.slide2").offset().top - $(window).height() * 0.8){
        $(".designBox5.slide2").addClass("show");
    };

    //sec3
    //sec3 work1
    if(wScroll > $(".site.s1").offset().top - $(window).height()* 0.4){
        $(".site.s1").addClass("show");
    };
    if(wScroll > $(".designBox1.slide3-1").offset().top - $(window).height() * 0.8){
        $(".designBox1.slide3-1").addClass("show");
    };
    if(wScroll > $(".designBox2.slide3-1").offset().top - $(window).height() * 0.8){
        $(".designBox2.slide3-1").addClass("show");
    };
    //sec3 work2
    if(wScroll > $(".site.s2").offset().top - $(window).height()/2){
        $(".site.s2").addClass("show");
    };
    if(wScroll > $(".designBox1.slide3-2").offset().top - $(window).height() * 0.6){
        $(".designBox1.slide3-2").addClass("show");
    };
    if(wScroll > $(".designBox2.slide3-2").offset().top - $(window).height() * 0.8){
        $(".designBox2.slide3-2").addClass("show");
    };
    //sec3 work3
    if(wScroll > $(".site.s3").offset().top - $(window).height()/2){
        $(".site.s3").addClass("show");
    };
    if(wScroll > $(".designBox1.slide3-3").offset().top - $(window).height() * 0.8){
        $(".designBox1.slide3-3").addClass("show");
    };
    if(wScroll > $(".designBox2.slide3-3").offset().top - $(window).height() * 0.8){
        $(".designBox2.slide3-3").addClass("show");
    };
    if(wScroll > $(".designBox3.slide3-3").offset().top - $(window).height() * 0.8){
        $(".designBox3.slide3-3").addClass("show");
    };
    //sec3 work4
    if(wScroll > $(".site.s4").offset().top - $(window).height()/2){
        $(".site.s4").addClass("show");
    };
    if(wScroll > $(".designBox1.slide3-4").offset().top - $(window).height() * 0.8){
        $(".designBox1.slide3-4").addClass("show");
    };
    if(wScroll > $(".designBox2.slide3-4").offset().top - $(window).height() * 0.8){
        $(".designBox2.slide3-4").addClass("show");
    };
    if(wScroll > $(".designBox3.slide3-4").offset().top - $(window).height() * 0.8){
        $(".designBox3.slide3-4").addClass("show");
    };
    //sec5
    if (wScroll >= $(".tact-tit").offset().top - $(window).height()/2) {
        $(".tact-tit").addClass("show");
    };
    if (wScroll >= $("#section5").offset().top - $(window).height()/2) {
        $("#section5").addClass("show");
    };

    //sec4 animation part
    let offset1_1 = (wScroll - $(".ani.n1").offset().top) *0.4;
    let offset1_2 = (wScroll - $(".ani.n1").offset().top) *0.4;
    let offset1_3 = (wScroll - $(".ani.n1").offset().top) *0.2;
    let offset1_4 = (wScroll - $(".ani.n1").offset().top) *0.3;

    $(".n1 .ani-lt").css({"transform":"translateX("+ +offset1_1+"px)"});
    $(".n1 .ani-rt").css({"transform":"translateX("+ -offset1_2+"px)"});
    $(".n1 .ani-motion").css({"transform":"translateX("+ +offset1_3+"px)"});
    $(".n1 .ani-desc").css({"transform":"translateX("+ -offset1_4+"px)"});

    let offset2_1 = (wScroll - $(".ani.n2").offset().top) *0.5;
    let offset2_2 = (wScroll - $(".ani.n2").offset().top) *0.3;
    let offset2_3 = (wScroll - $(".ani.n2").offset().top) *0.2;
    let offset2_4 = (wScroll - $(".ani.n2").offset().top) *0.4;

    $(".n2 .ani-lt").css({"transform":"translateX("+ +offset2_1+"px)"});
    $(".n2 .ani-rt").css({"transform":"translateX("+ -offset2_2+"px)"});
    $(".n2 .ani-motion").css({"transform":"translateX("+ -offset2_3+"px)"});
    $(".n2 .ani-desc").css({"transform":"translateX("+ +offset2_4+"px)"});

    let offset3_1 = (wScroll - $(".ani.n3").offset().top) *0.5;
    let offset3_2 = (wScroll - $(".ani.n3").offset().top) *0.8;
    let offset3_3 = (wScroll - $(".ani.n3").offset().top) *0.2;
    let offset3_4 = (wScroll - $(".ani.n3").offset().top) *0.2;

    $(".n3 .ani-lt").css({"transform":"translateX("+ +offset3_1+"px)"});
    $(".n3 .ani-rt").css({"transform":"translateX("+ -offset3_2+"px)"});
    $(".n3 .ani-motion").css({"transform":"translateX("+ +offset3_3+"px)"});
    $(".n3 .ani-desc").css({"transform":"translateX("+ -offset3_4+"px)"});

    let offset4_1 = (wScroll - $(".ani.n4").offset().top) *0.5;
    let offset4_2 = (wScroll - $(".ani.n4").offset().top) *0.3;
    let offset4_3 = (wScroll - $(".ani.n4").offset().top) *0.2;
    let offset4_4 = (wScroll - $(".ani.n4").offset().top) *0.4;

    $(".n4 .ani-lt").css({"transform":"translateX("+ +offset4_1+"px)"});
    $(".n4 .ani-rt").css({"transform":"translateX("+ -offset4_2+"px)"});
    $(".n4 .ani-motion").css({"transform":"translateX("+ -offset4_3+"px)"});
    $(".n4 .ani-desc").css({"transform":"translateX("+ +offset4_4+"px)"});

    let offset5_1 = (wScroll - $(".ani.n5").offset().top) *0.4;
    let offset5_2 = (wScroll - $(".ani.n5").offset().top) *0.6;
    let offset5_3 = (wScroll - $(".ani.n5").offset().top) *0.2;
    let offset5_4 = (wScroll - $(".ani.n5").offset().top) *0.3;

    $(".n5 .ani-lt").css({"transform":"translateX("+ +offset5_1+"px)"});
    $(".n5 .ani-rt").css({"transform":"translateX("+ -offset5_2+"px)"});
    $(".n5 .ani-motion").css({"transform":"translateX("+ +offset5_3+"px)"});
    $(".n5 .ani-desc").css({"transform":"translateX("+ -offset5_4+"px)"});
});