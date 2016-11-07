
$("document").ready(function() {
  game = new Game();
  console.log(game);
  $("#bowl").click(function() {
    game.play();
  });
});