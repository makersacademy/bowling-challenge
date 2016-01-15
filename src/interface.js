$(document).ready(function() {
  var game = new Game();

  $('#totalscore').text(game._score);

  $('#btn0').on('click', function(){
    frame.bowl(0);
    $("#frame1roll" + frame._currentRoll).text(frame.currentRollScore());
  });
});
