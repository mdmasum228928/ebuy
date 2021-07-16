// js starts 5.19.(+-second)
$(function(){
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 100){
      $(".navbar").addClass("bg");
    }
    else{
      $(".navbar").removeClass("bg");
    }
  });


// type js ends 5.39.15 second
  var typed = new Typed('.type', {
    strings: [
      'DESIGNER',
      'DEVELOPER', 
      'FREELANCER'],
      typeSpeed: 100,
      loop:true,
  });


});