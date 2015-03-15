var game = new Game();

$(document).ready(function (){

  $('#button-6').click(function(){
    game.hitPinsFirstTry();
    game.hitPinsSecondTry();
    game.sumFirstSecondTries();
  $(".frame-1").html("6");
  });

});
