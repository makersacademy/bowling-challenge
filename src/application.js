$(document).ready(function() {
  game = new Game(Frame, LastFrame);

  $('#game_score').text(game.gameScore);
  $('#new_game').hide();

  $(".pin").hover(
    function () {
      var number = parseInt($.trim($(this).text()));
      $("#pin_outline_" + number).css({"border-color": "#c80002"});
      $("#pin_stripe_1_" + number).css({"border-color": "#c80002"});
      $("#pin_stripe_2_" + number).css({"border-color": "#c80002"});
      $("#pin_number_" + number).css({"color": "#c80002"});
    },
    function () {
      var number = parseInt($.trim($(this).text()));
      $("#pin_outline_" + number).css({"border-color": "black"});
      $("#pin_stripe_1_" + number).css({"border-color": "black"});
      $("#pin_stripe_2_" + number).css({"border-color": "black"});
      $("#pin_number_" + number).css({"color": "black"});
    }
  );

  $('.pin').click(function() {

    $('#score_text').text("Score: ")
    var pins = parseInt($.trim($(this).text()));
    game.bowl(pins);
    hideOrShowPins(pins);
    scoreCardFormatting();
    game.calculateScore();
    if(game.isGameOver()) {
      gameOverTransition();
    };
    updateGameScore();
  });  

  hideOrShowPins = function(pins) {
    if(game.frames[game.currentFrame].frameRolls[0] != null){
      hideRelevantPins(pins);
    } else {
      showAllPins();
    };
    if(game.frames[9].frameRolls[0] == 10) {
      showAllPins();
    };
  };

  hideRelevantPins = function(pins) {
    for(i = 10; i > (10 - pins); i--){
      $('#pin_outline_' + i).hide();
    };
  };

  showAllPins = function() {
    for(i = 0; i <= 10; i++){
      $('#pin_outline_' + i).show();
    };
  };

  scoreCardFormatting = function() {
    for(i = 0; i <= game.currentFrame; i++) {
      updateScoreBoxes();
      $('#frame_score_' + i).show();
      hideFrameScoreBoxIfStrikeOrSpare();
      updateFrameScoreBox();
    };
    if(game.currentFrame == 9) {
      finalFrameFormatting();
    };
  };

  updateScoreBoxes = function() {
    $('#score_box_' + i + '_1').text(game.frames[i].frameRolls[0]);
    strikeReplace();
    $('#score_box_' + i + '_2').text(game.frames[i].frameRolls[1]);
    spareReplace();
  };

  strikeReplace = function() {
    if(game.frames[i].strike){
      $('#score_box_' + i + '_1').text("X");
      $('#score_box_' + i + '_2').hide();
    };
  };

  spareReplace = function() {
    if(game.frames[i].spare){
      $('#score_box_' + i + '_2').text("/");
    }
  }

  hideFrameScoreBoxIfStrikeOrSpare = function() {
    if(game.frames[i].spare && game.currentRoll == ((2*i) + 2)) {
      $('#frame_score_' + i).hide();
    }
    if(game.frames[i].strike && (game.currentRoll == ((2*i) + 2) || game.currentRoll == ((2*i) + 3))) {
      $('#frame_score_' + i).hide();
    }
    if(game.frames[i].strike && game.frames[i+ 1].strike && (game.currentRoll == ((2*i) + 3) || game.currentRoll == ((2*i) + 4))) {
      $('#frame_score_' + i).hide();
    };
  };

  updateFrameScoreBox = function() {
    $('#frame_score_' + i).text(game.frameScores[i]);
  };

  finalFrameFormatting = function() {
    if(game.frames[8].spare && game.currentRoll == 20) {
      $('#frame_score_8').show();
    };
    for(i = 0; i <= game.currentFrame; i++) {
      updateFinalFrameScoreBoxes();
      finalFrameStrikeAndSpareReplace();
    };
  };

  updateFinalFrameScoreBoxes = function() {
    $('#score_box_9_' + (i + 1)).text(game.frames[9].frameRolls[i]);
  }

  finalFrameStrikeAndSpareReplace = function() {
    if(game.frames[9].frameRolls[i] == 10) {
      $('#score_box_9_' + (i + 1)).text("X");
    } else if(game.frames[9].frameRolls[0] + game.frames[9].frameRolls[1] == 10) {
      $('#score_box_9_2').text("/");
    };
  }

  gameOverTransition = function() {
    $('#pin_selection_message').fadeOut("slow");
    $('#pin_box').fadeOut("slow");
    $('#score_text').text("Final score:");
    $('#new_game').fadeIn("slow");
  }

  updateGameScore = function() {
    $('#game_score').text(game.gameScore);
  }



});