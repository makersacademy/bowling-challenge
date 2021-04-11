$(document).ready(function() {
  var bowling = new Bowling;

  function updateScores() {
    for (const [i, frame] of bowling.frames.entries()) {
      if (!frame.updated) {
        frame.Update();
      }
      if (frame.updated) {
        $(`#frame${i}`).text(`Frame ${i + 1}: ` + frame.final);
      }
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