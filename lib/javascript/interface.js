$(document).ready(() => {
  const scorecard = new Scorecard();

  function updateScorecard() {
    for (let i = 1; scorecard.getFrame(i); i++) {
      $('#total_score').text(scorecard.totalScore());

      const frame = scorecard.getFrame(i);
      const num = frame.frameNumber();

      if (frame.rolls.length > 0 && num < 10) {
        $(`#frame${num}_score`).text(frame.score());

        if (frame.isStrike()) {
          $(`#frame${num}_roll1`).text('X');
        } else {
          $(`#frame${num}_roll1`).text(frame.rolls[0].score());

          if (frame.rolls.length > 1) {
            if (frame.isSpare()) {
              $(`#frame${num}_roll2`).text('/');
            } else {
              $(`#frame${num}_roll2`).text(frame.rolls[1].score());
            }
          }
        }
      } else if (frame.rolls.length > 0) {
        $(`#frame${num}_score`).text(frame.score());

        if (frame.isStrike()) $(`#frame${num}_roll1`).text('X');
        else $(`#frame${num}_roll1`).text(frame.rolls[0].score());

        if (frame.rolls.length > 1) {
          if (frame.rolls[1].score() === 10) $(`#frame${num}_roll2`).text('X');
          else if (frame.isSpare()) $(`#frame${num}_roll2`).text('/');
          else $(`#frame${num}_roll2`).text(frame.rolls[1].score());

          if (frame.rolls.length > 2) {
            if (frame.rolls[2].score() === 10) $(`#frame${num}_roll3`).text('X');
            else $(`#frame${num}_roll3`).text(frame.rolls[2].score());
          }
        }
      }
    }
  }

  $('#submit_roll').click(() => {
    const score = parseInt($('#roll_input').val(), 10);
    const continuing = scorecard.input(score);

    if (!continuing) {
      $('#roll_input').css('visibility', 'hidden');
      $('#submit_roll').css('visibility', 'hidden');
    }

    updateScorecard();
  });
});
