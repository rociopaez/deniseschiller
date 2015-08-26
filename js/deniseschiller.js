$(document).ready(function() {
  $('a[href="' + document.location.pathname + '"]').parent().addClass('active');

  // var seconds = 5000;
  // var step = 0;
  // var limit = 5;
  //
  // $("body").addClass("image-"+step).fadeIn(500);
  //
  // setInterval(function() {
  //   $("#Background").fadeOut(500,function(){
  //      $(this).removeClass("image-"+step);
  //      step = (step > limit) ? 0 : step + 1;
  //     $("#Background").addClass("image-"+step).fadeIn(500);
  //   });
  // },seconds);
});
