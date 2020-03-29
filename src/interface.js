$(document).ready(function() {

  var game = new Game;
  var currentScore = game.score;
  var currentFrame = game.frame;

  // Every click fills one frame, number 11 alerts 'Game Over'

  $('#bowl').click(function() {
    if(currentFrame === 1) {
      frame_1();
      currentFrame++;
    } else if(currentFrame === 2) {
     frame_2();
     currentFrame++;
   } else if (currentFrame === 3) {
     frame_3();
     currentFrame++;
   } else if (currentFrame === 4) {
     frame_4();
     currentFrame++;
   } else if (currentFrame === 5) {
     frame_5();
     currentFrame++;
   } else if (currentFrame === 6) {
     frame_6();
     currentFrame++;
   } else if (currentFrame === 7) {
     frame_7();
     currentFrame++;
   } else if (currentFrame === 8) {
     frame_8();
     currentFrame++;
   } else if (currentFrame === 9) {
     frame_9();
     currentFrame++;
   } else if (currentFrame === 10) {
     frame_10();
     currentFrame++;
   } else if(currentFrame > 10) {
     alert("Game Is Over! Please Refresh the Page");
   };
  });


  function frame_1() {
    var roll_1 = game.randomRoll_1();
    if(roll_1 === 10) {
      $('#F1-R1').text(roll_1);
      $('#F1-R2').text('-');
      updateScore(10, 0);
      $('#F1-Score').text(currentScore);
    } else {
      $('#F1-R1').text(roll_1);
      var roll_2 = game.randomRoll_2();
      $('#F1-R2').text(roll_2);
      updateScore(roll_1, roll_2);
      $('#F1-Score').text(currentScore);
    };
  };

  function frame_2() {
    var roll_1 = game.randomRoll_1();
      if(roll_1 === 10) {
        $('#F2-R1').text(roll_1);
        $('#F2-R2').text('-');
        updateScore(10, 0);
        $('#F2-Score').text(currentScore);
      } else {
        $('#F2-R1').text(roll_1);
        var roll_2 = game.randomRoll_2();
        $('#F2-R2').text(roll_2);
        updateScore(roll_1, roll_2);
        $('#F2-Score').text(currentScore);
      }
  }

  function frame_3() {
    var roll_1 = game.randomRoll_1();
    if(roll_1 === 10) {
      $('#F3-R1').text(roll_1);
      $('#F3-R2').text('-');
      updateScore(10, 0);
      $('#F3-Score').text(currentScore);
    } else {
      $('#F3-R1').text(roll_1);
      var roll_2 = game.randomRoll_2();
      $('#F3-R2').text(roll_2);
      updateScore(roll_1, roll_2);
      $('#F3-Score').text(currentScore);
    };
  };

  function frame_4() {
    var roll_1 = game.randomRoll_1();
    if(roll_1 === 10) {
      $('#F4-R1').text(roll_1);
      $('#F4-R2').text('-');
      updateScore(10, 0);
      $('#F4-Score').text(currentScore);
    } else {
      $('#F4-R1').text(roll_1);
      var roll_2 = game.randomRoll_2();
      $('#F4-R2').text(roll_2);
      updateScore(roll_1, roll_2);
      $('#F4-Score').text(currentScore);
    };
  };

  function frame_5() {
    var roll_1 = game.randomRoll_1();
    if(roll_1 === 10) {
      $('#F5-R1').text(roll_1);
      $('#F5-R2').text('-');
      updateScore(10, 0);
      $('#F5-Score').text(currentScore);
    } else {
      $('#F5-R1').text(roll_1);
      var roll_2 = game.randomRoll_2();
      $('#F5-R2').text(roll_2);
      updateScore(roll_1, roll_2);
      $('#F5-Score').text(currentScore);
    };
  };

  function frame_6() {
    var roll_1 = game.randomRoll_1();
    if(roll_1 === 10) {
      $('#F6-R1').text(roll_1);
      $('#F6-R2').text('-');
      updateScore(10, 0);
      $('#F6-Score').text(currentScore);
    } else {
      $('#F6-R1').text(roll_1);
      var roll_2 = game.randomRoll_2();
      $('#F6-R2').text(roll_2);
      updateScore(roll_1, roll_2);
      $('#F6-Score').text(currentScore);
    };
  };

  function frame_7() {
    var roll_1 = game.randomRoll_1();
    if(roll_1 === 10) {
      $('#F7-R1').text(roll_1);
      $('#F7-R2').text('-');
      updateScore(10, 0);
      $('#F7-Score').text(currentScore);
    } else {
      $('#F7-R1').text(roll_1);
      var roll_2 = game.randomRoll_2();
      $('#F7-R2').text(roll_2);
      updateScore(roll_1, roll_2);
      $('#F7-Score').text(currentScore);
    };
  };

  function frame_8() {
    var roll_1 = game.randomRoll_1();
    if(roll_1 === 10) {
      $('#F8-R1').text(roll_1);
      $('#F8-R2').text('-');
      updateScore(10, 0);
      $('#F8-Score').text(currentScore);
    } else {
      $('#F8-R1').text(roll_1);
      var roll_2 = game.randomRoll_2();
      $('#F8-R2').text(roll_2);
      updateScore(roll_1, roll_2);
      $('#F8-Score').text(currentScore);
    };
  };

  function frame_9() {
    var roll_1 = game.randomRoll_1();
    if(roll_1 === 10) {
      $('#F9-R1').text(roll_1);
      $('#F9-R2').text('-');
      updateScore(10, 0);
      $('#F9-Score').text(currentScore);
    } else {
      $('#F9-R1').text(roll_1);
      var roll_2 = game.randomRoll_2();
      $('#F9-R2').text(roll_2);
      updateScore(roll_1, roll_2);
      $('#F9-Score').text(currentScore);
    };
  };

  function frame_10() {
    var roll_1 = game.randomRoll_1();
    if(roll_1 === 10) {
      $('#F10-R1').text(roll_1);
      $('#F10-R2').text('-');
      updateScore(10, 0);
      $('#F10-Score').text(currentScore);
    } else {
      $('#F10-R1').text(roll_1);
      var roll_2 = game.randomRoll_2();
      $('#F10-R2').text(roll_2);
      updateScore(roll_1, roll_2);
      $('#F10-Score').text(currentScore);
    };
  };

  // Refactoring
  function updateScore(roll_1, roll_2) {
    currentScore += (roll_1 + roll_2);
    return currentScore;
  };


     // This fills all the table at once with one button

    // $('#bowl').click(function() {
    //   frame_1();
    //   frame_2();
    //   frame_3();
    //   frame_4();
    //   frame_5();
    //   frame_6();
    //   frame_7();
    //   frame_8();
    //   frame_9();
    //   frame_10();
    //
    // })

})
