$(function(){
            imagesProgress(); 
            counter();      
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
			}
			if(current > 99.9){
				current = 100;
			};
			
		};
	};
	window.setTimeout(imagesProgress, 740);


//마우스
var leftText = $(".leftText");
var rightText = $(".rightText");
var x = 0;
var y = 0;
var folloxX = 0;
var folloxY = 0;
var friction = 1/10;

function animate(){
    x += (folloxX - x) * friction;
    y += (folloxY - y) * friction;

    leftText.css({'transform': 'translateX('+ -x +'%)'});
    rightText.css({'transform': 'translateX('+ x +'%)'});
    window.requestAnimationFrame(animate);
}

$(window).on('mousemove click',function(e){
    var iMouseX = Math.max(-100, Math.min(100, $(window).width()/2 - e.clientX));
    var iMouseY = Math.max(-100, Math.min(100, $(window).height()/2 - e.clientY));
    folloxX = (12 * iMouseX) / 100;
    folloxY = (12 * iMouseY) / 100;
});

animate();

//섹션4 스크롤값
$(window).on('scroll', function(){
    var wScroll = $(this).scrollTop();
    var offset1 = wScroll - $("#section4").offset().top;

//사이트 스크롤값
    var offset2 = wScroll - $("#section5").offset().top;
    var offset10 = (wScroll  - $(".acc .square").offset().top) * 0.2 ;
    var offset11 = (wScroll  - $(".acc .pentagon").offset().top) * 0.4 ;
    var offset12 = (wScroll  - $(".acc .door").offset().top) * 0.3 ;
    var offset13 = (wScroll  - $(".mockup em.face").offset().top) * 0.2 ;
    var offset13 = (wScroll  - $(".mockup em.side").offset().top) * 0.2 ;
    
    
    var offset14 = (wScroll  - $(".acc .pyramid").offset().top) * 0.2 ;
    var offset15 = (wScroll  - $(".acc .square2").offset().top) * 0.4 ;
    var offset16 = (wScroll  - $(".acc .triangle2").offset().top) * 0.3 ;
    
    
    var offset17 = (wScroll  - $(".acc .jewelry").offset().top) * 0.2 ;
    var offset18 = (wScroll  - $(".acc .hourglass").offset().top) * 0.4 ;
    var offset19 = (wScroll  - $(".acc .hexagon").offset().top) * 0.3 ;
    
    var offset20 = (wScroll  - $(".acc .cylindrical").offset().top) * 0.2 ;
    var offset21 = (wScroll  - $(".acc .jewelry2").offset().top) * 0.4 ;
    var offset22 = (wScroll  - $(".acc .square3").offset().top) * 0.3 ;
    
    var offset23 = (wScroll  - $(".acc .heart3").offset().top) * 0.2 ;
    var offset24 = (wScroll  - $(".acc .star").offset().top) * 0.1 ;
    var offset25 = (wScroll  - $(".acc .circle").offset().top) * 0.2 ;
    var offset26 = (wScroll  - $(".acc .pattern").offset().top) * 0.1 ;
    
    
//섹션4 스크롤값
    $(".sec4 .sec4-skill .slideWrap-left").css("transform","translateX("+offset1+"px)");
    $(".sec4 .sec4-skill .slideWrap-right").css("transform","translateX("+ -offset1+"px)");
    
//사이트 스크롤값
    $(".acc .square").css("transform","translateY("+offset10+"px)");
    $(".acc .pentagon").css("transform","translateY("+offset11+"px)");
    $(".acc .door").css("transform","translateY("+offset12+"px)");
    $(".mockup em.face").css("transform","translateY("+offset13+"px)");
    $(".mockup em.side").css("transform","translateY("+offset13+"px)");
    
    $(".acc .pyramid").css("transform","translateY("+offset14+"px)");
    $(".acc .square2").css("transform","translateY("+offset15+"px)");
    $(".acc .triangle2").css("transform","translateY("+offset16+"px)");
    
    $(".acc .jewelry").css("transform","translateY("+offset17+"px)");
    $(".acc .hourglass").css("transform","translateY("+offset18+"px)");
    $(".acc .hexagon").css("transform","translateY("+offset19+"px)");
    
    $(".acc .cylindrical").css("transform","translateY("+offset20+"px)");
    $(".acc .jewelry2").css("transform","translateY("+offset21+"px)");
    $(".acc .square3").css("transform","translateY("+offset22+"px)");
    
    $(".acc .heart3").css("transform","translateY("+offset23+"px)");
    $(".acc .star").css("transform","translateY("+offset24+"px)");
    $(".acc .circle").css("transform","translateY("+offset25+"px)");
    $(".acc .pattern").css("transform","translateY("+offset26+"px)");
    
    if( wScroll > $("#section1").offset().top / 3 ){
        $("#section1").addClass("show");
    }
    if( wScroll > $("#section2").offset().top / 3 ){
        $("#section2").addClass("show");
    }
    if( wScroll > $("#section3").offset().top / 3 ){
        $("#section3").addClass("show");
    }
    if( wScroll > $("#section4").offset().top / 3 ){
        $("#section4").addClass("show");
    }
    if( wScroll > $("#section5").offset().top / 3 ){
        $("#section5").addClass("show");
    }
    if( wScroll > $("#section6").offset().top / 3 ){
        $("#section6").addClass("show");
    }
    if( wScroll > $("#section7").offset().top / 3 ){
        $("#section7").addClass("show");
    }
    if( wScroll > $("#section8").offset().top / 3 ){
        $("#section8").addClass("show");
    }
    if( wScroll > $("#section9").offset().top / 3 ){
        $("#section9").addClass("show");
    }
    if( wScroll > $("#section10").offset().top / 3 ){
        $("#section10").addClass("show");
    }
    
    
 
});












