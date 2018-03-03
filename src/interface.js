$(document).ready(function (){
  var game = new Game();
  $('.test').text("Bowling game is ready");
  $( '#temperature-up' ).click(function() {
    $('.test').text("Read steady cook");
  });

});
