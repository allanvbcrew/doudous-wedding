
$(function(){
$("#eng").click(function(){
  $(".french").fadeOut();
   $(".english").fadeIn();
});
$("#fr").click(function(){
   $(".english").hide();
  $(".french").show();
});
});