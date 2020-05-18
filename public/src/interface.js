$(document).ready(function() {
  var bowling = new Bowling();

  function showAllBtn() {
    let btn = $('#btn-one, #btn-two, #btn-three, #btn-four, #btn-five, #btn-six, #btn-seven, #btn-eight, #btn-nine, #btn-ten');
    btn.show();
  }

  $('#reload').click(() => {
    location.reload();
  });

  function uiScore(hideBtn, value) {
    bowling.countScore(value);
    if(bowling.firstBowl === false) {
      hideBtn.hide(); 
    } else {
      hideBtn.show();
    }
    $('#game-score').text(bowling.getTotalScore());
    $('#frame-' + bowling.frame + '-pos-' + bowling.firstBowl).text(bowling.pins);
  }

  $('#btn-zero').click(() => {
    let hideBtn = $('');
    uiScore(hideBtn, 0)
  });

  $('#btn-one').click(() => {
    showAllBtn();
    let hideBtn = $('#btn-ten');
    uiScore(hideBtn, 1)
  });

  $('#btn-two').click(() => {
    showAllBtn();
    let hideBtn = $('#btn-nine, #btn-ten');
    uiScore(hideBtn, 2)
  });

  $('#btn-three').click(() => {
    showAllBtn();
    let hideBtn = $('#btn-eight, #btn-nine, #btn-ten');
    uiScore(hideBtn, 3)
  });

  $('#btn-four').click(() => {
    showAllBtn();
    let hideBtn = $('#btn-seven, #btn-eight, #btn-nine, #btn-ten');
    uiScore(hideBtn, 4)
  });

  $('#btn-five').click(() => {
    showAllBtn();
    let hideBtn = $('#btn-six, #btn-seven, #btn-eight, #btn-nine, #btn-ten');
    uiScore(hideBtn, 5)
  });

  $('#btn-six').click(() => {
    showAllBtn();
    let hideBtn = $('#btn-five, #btn-six, #btn-seven, #btn-eight, #btn-nine, #btn-ten');
    uiScore(hideBtn, 6)
  });

  $('#btn-seven').click(() => {
    showAllBtn();
    let hideBtn = $('#btn-four, #btn-five, #btn-six, #btn-seven, #btn-eight, #btn-nine, #btn-ten');
    uiScore(hideBtn, 7)
  });

  $('#btn-eight').click(() => {
    showAllBtn();
    let hideBtn = $('#btn-three, #btn-four, #btn-five, #btn-six, #btn-seven, #btn-eight, #btn-nine, #btn-ten');
    uiScore(hideBtn, 8)
  });

  $('#btn-nine').click(() => {
    showAllBtn();
    let hideBtn = $('#btn-two, #btn-three, #btn-four, #btn-five, #btn-six, #btn-seven, #btn-eight, #btn-nine, #btn-ten');
    uiScore(hideBtn, 9)
  });

  $('#btn-ten').click(() => {
    showAllBtn();
    let hideBtn = $('#btn-one, #btn-two, #btn-three, #btn-four, #btn-five, #btn-six, #btn-seven, #btn-eight, #btn-nine, #btn-ten');
    uiScore(hideBtn, 10)
  });

});
