$(document).ready(function () {
  let frame = new Frame();
  let scoreCard = new ScoreCard();

  for (let i = 1; i < 10;) {
    $('.btn').click(function () {
      let roll = $(this).text();
      console.log('roll: ' + roll);
      frame.roll(parseInt(roll));
      $('#frame-' + i + '-roll-1').text(frame.rolls[0]);

      if (roll === '10') {
        $('#frame-' + i + '-roll-1').text('X');
        addFrameAndSetRollsAndScore(frame);
        runningTotal(i);
        frame = new Frame();
        i++;

        console.log('scoreCard.gameRolls: ' + scoreCard.gameRolls);
        console.log('scoreCard.score: ' + scoreCard.score);
      }

      if (frame.rolls.length === 2) {
        $('#frame-' + i + '-roll-2').text(frame.rolls[1]);
        addFrameAndSetRollsAndScore(frame);
        runningTotal(i);
        frame = new Frame();
        i++;

        console.log('scoreCard.gameRolls: ' + scoreCard.gameRolls);
        console.log('scoreCard.score: ' + scoreCard.score);
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
