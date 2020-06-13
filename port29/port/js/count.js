//fixed menu
         $('#toggle').click(function() {
            $(this).toggleClass("active");
        $('#overlay').toggleClass("show");
        });

         var all = $(".overlay-menu li a")
         var home = $(".overlay-menu .menu1 a")
         var about = $(".overlay-menu .menu2 a")
         var work = $(".overlay-menu .menu3 a")
         var contact = $(".overlay-menu .menu4 a")
         var overlay = $(".overlay")

         home.mouseover(function(){
            $(all).css("color","#3366ff")
            $(overlay).addClass("white");
         });
         home.mouseout(function(){
            $(all).css("color","#fff")
            $(overlay).removeClass("white");
         });

         about.mouseover(function(){
            $(overlay).addClass("blue");
         });
         about.mouseout(function(){
            $(overlay).removeClass("blue");
         });

         work.mouseover(function(){
            $(all).css("color","#00ff33")
         });
         work.mouseout(function(){
            $(all).css("color","#fff")
         });

         contact.mouseover(function(){
            $(overlay).addClass("red");
         });
         contact.mouseout(function(){
            $(overlay).removeClass("red");
         });



        //skrollr
        var s = skrollr.init({
            edgeStrategy: 'set',
            easing: 'linear'
        });
        
        //scroll
        $(window).scroll(function(){
            let wScroll = $(this).scrollTop();
            let sec3 = $("#section3 .sec3").offset().top;
            let sec4 = $("#section4 .sec4").offset().top;
            let text1 = $(".atit .text1").offset().top;
            let text2 = $(".atit .text2").offset().top;
            let aimg = $(".sec2_1 .aimg").offset().top;
            let atit = $(".sec2_1 .atit").offset().top;

            $(".scroll").text(wScroll);
           //$(".menu_work").css('transform','translate(' + wScroll + '%, -50%)');

           //about menu
           if(wScroll >= 1800){
                $(".opc1").addClass("off");
            } else if(wScroll < 1800){
                $(".opc1").removeClass("off");
            }
            if(wScroll >= 1900){
                $(".about").addClass("right");
            } else if(wScroll < 1900){
                $(".about").removeClass("right");
            }
            
            //work menu
            if(wScroll >= sec3){
                $(".opc2").addClass("off");
            } else if(wScroll < sec3){
                $(".opc2").removeClass("off");
            }
            if(wScroll >= sec3){
                $(".Work").addClass("center");
            } else if(wScroll < sec3){
                $(".Work").removeClass("center");
            }
            
            //contact menu
            if(wScroll >= 46700){
                $(".opc3").addClass("off");
            } else if(wScroll < 46700){
                $(".opc3").removeClass("off");
            }
            if(wScroll >= 46800){
                $(".Contact").addClass("left");
            } else if(wScroll < 46800){
                $(".Contact").removeClass("left");
            }

            //section2
            if(wScroll >= text1 - $(window).height()/2){
                $(".atit .text1 span").addClass("up");
            }
              if(wScroll >= text2- $(window).height()/2){
                $(".text2_1").addClass("show");
            }
            
            //section3 fixed
            if( wScroll >= $("#section3").offset().top ){
                $("#section3 .sec3").addClass("pos");
            } else {
                $("#section3 .sec3").removeClass("pos");
            }

            //section4 opacity1,fixed 
            if( wScroll >= 45000 ){
                $("#section4").addClass("opc");
            } else {
                $("#section4").removeClass("opc");
            }

            if( wScroll >= 45000 ){
                $("#section4 .sec4").addClass("pos");
            } else {
                $("#section4 .sec4").removeClass("pos");
            }

            if( wScroll >= 46500 ){
                $("#section4 .sec4_1").addClass("pos");
            } else {
                $("#section4 .sec4_1").removeClass("pos");
            }
            
            if ( wScroll > 27000 ){
                $(".main_text h1").addClass("show");
            } else {
                $(".main_text h1").removeClass("show");
            }

        });
        
        //counter
        function counter() {
            if( $('.skill .count').size() ){
                var count = $('.skill .count');

                count.each(function () {
                    var $this = $(this);
                    $this.data('target', parseInt($this.html()));
                    $this.data('counted', false);
                    $this.html('0');
                });

                $(window).on('scroll', function () {
                    var speed = 3000;

                    count.each(function (i) {
                        var target = $(this);
                        if (!target.data('counted') && $(window).scrollTop() + $(window).height() >= target.offset().top) {
                            target.data('counted', true);
                            target.animate({
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

                           
                        }
                    });
                })
            }
        }
        counter();