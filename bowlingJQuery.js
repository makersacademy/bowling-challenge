
$( document ).ready(function() {
  game = new Game();
  score = new Score();

  $ ("#totalScore").text(score.runningScore);

  $ ("#play").click(function() {
    score.calculateScore(game.play());
    $ ("#frames").text(game.frames);
    $ ("#frame-1").text(game.frames[0]);
    $ ("#frame-2").text(game.frames[1]);
    $ ("#frame-3").text(game.frames[2]);
    $ ("#frame-4").text(game.frames[3]);
    $ ("#frame-5").text(game.frames[4]);
    $ ("#frame-6").text(game.frames[5]);
    $ ("#frame-7").text(game.frames[6]);
    $ ("#frame-8").text(game.frames[7]);
    $ ("#frame-9").text(game.frames[8]);
    $ ("#frame-10").text(game.frames[9]);
    $ ("#totalScore").text(score.runningScore);
  });

  // $ ("#reset").click(function() {
  //   play.resetGame();
  // });

});
