document.querySelectorAll("a[href^='#']").forEach(elem => {
    elem.addEventListener('click', e => {
        e.preventDefault();
        const scr = document.querySelectorAll(elem.getAttribute("href"))
        document.querySelector(elem.getAttribute("href")).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$(".ham").click(function () {
    $(this).toggleClass("active");
});


// mouse cursor
const cursor = $(".cursor");
const follow = $(".cursor-follower");
let mouseX = 0, //마우스 X축 좌표값
    mouseY = 0, //마우스 Y축 좌표값
    postionX = 0,
    postionY = 0;

$("body, html").mousemove(function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;

    cursor.css({
        left: mouseX - 5,
        top: mouseY - 5
    });
    follow.css({
        left: mouseX - 15,
        top: mouseY - 15
    });
});

$(".hover").on("mouseenter", "a", function () {
    cursor.addClass("active");
    follow.addClass("active");
});

$(".hover").on("mouseleave", "a", function () {
    cursor.removeClass("active");
    follow.removeClass("active");
});


//counter
function counter() {
    if ($('.skill .count').size()) {
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

// top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.top_btn').fadeIn();
    } else {
        $('.top_btn').fadeOut();
        $(".top_bubble").fadeOut();
    }
});

$('.top_btn').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
    return false;
});

$(".top_btn").on("mouseover", function () {
    $(".top_bubble").stop().fadeIn();
});

$(".top_btn").on("mouseout", function () {
    $(".top_bubble").stop().fadeOut();
});


// 
$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    $(".scroll").text(wScroll);
});

var leftText = $(".leftText");
var rightText = $(".rightText");
var x = 0;
var y = 0;
var folloxX = 0;
var folloxY = 0;
var friction = 1 / 10;

function animate() {
    x += (folloxX - x) * friction;
    y += (folloxY - y) * friction;

    leftText.css({
        'transform': 'translateX(' + -x + '%)'
    });
    rightText.css({
        'transform': 'translateX(' + x + '%)'
    });
    window.requestAnimationFrame(animate);
}

$(window).on('mousemove click', function (e) {
    var iMouseX = Math.max(-80, Math.min(80, $(window).width() / 2 - e.clientX));
    var iMouseY = Math.max(-80, Math.min(80, $(window).height() / 2 - e.clientY));
    folloxX = (12 * iMouseX) / 100;
    folloxY = (12 * iMouseY) / 100;
});
animate();

// work popup
function openPop() {
    window.open("http://ssung9075.dothome.co.kr/mobile2/apple/index.html", "_blank", "resizable=yes,top=200,left=750,width=400,height=700");
}

function openPop2() {
    window.open("http://ssung9075.dothome.co.kr/loud/index.html", "_blank", "resizable=yes,top=200,left=750,width=400,height=700");
}

//skrollr
// var s = skrollr.init({
//     edgeStrategy: 'set',
//     easing: 'linear'
// });