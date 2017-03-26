
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
    $ ("#frame-11").text(game.frames[10]);
    $ ("#totalScore").text(score.runningScore);
  });

  $ ("#reset").click(function() {
    game.resetGame();
    $ ("#frame-1").text(" ");
    $ ("#frame-2").text(" ");
    $ ("#frame-3").text(" ");
    $ ("#frame-4").text(" ");
    $ ("#frame-5").text(" ");
    $ ("#frame-6").text(" ");
    $ ("#frame-7").text(" ");
    $ ("#frame-8").text(" ");
    $ ("#frame-9").text(" ");
    $ ("#frame-10").text(" ");
    $ ("#frame-11").text(" ");
    $ ("#totalScore").text(score.runningScore);
  });

});
