$(document).ready(function() {
  var bowling = new Bowling;

  function updateScores() {
    for (const [i, frame] of bowling.frames.entries()) {
      if (!frame.updated) {
        frame.Update();
      }

      if (!frame.added) {
        if (i == 0) {
          frame.added = true;
        } else if (frame.updated) {
          frame.final += bowling.frames[i - 1].final;
          frame.added = true;
        }
      }

      if (frame.added && frame.updated) {
        $(`#frame${i}`).text(`Frame ${i + 1}: ` + frame.final);
      }
    }
    var currentScore = bowling.frames[bowling.currentFrame].scores;
    if (currentScore.length == 1) {
      $(`#${bowling.currentFrame}roll1`).text(`Roll 1: ${currentScore[0]}`);
    } else if (currentScore.length == 2) {
      $(`#${bowling.currentFrame}roll2`).text(`Roll 2: ${currentScore[1]}`);
    } else {
      $(`#9roll3`).text(`Roll 3: ${currentScore[2]}`);
    }
  }

  $('#button0').on('click', function() {
    bowling.roll(0);
    updateScores();
  });
  $('#button1').on('click', function() {
    bowling.roll(1);
    updateScores();
  });
  $('#button2').on('click', function() {
    bowling.roll(2);
    updateScores();
  });
  $('#button3').on('click', function() {
    bowling.roll(3);
    updateScores();
  });
  $('#button4').on('click', function() {
    bowling.roll(4);
    updateScores();
  });
  $('#button5').on('click', function() {
    bowling.roll(5);
    updateScores();
  });
  $('#button6').on('click', function() {
    bowling.roll(6);
    updateScores();
  });
  $('#button7').on('click', function() {
    bowling.roll(7);
    updateScores();
  });
  $('#button8').on('click', function() {
    bowling.roll(8);
    updateScores();
  });
  $('#button9').on('click', function() {
    bowling.roll(9);
    updateScores();
  });
  $('#button10').on('click', function() {
    bowling.roll(10);
    updateScores();
  });
})