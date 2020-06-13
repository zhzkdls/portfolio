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

all.click(function(){
    $(overlay).removeClass("show");
    $('#toggle').removeClass("active");
});

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


//counter
function counter() {
    if( $('.skills .count').size() ){
        var count = $('.skills .count');

        count.each(function () {
            var $this = $(this);
            $this.data('target', parseInt($this.html()));
            $this.data('counted', false);
            $this.html('0');
        });

        $(window).on('scroll', function () {
            var speed = 2000;

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
