        
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