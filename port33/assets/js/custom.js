$(function(){
    //skrollr
    var s = skrollr.init({
    edgeStrategy: 'set',
    easing: 'linear'
    });

    //loading
    function loading(){
        let progress = $(".progress"),
            progressText = progress.find(".progress-text"),
            imgLoad = imagesLoaded("body"),
            imgTotal = imgLoad.images.length,
            imgLoaded = 0,
            imgCurrent = 0,
            progressTimer = setInterval(updateProgress, 1000 / 60);

            imgLoad.on("progress", function(){
                imgLoaded++;
            });

            function updateProgress(){
                let target = (imgLoaded / imgTotal)* 100;

                imgCurrent += (target - imgCurrent)* 0.1
                progressText.text(Math.floor(imgCurrent) + "%" );

                
                //이미지로딩 완료
                if(imgCurrent >= 100){
                    clearInterval(progressTimer);
                    //progress.delay(1000).animate({ top: "-110%" },400,"easeInExpo");
                    progress.delay(1000).fadeOut();
                    
                    function start(){
                        $("#section1").addClass("show");
                    }
                    setInterval(start, 2000)

                }

                if(imgCurrent > 99){
                    imgCurrent = 100;
                }
            }
    }
    loading();

    //스크롤 및 타이틀 효과
    $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    wScroll = parseInt(wScroll);
    $(".scroll").text(wScroll); 


    //    if(wScroll >= $(".sec3 .site_title").offset().top){
    //     $(".sec3 .site_title").addClass("show");
    //     $(".site_title").find("h2 span").addClass("show");
    //     }

        if(wScroll >= $(".sec3 .site_deco").offset().top){
            $(".sec3 .site_deco").addClass("show");
        }

        if(wScroll >= $(".sec5 .mobile_deco").offset().top){
            $(".sec5 .mobile_deco").addClass("show");
            //$(".mobile_title").find("h2 span").addClass("show");
        }

        if(wScroll >= $(".sec7 .ani_deco").offset().top){
            $(".sec7 .ani_deco").addClass("show");
        }

        if(wScroll >= $(".sec11 .contact_deco").offset().top){
            $(".sec11 .contact_deco").addClass("show");
        }
    });

    //타이틀 글자 나누기
    //let text = $(".site_title").find("h2 span").text().split("").join("</span><span>");
    //text = "<span>" + text + "</span>"
    //alert(text)
    //$(".site_title").find("h2 span").html(text);

    //let text2 = $(".mobile_title").find("h2 span").text().split("").join("</span><span>");
    //text2 = "<span>" + text2 + "</span>"
    //alert(text2)
    //$(".mobile_title").find("h2 span").html(text2);


    //윈도우 팝업
    $(".a_more").click(function(e){
        e.preventDefault();
        window.open("../mobile/apple/index.html", "popup", "width=400, height=800, left=50, top=50, toolbar=0, menubar=no")
    });
    $(".n_more").click(function(e){
        e.preventDefault();
        window.open("../mobile/netflix/index.html", "popup", "width=365, height=800, left=50, top=50, toolbar=0, menubar=no")
    });

  
    //audio
    var getaudio = $('#player')[0],
    mouseovertimer,
    audiostatus = 'off',
    playerControls = ".player-controls";

    $(document).on('mouseenter', playerControls, function() {
    
    if (!mouseovertimer) {
        
        mouseovertimer = window.setTimeout(function() {
            
            mouseovertimer = null;
            
            if (!$(playerControls).hasClass("playing")) {
            
            getaudio.load();
            getaudio.play();            
            $(playerControls).addClass('playing');
            return false;
            
            }
            
        }, 2500);
        
    }
    
    });

    $(document).on('mouseleave', playerControls, function() {
    
    if (mouseovertimer) {
        
        window.clearTimeout(mouseovertimer);
        mouseovertimer = null;
        
    }
    
    });

    $(document).on('click touch', playerControls, function(e) {
    
    e.preventDefault();
    
    if (!$(playerControls).hasClass("playing")) {

        if (audiostatus == 'off') {
            
            $(playerControls).addClass('playing');
            getaudio.load();
            getaudio.play();
            window.clearTimeout(mouseovertimer);
            audiostatus = 'on';
            return false;
            
        } else if (audiostatus == 'on') {
            
            $(playerControls).addClass('playing');
            getaudio.play();
            
        }
        
    } else if ($(playerControls).hasClass("playing")) {
        
        getaudio.pause();
        $(playerControls).removeClass('playing');
        window.clearTimeout(mouseovertimer);
        audiostatus = 'on';
        
    }
    
    return false;
    
    });

    $('#player').on('ended', function() {
    
    $(playerControls).removeClass('playing');
    audiostatus = 'off';
    
    });




});