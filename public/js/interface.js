$(document).ready(function() {
  var bowling = new Bowling();
  $('.strike').hide();
  $('.no-score').hide();

  $('#button0').click(function() {
    $('.no-score').show();
    $('.strike').hide();
    console.log(bowling.bowl(0));
    $('#bowl1-bowl' + bowling.getCurrentBowl()).text('0')
    showAllButtons();
    updateFrameScores();
  });

  $('#button1').click(function() {
    $('.no-score').hide();
    $('.strike').hide();
    if (bowling.getBowlsCount() % 2 === 0) {
      t = bowling.bowl(1)[0]
      console.log(t);
      $('#button' + t).hide()
    } else {
      bowling.bowl(1)
    }
    $('#bowl1-bowl' + bowling.getCurrentBowl()).text('1')
    showAllButtons();
    updateFrameScores();
  });

  $('#button2').click(function() {
    $('.no-score').hide();
    $('.strike').hide();
    if (bowling.getBowlsCount() % 2 === 0) {
      hideImpossibleScores(bowling.bowl(2))
    } else {
      bowling.bowl(2)
    }
    $('#bowl1-bowl' + bowling.getCurrentBowl()).text('2')
    showAllButtons();
    updateFrameScores();
  });

  $('#button3').click(function() {
    $('.no-score').hide();
    $('.strike').hide();
    if (bowling.getBowlsCount() % 2 === 0) {
      hideImpossibleScores(bowling.bowl(3))
    } else {
      bowling.bowl(3)
    }
    $('#bowl1-bowl' + bowling.getCurrentBowl()).text('3')
    showAllButtons();
    updateFrameScores();
  });

  $('#button4').click(function() {
    $('.no-score').hide();
    $('.strike').hide();
    if (bowling.getBowlsCount() % 2 === 0) {
      hideImpossibleScores(bowling.bowl(4))
    } else {
      bowling.bowl(4)
    }
    $('#bowl1-bowl' + bowling.getCurrentBowl()).text('4')
    showAllButtons();
    updateFrameScores();
  });

  $('#button5').click(function() {
    $('.no-score').hide();
    $('.strike').hide();
    if (bowling.getBowlsCount() % 2 === 0) {
      hideImpossibleScores(bowling.bowl(5))
    } else {
      bowling.bowl(5)
    }
    $('#bowl1-bowl' + bowling.getCurrentBowl()).text('5')
    showAllButtons();
    updateFrameScores();
  });

  $('#button6').click(function() {
    $('.no-score').hide();
    $('.strike').hide();
    if (bowling.getBowlsCount() % 2 === 0) {
      hideImpossibleScores(bowling.bowl(6))
    } else {
      bowling.bowl(6)
    }
    $('#bowl1-bowl' + bowling.getCurrentBowl()).text('6')
    showAllButtons();
    updateFrameScores();
  });

  $('#button7').click(function() {
    $('.no-score').hide();
    $('.strike').hide();
    if (bowling.getBowlsCount() % 2 === 0) {
      hideImpossibleScores(bowling.bowl(7))
    } else {
      bowling.bowl(7)
    }
    $('#bowl1-bowl' + bowling.getCurrentBowl()).text('7')
    showAllButtons();
    updateFrameScores();
  });

  $('#button8').click(function() {
    $('.no-score').hide();
    $('.strike').hide();
    if (bowling.getBowlsCount() % 2 === 0) {
      hideImpossibleScores(bowling.bowl(8))
    } else {
      bowling.bowl(8)
    }
    $('#bowl1-bowl' + bowling.getCurrentBowl()).text('8')
    showAllButtons();
    updateFrameScores();
  });

  $('#button9').click(function() {
    $('.no-score').hide();
    $('.strike').hide();
    if (bowling.getBowlsCount() % 2 === 0) {
      hideImpossibleScores(bowling.bowl(9))
    } else {
      bowling.bowl(9)
    }
    $('#bowl1-bowl' + bowling.getCurrentBowl()).text('9')
    showAllButtons();
    updateFrameScores();
  });

  $('#button10').click(function() {
    $('.no-score').hide();
    bowling.bowl(10)
    if (bowling.getCurrentBowl() < 19) {
      $('#bowl1-bowl' + (bowling.getCurrentBowl() - 1)).text('-')
      $('#bowl1-bowl' + bowling.getCurrentBowl()).text('X')
    } else {
      $('#bowl1-bowl' + bowling.getCurrentBowl()).text('X')
    }
    $('.strike').show();
    showAllButtons();
    updateFrameScores();
  });

  function updateFrameScores() {
    if (isNaN(bowling.getFrameScore(1)) === false) {
      $('#frame1').text(bowling.getFrameScore(1));
    }
    if (isNaN(bowling.getFrameScore(1)+bowling.getFrameScore(2)) === false) {
      $('#frame2').text(bowling.getFrameScore(1)+bowling.getFrameScore(2));
    }
    if (isNaN(bowling.getFrameScore(1)+bowling.getFrameScore(2)+bowling.getFrameScore(3)) === false) {
      $('#frame3').text(bowling.getFrameScore(1)+bowling.getFrameScore(2)+bowling.getFrameScore(3));
    }
    if (isNaN(bowling.getFrameScore(1)+bowling.getFrameScore(2)+bowling.getFrameScore(3)+bowling.getFrameScore(4)) === false) {
      $('#frame4').text(bowling.getFrameScore(1)+bowling.getFrameScore(2)+bowling.getFrameScore(3)+bowling.getFrameScore(4));
    }
    if (isNaN(bowling.getFrameScore(1)+bowling.getFrameScore(2)+bowling.getFrameScore(3)+bowling.getFrameScore(4)+bowling.getFrameScore(5)) === false) {
      $('#frame5').text(bowling.getFrameScore(1)+bowling.getFrameScore(2)+bowling.getFrameScore(3)+bowling.getFrameScore(4)+bowling.getFrameScore(5));
    }
    if (isNaN(bowling.getFrameScore(1)+bowling.getFrameScore(2)+bowling.getFrameScore(3)+bowling.getFrameScore(4)+bowling.getFrameScore(5)+bowling.getFrameScore(6)) === false) {
      $('#frame6').text(bowling.getFrameScore(1)+bowling.getFrameScore(2)+bowling.getFrameScore(3)+bowling.getFrameScore(4)+bowling.getFrameScore(5)+bowling.getFrameScore(6));
    }
    if (isNaN(bowling.getFrameScore(1)+bowling.getFrameScore(2)+bowling.getFrameScore(3)+bowling.getFrameScore(4)+bowling.getFrameScore(5)+bowling.getFrameScore(6)+bowling.getFrameScore(7)) === false) {
      $('#frame7').text(bowling.getFrameScore(1)+bowling.getFrameScore(2)+bowling.getFrameScore(3)+bowling.getFrameScore(4)+bowling.getFrameScore(5)+bowling.getFrameScore(6)+bowling.getFrameScore(7));
    }
    if (isNaN(bowling.getFrameScore(1)+bowling.getFrameScore(2)+bowling.getFrameScore(3)+bowling.getFrameScore(4)+bowling.getFrameScore(5)+bowling.getFrameScore(6)+bowling.getFrameScore(7)+bowling.getFrameScore(8)) === false) {
      $('#frame8').text(bowling.getFrameScore(1)+bowling.getFrameScore(2)+bowling.getFrameScore(3)+bowling.getFrameScore(4)+bowling.getFrameScore(5)+bowling.getFrameScore(6)+bowling.getFrameScore(7)+bowling.getFrameScore(8));
    }
    if (isNaN(bowling.getFrameScore(1)+bowling.getFrameScore(2)+bowling.getFrameScore(3)+bowling.getFrameScore(4)+bowling.getFrameScore(5)+bowling.getFrameScore(6)+bowling.getFrameScore(7)+bowling.getFrameScore(8)+bowling.getFrameScore(9)) === false) {
      $('#frame9').text(bowling.getFrameScore(1)+bowling.getFrameScore(2)+bowling.getFrameScore(3)+bowling.getFrameScore(4)+bowling.getFrameScore(5)+bowling.getFrameScore(6)+bowling.getFrameScore(7)+bowling.getFrameScore(8)+bowling.getFrameScore(9));
    }
    if (isNaN(bowling.getTotalScore()) === false) {
      $('#frame10').text(bowling.getTotalScore());
    }

    if (isNaN(bowling.getFrameScore(10)) === false) {
      if (bowling.getFrameScore(10) < 10) {
        $('#bowl1-bowl21').text('-')
      }
    }
  }

  function hideImpossibleScores(bowl) {
    var i
    for (i = 0; i <= bowl.length; i++) {
      $('#button' + bowl[i]).hide();
    };
  }

  function showAllButtons() {
    if (bowling.getBowlsCount() % 2 === 0) {
      var i
      for (i = 0; i <= 10; i++) {
        $('#button' + i).show();
      };
    }
  }
});
