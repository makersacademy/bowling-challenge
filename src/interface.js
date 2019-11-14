$(document).ready(function() {
  var game = new Game();

  $(document).find('.final_score').hide();

  $('#btn_new_game').click(function() {
    game = new Game();
    $(document).find('.final_score').hide();
    showPinButtons();
    $(document).find('.buttons_1').show();
    clearFrames();
    updateFrames();
  });


  $('#btn0').click(function() {
    game.addBowl(0);
    updateScore(0);
    updateFrames();
  });

  $('#btn1').click(function() {
    game.addBowl(1);
    updateScore(1);
    updateFrames();
  });

  $('#btn2').click(function() {
    game.addBowl(2);
    updateScore(2);
    updateFrames();
  });

  $('#btn3').click(function() {
    game.addBowl(3);
    updateScore(3);
    updateFrames();
  });

  $('#btn4').click(function() {
    game.addBowl(4);
    updateScore(4);
    updateFrames();
  });

  $('#btn5').click(function() {
    game.addBowl(5);
    updateScore(5);
    updateFrames();

  });

  $('#btn6').click(function() {
    game.addBowl(6);
    updateScore(6)
    updateFrames();

  });

  $('#btn7').click(function() {
    game.addBowl(7);
    updateScore(7)
    updateFrames();

  });

  $('#btn8').click(function() {
    game.addBowl(8);
    updateScore(8)
    updateFrames();

  });

  $('#btn9').click(function() {
    game.addBowl(9);
    updateScore(9)
    updateFrames();

  });

  $('#btn10').click(function() {
    game.addBowl(10);
    updateScore(10)
    updateFrames();

  });

  function updateScore(pins) {
    game.calculateScore();
    hidePinButtons(pins);
    showPinButtons()
    finalScore();
  };

  function finalScore() {
    if ( game.game_over === true ) {
      $(document).find('.final_score').show();
      $("#f_score").text(game.frame_scores[9]);
    } else {
      $(document).find('.final_score').hide();
    }
  };

  function hidePinButtons(pins) {
    var p = 10 - pins
    for (var i = 10; i > p; i--) {
      $('#btn'+i).hide();
    };
  };

  function showPinButtons(){
    if ( game.frames[game.current_frame - 1][0] === undefined ||
      game.frames[9][0] === 10 || game.frames[9][1] !== undefined ) {
      for (var i = 1; i < 11; i++) {
        $('#btn'+i).show();
      } if ( game.game_over === true ) {
        $(document).find('.buttons_1').hide();
      }
    }
  };

  function updateFrames() {
    $("#frame1_r1").text(game.frames[0][0]);
    $("#frame1_r2").text(game.frames[0][1]);
    $("#frame1sc").text(game.frame_scores[0]);
    $("#frame2_r1").text(game.frames[1][0]);
    $("#frame2_r2").text(game.frames[1][1]);
    $("#frame2sc").text(game.frame_scores[1]);
    $("#frame3_r1").text(game.frames[2][0]);
    $("#frame3_r2").text(game.frames[2][1]);
    $("#frame3sc").text(game.frame_scores[2]);
    $("#frame4_r1").text(game.frames[3][0]);
    $("#frame4_r2").text(game.frames[3][1]);
    $("#frame4sc").text(game.frame_scores[3]);
    $("#frame5_r1").text(game.frames[4][0]);
    $("#frame5_r2").text(game.frames[4][1]);
    $("#frame5sc").text(game.frame_scores[4]);
    $("#frame6_r1").text(game.frames[5][0]);
    $("#frame6_r2").text(game.frames[5][1]);
    $("#frame6sc").text(game.frame_scores[5]);
    $("#frame7_r1").text(game.frames[6][0]);
    $("#frame7_r2").text(game.frames[6][1]);
    $("#frame7sc").text(game.frame_scores[6]);
    $("#frame8_r1").text(game.frames[7][0]);
    $("#frame8_r2").text(game.frames[7][1]);
    $("#frame8sc").text(game.frame_scores[7]);
    $("#frame9_r1").text(game.frames[8][0]);
    $("#frame9_r2").text(game.frames[8][1]);
    $("#frame9sc").text(game.frame_scores[8]);
    $("#frame10_r1").text(game.frames[9][0]);
    $("#frame10_r2").text(game.frames[9][1]);
    $("#frame10_r3").text(game.frames[9][2]);
    $("#frame10sc").text(game.frame_scores[9]);
  };

  function clearFrames() {
    $("#frame1_r1").text("");
    $("#frame1_r2").text("");
    $("#frame2_r1").text("");
    $("#frame2_r2").text("");
    $("#frame3_r1").text("");
    $("#frame3_r2").text("");
    $("#frame4_r1").text("");
    $("#frame4_r2").text("");
    $("#frame5_r1").text("");
    $("#frame5_r2").text("");
    $("#frame6_r1").text("");
    $("#frame6_r2").text("");
    $("#frame7_r1").text("");
    $("#frame7_r2").text("");
    $("#frame8_r1").text("");
    $("#frame8_r2").text("");
    $("#frame9_r1").text("");
    $("#frame9_r2").text("");
    $("#frame10_r1").text("");
    $("#frame10_r2").text("");
    $("#frame10_r3").text("");
  };

});
