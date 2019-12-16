/* eslint-disable no-console */
/* eslint-disable no-undef */

$(document).ready(() => {
  let scoreCard = new ScoreCard();

  $.get('/scores/new', (data) => {
    const scoreCardData = JSON.parse(data);
    scoreCard = scoreCardData === null ? new ScoreCard() : recreatedScoreCardFrom(scoreCardData);
    resetPlayerOneDisplay();
  });

  scoreCard.addName('Player');

  $('#player-name').text(scoreCard.getName());

  $('#enter-scores').submit((e) => {
    e.preventDefault();
    const score = Number($('#new-score').val());
    playNextRoll(score);

    $.post('scores/new', { current_scorecard: JSON.stringify(scoreCard) }, (result) => {
      console.log(result);
    });

    $('#new-score').val('');
  });
});
