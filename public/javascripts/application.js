$(document).ready(function(){
  // updateRollDislay(1,0,"X");
  // updateRollDislay(0,1,"8");
  // updateGameScoreDisplay(0);
  var scorer = new Scorer();
  var game = new Game(scorer);
  var framePosition, frameNumber;

  framePosition = getFramePosition();
  frameNumber = game.frameNumber()-1;
  updateButtons(game._scorer.state, game._scorer.firstBallInFrame);
  updateDashboard();
  $("body").delegate(".btn-round", "click", function(){
    var ballRolled = Number($(this).val());
    game._scorer.roll(ballRolled);
    
    if (game.isOver()){
      $('#buttons').html('');
    } else {
      updateButtons(game._scorer.state, game._scorer.firstBallInFrame);
    }
    
    updateRollsOnFrame(framePosition, frameNumber, formatRolledBall(ballRolled));
    updateFrameScores();
    updateDashboard();
    framePosition = getFramePosition();
    frameNumber = game.frameNumber()-1;
  });


  function updateButtons(state, b) {
    if (state === "BALL_2" || state === "STRIKE_2") {
      buttons(b);
    } else {
      buttons(0);    
    }
  }

  function buttons(pins) {
    var buttonHTML = '';
    for (var i = 0; i < (11 - pins); i++) {
      buttonHTML += '<button type="button" class="btn-round" value="' + i + '">' + i + '</button>';
    }
    console.log(buttonHTML);
    $('#buttons').html(buttonHTML);
  }

// position [0 or 1]
// displayContent ["/", "X" or number]
  function updateRollsOnFrame(position, frame, content) {
    $('#score-table tr:eq(1) td:eq(' + ((frame * 2) + position) + ')').html(content);
  }

  function updateFrameScores() {
    for (var i = 0; i < game._scorer.frameScores.length; i++){
      $('#score-table tr:eq(2) td:eq(' + i + ')').html(game._scorer.frameScores[i]);
    }
  }

  function getFramePosition(){
    if (game._scorer.state === "BALL_2" || game._scorer.state === "STRIKE_2") {
      return 1;
    } else {
      return 0;   
    }
    if(game.frameNumber() >= 10){
      if(game._scorer.state === "STRIKES_X2"){
        return 1;
      }else if (game._scorer.state === "SPARE_1" || game._scorer.state === "STRIKE_2") {
        return 2;
      }
    }
  }

  function formatRolledBall(b){
    if (b === 10) {
      return 'X';
    } else if(b + game._scorer.firstBallInFrame === 10){
      return '/';
    } else {
      return b;
    }
  }

  function updateDashboard(){
    $("#state").text(game._scorer.state);
    $("#frame-number").text(game.frameNumber());
    $("#frame-scores").text(game._scorer.frameScores);
    $("#balls-rolled").text(game._scorer.rolls);
    $("#rolling-frame").text(game._scorer.rollingFrame);
    $("#totalScore").text(game._scorer.totalScore);
    $("#first-ball").text(game._scorer.firstBallInFrame);
    $("#game-over").text(game.isOver());
  }

});