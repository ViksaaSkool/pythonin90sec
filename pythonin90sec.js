var hissingAnimation
var typeWritter


/* Audio related */
function letsGo() {
  var hissingSound = document.getElementById("pythonHissing")
  if (!isHissingAudioPlaying(hissingSound)) {
    startTypewrittig();
    showSoundIcon();
    hissingSound.play();
    startHissing()
    scrollToHiss();
    hissingSound.onended = function() {
      stopHissing();
      showShare();
      stopTypewrittig()
    };
  }
}

function okGotIt() {
  var hissingSound = document.getElementById("pythonHissing")
  if (isHissingAudioPlaying(hissingSound)) {
    hissingSound.pause();
    stopHissing()
    stopTypewrittig()
    $("#soundOn").removeClass().addClass("soundOn");
  }
  showShare();
}

function isHissingAudioPlaying(sound) {
  return !sound.paused
}


/* Logo related */
function startHissing() {
  if (typeof hissingAnimation != 'undefined') {
    clearInterval(hissingAnimation)
  }
  hissingAnimation = setInterval(() => $("#mainLogo").toggleClass("logoHiss"), 200);
}

function stopHissing() {
  if (typeof hissingAnimation != 'undefined') {
    clearInterval(hissingAnimation)
  }
  $("#mainLogo").removeClass().addClass("logoRegular");
}

function goToGithub() {
  window.open("https://github.com/ViksaaSkool", '_blank').focus();
}

function showSoundIcon() {
  $('#soundOn').fadeIn(1000, function() {
    $(this).fadeOut(1500);
  });
}

function showShare() {
  $('#share').fadeIn(1500).slideDown(1500);
}

function scrollToHiss() {
  document.getElementById("#typewriterText").scrollIntoView()
}

function startTypewrittig() {
  typeWritter = new Typed('#typed', {
    strings: ['Hisssss psss hsss'],
    typeSpeed: 75,
    backSpeed: 10,
    bindInputFocusEvents: true,
    loop: true,
    cursorChar: '_',
  });
  typeWritter.start();
}

function stopTypewrittig() {
  if (typeof typeWritter != 'undefined') {
    typeWritter.destroy();
  }

}
