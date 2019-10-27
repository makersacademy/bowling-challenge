$(document).ready(function() {
  var game = new Game();

  $('#btn_new_game').click(function() {
    game = new Game();
    clearFrames();
    updateFrames();
    $(document).find('.buttons_1').show();
  });


  $('#btn0').click(function() {
    game.addBowl(0);
    updateScore();
    updateFrames();
  });

  $('#btn1').click(function() {
    game.addBowl(1);
    updateScore();
    updateFrames();
  });

  $('#btn2').click(function() {
    game.addBowl(2);
    updateScore();
    updateFrames();
  });

  $('#btn3').click(function() {
    game.addBowl(3);
    updateScore();
    updateFrames();
  });

  $('#btn4').click(function() {
    game.addBowl(4);
    updateScore();
    updateFrames();
  });

  $('#btn5').click(function() {
    game.addBowl(5);
    updateScore();
    updateFrames();

  });

  $('#btn6').click(function() {
    game.addBowl(6);
    updateScore()
    updateFrames();

  });

  $('#btn7').click(function() {
    game.addBowl(7);
    updateScore()
    updateFrames();

  });

  $('#btn8').click(function() {
    game.addBowl(8);
    updateScore()
    updateFrames();

  });

  $('#btn9').click(function() {
    game.addBowl(9);
    updateScore()
    updateFrames();

  });

  $('#btn10').click(function() {
    game.addBowl(10);
    updateScore()
    updateFrames();

  });

  function updateScore() {
    game.calculateScore();
    hidePinButtons();
  };

  function hidePinButtons() {
    if ( game.current_frame !== 10 ) {
      if ( Number(game.frames[game.current_frame - 1].reduce((roll_one, roll_two) => roll_one + roll_two,0)) > 0 ) {
        document.getElementById("btn10").style.visibility="hidden";
      } else {
        document.getElementById("btn10").style.visibility="visible";
      } if ( Number(game.frames[game.current_frame - 1].reduce((roll_one, roll_two) => roll_one + roll_two,0)) > 1 ) {
        document.getElementById("btn9").style.visibility="hidden";
      } else {
        document.getElementById("btn9").style.visibility="visible";
      } if ( Number(game.frames[game.current_frame - 1].reduce((roll_one, roll_two) => roll_one + roll_two,0)) > 2 ) {
        document.getElementById("btn8").style.visibility="hidden";
      } else {
        document.getElementById("btn8").style.visibility="visible";
      } if ( Number(game.frames[game.current_frame - 1].reduce((roll_one, roll_two) => roll_one + roll_two,0)) > 3 ) {
        document.getElementById("btn7").style.visibility="hidden";
      } else {
        document.getElementById("btn7").style.visibility="visible";
      } if ( Number(game.frames[game.current_frame - 1].reduce((roll_one, roll_two) => roll_one + roll_two,0)) > 4 ) {
        document.getElementById("btn6").style.visibility="hidden";
      } else {
        document.getElementById("btn6").style.visibility="visible";
      } if ( Number(game.frames[game.current_frame - 1].reduce((roll_one, roll_two) => roll_one + roll_two,0)) > 5 ) {
        document.getElementById("btn5").style.visibility="hidden";
      } else {
        document.getElementById("btn5").style.visibility="visible";
      } if ( Number(game.frames[game.current_frame - 1].reduce((roll_one, roll_two) => roll_one + roll_two,0)) > 6 ) {
        document.getElementById("btn4").style.visibility="hidden";
      } else {
        document.getElementById("btn4").style.visibility="visible";
      } if ( Number(game.frames[game.current_frame - 1].reduce((roll_one, roll_two) => roll_one + roll_two,0)) > 7 ) {
        document.getElementById("btn3").style.visibility="hidden";
      } else {
        document.getElementById("btn3").style.visibility="visible";
      } if ( Number(game.frames[game.current_frame - 1].reduce((roll_one, roll_two) => roll_one + roll_two,0)) > 8 ) {
        document.getElementById("btn2").style.visibility="hidden";
      } else {
        document.getElementById("btn2").style.visibility="visible";
      }
    } else if ( game.current_frame === 10 ) {
        document.getElementById("btn1").style.visibility="visible";
        document.getElementById("btn2").style.visibility="visible";
        document.getElementById("btn3").style.visibility="visible";
        document.getElementById("btn4").style.visibility="visible";
        document.getElementById("btn5").style.visibility="visible";
        document.getElementById("btn6").style.visibility="visible";
        document.getElementById("btn7").style.visibility="visible";
        document.getElementById("btn8").style.visibility="visible";
        document.getElementById("btn9").style.visibility="visible";
        document.getElementById("btn10").style.visibility="visible";
    } if ( game.game_over === true ) {
      $(document).find('.buttons_1').hide();
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
