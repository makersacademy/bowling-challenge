$(document).ready(function() {
  var game = new Game();
  var frame = new Frame();

  $("#bowl-second-ball-btn").hide();

  $("#frame-number").html(game.checkAllScores().length + 1);
  $("#max-frames").html(game.checkGameLength());

  $("#bowl-first-ball-btn").click(function() {
    var pins = 10;
    var bowledPins = Math.floor(Math.random() * pins) + 1;
    var remainingPins = pins - bowledPins;
    console.log("bowled over:", bowledPins);
    console.log("still standing:", remainingPins);
    console.log(game._frames);
    frame.bowlFirstBall(bowledPins);
    $("#bowl-first-ball-btn").hide();
    $("#bowl-second-ball-btn").show();
    $('#bowled-pins').html(bowledPins);
    $('#remaining-pins').html(remainingPins);
  });

  $("#bowl-second-ball-btn").click(function() {
    var remainingPins = 10 - frame.firstBall();
    console.log("still standing ready to be hit:", remainingPins);
    var bowledPins = Math.floor(Math.random() * remainingPins) + 1;
    var missedPins = remainingPins - bowledPins;
    console.log("bowled over:", bowledPins);
    console.log("missed pins:", missedPins);
    frame.bowlSecondBall(bowledPins);
    $("#frame-number").html(game.checkAllScores().length + 2);
    game.addFrame(frame);
    frame = new Frame();
    $("#bowl-first-ball-btn").show();
    $("#bowl-second-ball-btn").hide();
    $('#bowled-pins').html(bowledPins);
    $('#remaining-pins').html(missedPins);
  });

});
