window.onload = function() {

};

$(document).ready( function() {
  // alert("WELCOME TO PIN BOWLING GAME!!");
  var bowling = new Bowling ();

$('.rollpin').submit(function(e){
  e.preventDefault();
  var value = $('.enterpin').val();
  console.log(value);

  $('.roll1').text(value);
  $('.roll2').text(value);






})


















})
