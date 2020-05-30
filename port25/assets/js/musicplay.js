//Pause/play, and adjust volume

function play() {
  document.getElementById("music").play();
  $(".play").hide();
  $(".pause").show();
}

function pause() {
  document.getElementById("music").pause();
  $(".play").show();
  $(".pause").hide();
}

$(function() {
  var $aud = $("#music"),
    $vol = $('#volume'),
    AUDIO = $aud[0];
  AUDIO.volume = 100;
  // $vol.slider({
  //   value: AUDIO.volume * 100,
  //   slide: function(ev, ui) {
  //     $vol.css({
  //       background: "hsla(180," + ui.value + "%,50%,1)"
  //     });
  //     AUDIO.volume = ui.value / 100;
  //   }
  // });
});