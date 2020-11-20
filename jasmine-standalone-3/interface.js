$(document).ready(function() {
  var scorecard = new Scorecard();

  $('#score-submit').on('click', function() { // event listener
    console.log('submit clicked')
    // scorecard.setScore(1, 1, parseInt($(`#f1r1`).val()))
    for (let i = 1; i < 10; i++) {
      for (let j = 1; j < 3; j++) {
        console.log('in i loop')
        if (typeof $(`#f${i}r${j}`).val() !== 'undefined') {
          console.log('in j loop')
          scorecard.setScore(i, j, $(`#f${i}r${j}`).val())
        }
      }
      if (typeof $(`#f10r3`).val() !== 'undefined') {
        scorecard.setScore(10, 3, $(`#f10r3`).val())
      }
    }
    reload(); // update view
  });

  function reload() {
    for (var i = 1; i < 11; i++) {
      $(`#f${i}`).text(scorecard.cumScore(i));
    }
    $(`#score-total`).text(scorecard.score());
  };
})
