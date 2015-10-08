console.log("Working")

var game = new Game();

$(document).ready(function() {

  $("#score").text(game.score);
  $("#frameNumber").text(game.frameNumber);

  $("#reset").click(function() {
    location.reload();
  });

  $("#hit1").click(function() {
    game.rollBall(1);
    $("#score").text(game.score);
    $("#frameNumber").text(game.frameNumber);
  });

  $("#hit2").click(function() {
    game.rollBall(2);
    $("#score").text(game.score);
    $("#frameNumber").text(game.frameNumber);
  });

  $("#hit3").click(function() {
    game.rollBall(3);
    $("#score").text(game.score);
    $("#frameNumber").text(game.frameNumber);
  });

  $("#hit4").click(function() {
    game.rollBall(4);
    $("#score").text(game.score);
    $("#frameNumber").text(game.frameNumber);
  });

  $("#hit5").click(function() {
    game.rollBall(5);
    $("#score").text(game.score);
    $("#frameNumber").text(game.frameNumber);
  });

  $("#hit6").click(function() {
    game.rollBall(6);
    $("#score").text(game.score);
    $("#frameNumber").text(game.frameNumber);
  });

  $("#hit7").click(function() {
    game.rollBall(7);
    $("#score").text(game.score);
    $("#frameNumber").text(game.frameNumber);
  });

  $("#hit8").click(function() {
    game.rollBall(8);
    $("#score").text(game.score);
    $("#frameNumber").text(game.frameNumber);
  });

  $("#hit9").click(function() {
    game.rollBall(9);
    $("#score").text(game.score);
    $("#frameNumber").text(game.frameNumber);
  });

  $("#hit10").click(function() {
    game.rollBall(10);
    $("#score").text(game.score);
    $("#frameNumber").text(game.frameNumber);
  });
});
