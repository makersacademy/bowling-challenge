var game = new Game();
var pointsArr = [];


$( document ).ready(function() {

  $( "#startGame" ).click(function(event){
    event.preventDefault();
    $( ".duringGame" ).css({"display": "block"});
    $( ".beforeGame" ).css({"display": "none"});
  });

  $( "#submit" ).click(function(event){
    event.preventDefault();
    var currentPoints = $("#numberInput").val();
    console.log(currentPoints);
    game.start(currentPoints);
  });

});
