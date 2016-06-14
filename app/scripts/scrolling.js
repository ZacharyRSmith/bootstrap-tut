$(function () {
  $(window).on("load resize", function () {
    $(".fill-screen").css("height", window.innerHeight);
  });

  $('body').scrollspy({
    target: '.navbar',
    offset: 130
  });

  $('nav a, .down-button a').bind('click', function () {
    // animate both html and body to cover all browsers
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top - 100
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  $(window).stellar();
});
