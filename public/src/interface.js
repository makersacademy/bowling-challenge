$(document).ready(function() {
  var bowling = new Bowling();
  
  function uiScore(hideBtn, value) {
    bowling.countScore(value);
    if(bowling.firstBowl === false) {
      hideBtn.hide(); 
    } else {
      hideBtn.show();
    }
    $('#game-score').text(bowling.getTotalScore());
    let position;
    if(bowling.firstBowl === true) {
      position = 0;
    } else {
      position = 1;
    }
    $('#frame-' + bowling.frame + '-pos-' + bowling.firstBowl).text(bowling.pins);
  }

  $('#btn-zero').on('click', () => {
    let hideBtn = $('');
    uiScore(hideBtn, 0)
  });

  $('#btn-one').on('click', () => {
    let hideBtn = $('#btn-ten');
    uiScore(hideBtn, 1)
  });

  $('#btn-two').on('click', () => {
    let hideBtn = $('#btn-nine, #btn-ten');
    uiScore(hideBtn, 2)
  });

  $('#btn-three').on('click', () => {
    let hideBtn = $('#btn-eight, #btn-nine, #btn-ten');
    uiScore(hideBtn, 3)
  });

  $('#btn-four').on('click', () => {
    let hideBtn = $('#btn-seven, #btn-eight, #btn-nine, #btn-ten');
    uiScore(hideBtn, 4)
  });

  $('#btn-five').on('click', () => {
    let hideBtn = $('#btn-six, #btn-seven, #btn-eight, #btn-nine, #btn-ten');
    uiScore(hideBtn, 5)
  });

  $('#btn-six').on('click', () => {
    let hideBtn = $('#btn-five, #btn-six, #btn-seven, #btn-eight, #btn-nine, #btn-ten');
    uiScore(hideBtn, 6)
  });

  $('#btn-seven').on('click', () => {
    let hideBtn = $('#btn-four, #btn-five, #btn-six, #btn-seven, #btn-eight, #btn-nine, #btn-ten');
    uiScore(hideBtn, 7)
  });

  $('#btn-eight').on('click', () => {
    let hideBtn = $('#btn-three, #btn-four, #btn-five, #btn-six, #btn-seven, #btn-eight, #btn-nine, #btn-ten');
    uiScore(hideBtn, 8)
  });

  $('#btn-nine').on('click', () => {
    let hideBtn = $('#btn-two, #btn-three, #btn-four, #btn-five, #btn-six, #btn-seven, #btn-eight, #btn-nine, #btn-ten');
    uiScore(hideBtn, 9)
  });

  $('#btn-ten').on('click', () => {
    let hideBtn = $('#btn-one, #btn-two, #btn-three, #btn-four, #btn-five, #btn-six, #btn-seven, #btn-eight, #btn-nine, #btn-ten');
    uiScore(hideBtn, 10)
  });


});
