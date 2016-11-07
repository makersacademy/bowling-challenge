
$("document").ready(function() {
  game = new Game();
  game.randomAngle();
  $("#bowl").click(function() {
    game.play();
    game.randomAngle();
  });
});