$(document).ready(function() {
  var bowling = new Bowling();
  updateScores()

  $('#button_new_game').click(function() {
    bowling.newGame()
    updateScores();
    button_back()
  });

  $('#new_ball_button_0').click(function() {
    button_press(0)
  });

  $('#new_ball_button_1').click(function() {
    button_press(1)
  });

  $('#new_ball_button_2').click(function() {
    button_press(2)
  });

  $('#new_ball_button_3').click(function() {
    button_press(3)
  });

  $('#new_ball_button_4').click(function() {
    button_press(4)
  });

  $('#new_ball_button_5').click(function() {
    button_press(5)
  });

  $('#new_ball_button_6').click(function() {
    button_press(6)
  });

  $('#new_ball_button_7').click(function() {
    button_press(7)
  });
  $('#new_ball_button_8').click(function() {
    button_press(8)
  });
  $('#new_ball_button_9').click(function() {
    button_press(9)
  });
  $('#new_ball_button_10').click(function() {
    button_press(10)
  });

  function button_press(number) {
    bowling.enterBallScore(number)
    updateScores();
    button_vanish(number)
    button_back()
    isfinished()
  }

  function updateScores() {
    if (bowling._scoreboard.length === 0) {
      wipeScores()
    }
    for (var i = 0; i < 10; i++) {
      if (bowling._scoreboard.length >= (i + 1)) {
        updateFirstScore(i)
        updateSecondScore(i)
        updateThirdScore(i)
        updateTotalscore()
      };
    };
  };

  function updateFirstScore(i) {
    if (isStrike(i)) {
      $('#frame' + (i + 1).toString() + '_ball1').text('X');
      $('#frame_table').find('tr').eq(i + 1).find('td').eq(1).attr('class', 'td_score')
      $('#frame' + (i + 1).toString() + '_total').text(bowling._scoreboard[i][2]);
    } else {
      $('#frame' + (i + 1).toString() + '_ball1').text(bowling._scoreboard[i][0]);
      $('#frame_table').find('tr').eq(i + 1).find('td').eq(1).attr('class', 'td_score')
    }
  }

  function updateSecondScore(i) {
    if (bowling._scoreboard[i][1] !== null) {
      if (isSpare(i)) {
        $('#frame' + (i + 1).toString() + '_ball2').text('/');
        $('#frame_table').find('tr').eq(i + 1).find('td').eq(2).attr('class', 'td_score')
        $('#frame' + (i + 1).toString() + '_total').text(bowling._scoreboard[i][2]);
      } else {
        $('#frame' + (i + 1).toString() + '_ball2').text(bowling._scoreboard[i][1]);
        $('#frame_table').find('tr').eq(i + 1).find('td').eq(2).attr('class', 'td_score')
        $('#frame' + (i + 1).toString() + '_total').text(bowling._scoreboard[i][2]);
      };
    };
  }

  function updateThirdScore(i) {
    if (bowling._scoreboard[i].length === 4) {
        $('#frame' + (i + 1).toString() + '_ball3').text(bowling._scoreboard[i][3]);
        $('#frame_table').find('tr').eq(i + 1).find('td').eq(3).attr('class', 'td_score')
        $('#frame' + (i + 1).toString() + '_total').text(bowling._scoreboard[i][2]);
    };
  }

  function updateTotalscore() {
    $('#total_score').text(bowling.calculateTotalScore());
  }

  function wipeScores() {
    for (var i = 1; i < 11; i++) {
      $('#frame' + i.toString() + '_ball1').text('')
      $('#frame' + i.toString() + '_ball2').text('')
      $('#frame' + '10' + '_ball3').text('')
      $('#frame' + i.toString() + '_total').text('')
      $('#frame_table').find('tr').eq(i).find('td').eq(1).attr('class', '')
      $('#frame_table').find('tr').eq(i).find('td').eq(2).attr('class', '')
      $('#frame_table').find('tr').eq(i).find('td').eq(3).attr('class', '')
    };
    updateTotalscore()
  };

  function isStrike(frame) {
    return bowling._scoreboard[frame][0] === 10
  }

  function isSpare(frame) {
    if (isStrike(frame)) {
      return false
    } else {
      return (bowling._scoreboard[frame][0] + bowling._scoreboard[frame][1]) === 10
    }
  }

  function button_vanish(number) {
    if (bowling._isFirstBall === false) {
      for (var i = (11 - number); i < 11; i++) {
        $('#new_ball_button_' + i.toString()).fadeOut(50)
      }
    }
  }

  function button_back() {
    if (bowling._isFirstBall === true) {
      for (var i = (0); i < 11; i++) {
        $('#new_ball_button_' + i.toString()).fadeIn(50)
      }
    }
  }

  function isfinished() {
    console.log(bowling.isGameOver())
    if (bowling.isGameOver()) {
      for (var i = (0); i < 11; i++) {
        $('#new_ball_button_' + i.toString()).fadeOut(50)
      }
    };
  };
});
