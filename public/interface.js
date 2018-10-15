$(document).ready(function(){
  var game = new Game();
  $("#enter-throw").submit(function(){
    event.preventDefault();
    game.addThrow($("#next-throw").val());
    $(game.currentBowl).text($("#next-throw").val());
    game.nextBowl();
  });
});
