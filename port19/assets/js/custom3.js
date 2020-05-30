//skrollr
        var s = skrollr.init({
            edgeStrategy: 'set',
            easing: 'linear'
        });
        let lastScrollTop = 0;                      //현재 스크롤 값(제일 마지막 스크롤 값)
        let roadLength = $("#Vcontents").width();    //전체 가로값
//        $("body").css("height", roadLength);        //섹션 전체 가로값을 body에 높이 값에 할당
        $(window).scroll(function(){
            let wScroll = $(window).scrollTop();
            let wWidth = $(window).width();
            let wHeight = $(window).height();
            let dHeight = $("body").height() - wHeight;
            let wRoad = roadLength - wWidth;
            let step = wRoad/dHeight;
            let goLeft = wScroll * step;
            
            $(".scroll").text(wScroll)
            $("#Vcontents").css({ "transform":"translateX(-"+goLeft+"px)"});
        //
            
//            if( wScroll >= $(".sec7").offset().top){
//                $(".sec7 .text h3").addClass(".effect");
//            }
        });
        
        //chart pie counter
        function counter(){
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
                        if (!$t.data('counted') && $(window).scrollTop() + $(window).height() >= $(".Vsec6").offset().top) {

                            $t.data('counted', true);

                            $t.animate({
                                dummy: 1
                            }, {
                                duration: speed,
                                step: function (now) {
                                    var $this = $(this);
                                    var val = Math.round($this.data('target') * now);
                                    $this.html(val);
                                }
                            });

                            // easy pie
                            $('.chart').easyPieChart({
                                barColor: '#000',
                                trackColor: '#fff',
                                scaleColor: '#696969',
                                scaleLength: 5,
                                lineWidth: 5,
                                size: 250,
                                lineCap: 'round',
                                animate: { duration: speed, enabled: true }
                            });
                        }
                    });
                }).triggerHandler('scroll');
            }
        }
        counter();