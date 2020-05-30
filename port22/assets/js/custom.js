$(function(){
	imagesProgress(); //이미지 로딩 소스
	counter();
});


//skrollr
var s = skrollr.init({
    edgeStrategy: 'set',
    easing: 'linear'
});


//loading
var inputs = $(".loading-bar").find($("p") );
for(var i =0 ; i< inputs.length; i ++)
{ 
	var index = i +1;
	var time = ((inputs.length)-i ) * 50;
	$(".loading-bar p:nth-child("+index+")").css( "animation", "anim 3s "+time+"ms infinite ease-in-out" );
}

//nav button
$('.btn_wrap').click(function(){
	$('#nav').toggleClass('on');

});

//invert
$('.invert').click(function(){
	$('body').toggleClass('invert');
});

//메뉴 이동 자연스럽
$('a[href^="#"]').click(function(){
	$('#nav').removeClass('on');
	var target = $($(this).attr('href'));
	$('html,body').animate({
		scrollTop:target.offset().top 
	},600);
});


//eff06 - mouse animation

let wrapper = document.querySelector('.eff06 .code_box');

let onMouseMove = ({clientX}) => {
	let x = (clientX / innerWidth - 0.8 ) * (innerWidth / 2)

	TweenLite.to('.first_name .text_name, .second_name .text_name', 1, {
		x: x,
		ease: Sine.easeOut
	})
}
wrapper.addEventListener('mousemove', onMouseMove)


//contact star click
$('.click').click(function(){
	$('.contact').stop().fadeToggle();
});
$('.close').click(function(){
	$('.contact').stop().fadeOut();
});


//scroll text
$(window).scroll(function(){

	let wScroll = $(this).scrollTop();
	//console.log(wScroll);				

	$(".scroll_top").text(wScroll);

	if(wScroll > $("#section2").offset().top - $(window).height()/2 ){
		$("#section2").addClass("show");
	}
	
	
	if(wScroll > $(".sec3 .right_box > div").eq(0).offset().top + $(window).height()/3 ){
		$("#section3 .box01").fadeOut(500);
	}else {
		$("#section3 .box01").fadeIn(500);
	} 

	if(wScroll > $(".sec3 .right_box > div").eq(1).offset().top + $(window).height()/3 ){
		$("#section3 .box02").fadeOut(500);
	} else {
		$("#section3 .box02").fadeIn(500);
	} 

	if(wScroll > $(".sec3 .right_box > div").eq(2).offset().top + $(window).height()/3 ){
		$("#section3 .box03").fadeOut(500);
	} else {
		$("#section3 .box03").fadeIn(500);
	} 

	if(wScroll > $(".sec3 .right_box > div").eq(3).offset().top + $(window).height()/2 ){
		$("#section3 .box04").fadeOut(500);
	} else {
		$("#section3 .box04").fadeIn(500);
	} 

	if(wScroll > $("#section6").offset().top - $(window).height()/2 ){
		$("#section6").addClass("show");
		$("#footer").addClass("show");
        
	}
    
    //#section4
    if(wScroll > $("#section4").offset().top){
        $(".sec4").css( "position", "fixed" );
    }else {
        $(".sec4").css( "position", "relative" );
    }
    if(wScroll > $("#section5").offset().top - $(window).height() ){
        $(".sec4").css( "position", "relative" );
        $(".sec4").css( "top", "4400px" );
    }else {
        $(".sec4").css( "top", "0px" );
    }
	
	if(wScroll > $("#section4").offset().top - $(window).height()/2 ){
		$(".sec4_m").addClass("show");
	}
    
    //#section5
    if(wScroll > $("#section5").offset().top){
		$(".sec5").css( "position", "fixed" );
    }else {
		$(".sec5").css( "position", "relative" );
    }
    if(wScroll > $("#section6").offset().top - $(window).height() ){
		$(".sec5").css( "position", "relative" );
		$(".sec5").css( "top", "1500px");
    }else {
		$(".sec5").css( "top", "0px" );
    }

});

$(window).resize(function() {
	if ($(window).width() >= 1024){ /* 피씨 화면 */
		$('.motion').css('display', 'block');
		$('.motion2').css('display', 'none');
		$('.sec3').css('display', 'block');
		$('.sec3_m').css('display', 'none');
		$('.sec4').css('display', 'block');
		$('.sec4_m').css('display', 'none');
		$('.sec5').css('display', 'block');
		$('.sec5_m').css('display', 'none');
		skrollr.init();

	} else if (($(window).width() <= 1024)){  /* 모바일 화면 */
		skrollr.init().destroy();
		$('.motion').css('display', 'none');
		$('.motion2').css('display', 'block');
		$('.sec3').css('display', 'none');
		$('.sec3_m').css('display', 'block');
		$('.sec4').css('display', 'none');
		$('.sec4_m').css('display', 'block');
		$('.sec5').css('display', 'none');
		$('.sec5_m').css('display', 'block');
		
	}
});


// skill counter
function counter() {
    if ($('.skill .count').size()) {
        $c = $('.skill .count');

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
					
					$('.sk01').easyPieChart({
                        barColor: '#d4c1a2',
						trackColor: '#eaedef',
						scaleColor: false,
						lineWidth: 10,
						size: 250,
						lineCap: 'round',
						animate: { duration: speed, enabled: true }
					});
                    
                    $('.sk02').easyPieChart({
                        barColor: '#b9b2a6',
                        trackColor: '#eaedef',
                        scaleColor: false,
                        lineWidth: 10,
                        size: 250,
                        lineCap: 'round',
                        animate: { duration: speed, enabled: true }
                    });
                    
                    $('.sk03').easyPieChart({
                        barColor: '#d4c1a2',
                        trackColor: '#eaedef',
                        scaleColor: false,
                        lineWidth: 10,
                        size: 250,
                        lineCap: 'round',
                        animate: { duration: speed, enabled: true }
                    });
                    
                    $('.sk04').easyPieChart({
                        barColor: '#b9b2a6',
                        trackColor: '#eaedef',
                        scaleColor: false,
                        lineWidth: 10,
                        size: 250,
                        lineCap: 'round',
                        animate: { duration: speed, enabled: true }
                    });
					
                }
            });
			
        }).triggerHandler('scroll');
    }
}

//imageProgress
function imagesProgress(){
    var $container = $('#progress'),
        $progressBar = $container.find('.progress-bar'),
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
        $progressBar.css({ width: current + '%' });
        $progressText.text( Math.floor(current) + '%' );

        if(current >= 100){
            clearInterval(progressTimer);
            $container.addClass('progress-complete');
            $progressBar.add($progressText)
                .delay(1000)
                .animate({opacity: 0},function(){
                    $container.fadeOut();
                });
                $('body').addClass('active');
        }
        if(current > 99.9){
            current = 100;
        }
    }	
}