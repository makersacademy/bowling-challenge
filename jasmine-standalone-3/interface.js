$(document).ready(function() {
  var scorecard = new Scorecard();

  jQuery('.score-input').on('input', function() {
    sendScores();
  });

  function sendScores() {
    for (let i = 1; i < 11; i++) {
      for (let j = 1; j < 3; j++) {
        if (typeof $(`#f${i}r${j}`).val() !== 'undefined') {
          scorecard.setScore(i, j, $(`#f${i}r${j}`).val() === '' ? 0 : $(`#f${i}r${j}`).val()) // make lowercase and parseInt
        }
      }
    }
    scorecard.setScore(10, 3, $('#f10r3').val() === '' ? 0 : $('#f10r3').val())
    reload();
  }

  function reload() {
    for (var i = 1; i < 11; i++) {
      $(`#f${i}`).text(scorecard.cumScore(i));
    }
    $(`#score-total`).text(scorecard.score());
  };
})
