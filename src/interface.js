$(document).ready(function () {
  let frame = new Frame();
  let scoreCard = new ScoreCard();

  for (let i = 1; i <= 10;) {
    $('.btn').click(function () {
      let roll = $(this).text();
      frame.roll(parseInt(roll));
      $('#frame-' + i + '-roll-1').text(frame.rolls[0]);

      if (roll === '10') {
        $('#frame-' + i + '-roll-1').text('X');
        addFrameAndSetRollsAndScore(frame);
        runningTotal(i);
        frame = new Frame();
        i++;
      }

      if (frame.rolls.length === 2) {
        $('#frame-' + i + '-roll-2').text(frame.rolls[1]);
        addFrameAndSetRollsAndScore(frame);
        runningTotal(i);
        frame = new Frame();
        i++;
      }

      if (scoreCard.frames.length >= 10) {
        $('#bonus-' + (i - 11) + '-roll').text(scoreCard.gameRolls.slice(-1)[0][0]);
        scoreCard.addToFrames(frame);
        scoreCard.setRolls();

        // scoreCard.update10thFrame();
        // scoreCard.runningTotal();

        $('#bonus-' + (i - 11) + '-score').text(scoreCard.runner[scoreCard.runner.length - 1]);
        frame = new Frame();
        i++;
      }
    });

    break;
  }

  function addFrameAndSetRollsAndScore(frame) {
    scoreCard.addToFrames(frame);
    scoreCard.setRolls();
    scoreCard.setScore();
    scoreCard.updateFrameScore();
    scoreCard.runningTotal();
  }

  function runningTotal(i) {
    $('#frame-' + i + '-score').text(scoreCard.runner[scoreCard.runner.length - 1]);
  }
});
