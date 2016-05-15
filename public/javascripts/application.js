$(document).ready(function($){

  var scorer = new Scorer();
  var game = new Game(scorer);
  var framePosition, frameNumber;

  framePosition = getFramePosition();
  frameNumber = game.frameNumber()-1;
  updateButtons(game._scorer.state, game._scorer.firstBallInFrame);

  $("body").delegate(".btn-round", "click", function(){
    var ballRolled = Number($(this).val());
    game._scorer.roll(ballRolled);
    
    // Display buttons during the game or the Game Over message
    if (game.isOver()){
      $('#buttons').html('<h1>Game Over</h1><h3>Want to play again? Click <a href="/">here</a></h3>');
    } else {
      updateButtons(game._scorer.state, game._scorer.firstBallInFrame);
    }
    
    // Update Dashboard
    updateRollsOnFrame();
    updateFrameScores();
    updateTotalScore();
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
    $('#buttons').html(buttonHTML);
  }

  function updateRollsOnFrame() {
    var i = 0;
    var position = 0;
    while(i < game._scorer.rolls.length){
      if (game._scorer.rolls[i] < 10){
        //In case of spare in the last frame
        if (i === game._scorer.rolls.length - 1){
          if (game._scorer.rolls[i] !== 10){
            $('#score-table tr:eq(1) td:eq(' + position + ')').html(game._scorer.rolls[i]);
          } else {
            //In case of strike in the last roll
            $('#score-table tr:eq(1) td:eq(' + position + ')').html('X');
          }
        } else {
          if (game._scorer.rolls[i] + game._scorer.rolls[i+1] === 10){
            $('#score-table tr:eq(1) td:eq(' + position + ')').html(game._scorer.rolls[i]); 
            $('#score-table tr:eq(1) td:eq(' + (position+1) + ')').html('/'); 
          } else {
            $('#score-table tr:eq(1) td:eq(' + position + ')').html(game._scorer.rolls[i]); 
            $('#score-table tr:eq(1) td:eq(' + (position+1) + ')').html(game._scorer.rolls[i+1]);
          }
        }
        if (i < game._scorer.rolls.length) { 
          i += 2;
          position += 2;
        }
      } else {
        // Special case for last frame
        if (position >= 18){
          $('#score-table tr:eq(1) td:eq(' + (position--) + ')').html('X');  
        } else {
          $('#score-table tr:eq(1) td:eq(' + position + ')').html('X');
        }
        i += 1;
        position += 2;
      }
    }
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

  function updateTotalScore(){
    $("#totalScore").text(game._scorer.totalScore);
  }

});