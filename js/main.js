$(function(){
    $("#ac-menu .label").on("click", function() {
      $(this).next().slideToggle();
      $(this).toggleClass("open");
    });
  });

$(function(){
  $('a[href^="#"]').click(function(){
    let adjust = -130;
    let speed = 300;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top + adjust;
    $('body,html').animate({
      scrollTop:position
    }, speed, 'swing');
    return false;
  });
});