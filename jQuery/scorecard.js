$(document).ready(function() {

  let scorecard = new playerScoreCard();
  let round = 0;
  let bowl = 1;

  $('#1pin').click(function() {

    scorecard.add(1, round);
    $(`#round${round + 1}Score`).text(scorecard.calculateScore(round));
    if (scorecard.scoreTracker[round].length === 2) { round +=1 };
    $('#10pin').hide();
    if (bowl === 2) { $("#pinButtons").show().children().show()};
    bowl += 1;
    if (bowl === 3) { bowl = 1 }
  });

  $('#2pin').click(function() {
    scorecard.add(2, round);
    $(`#round${round + 1}Score`).text(scorecard.calculateScore(round));
    if (scorecard.scoreTracker[round].length === 2) { round +=1 };
    $('#9pin').hide();
    $('#10pin').hide();
    if (bowl === 2) { $("#pinButtons").show().children().show() };
    bowl += 1;
    if (bowl === 3) { bowl = 1 }
  });

  $('#3pin').click(function() {
    scorecard.add(3, round);
    $(`#round${round + 1}Score`).text(scorecard.calculateScore(round));
    if (scorecard.scoreTracker[round].length === 2) { round +=1 };
    $('#8pin').hide();
    $('#9pin').hide();
    $('#10pin').hide();
    if (bowl === 2) { $("#pinButtons").show().children().show() };
    bowl += 1;
    if (bowl === 3) { bowl = 1 }
  });

  $('#4pin').click(function() {
    scorecard.add(4, round);
    $(`#round${round + 1}Score`).text(scorecard.calculateScore(round));
    if (scorecard.scoreTracker[round].length === 2) { round +=1 };
    $('#7pin').hide();
    $('#8pin').hide();
    $('#9pin').hide();
    $('#10pin').hide();
    if (bowl === 2) { $("#pinButtons").show().children().show() };
    bowl += 1;
    if (bowl === 3) { bowl = 1 }
  });

  $('#5pin').click(function() {
    scorecard.add(5, round);
    $(`#round${round + 1}Score`).text(scorecard.calculateScore(round));
    if (scorecard.scoreTracker[round].length === 2) { round +=1 };
    $('#6pin').hide();
    $('#7pin').hide();
    $('#8pin').hide();
    $('#9pin').hide();
    $('#10pin').hide();
    if (bowl === 2) { $("#pinButtons").show().children().show() };
    bowl += 1;
    if (bowl === 3) { bowl = 1 }
  });

  $('#6pin').click(function() {
    scorecard.add(6, round);
    $(`#round${round + 1}Score`).text(scorecard.calculateScore(round));
    if (scorecard.scoreTracker[round].length === 2) { round +=1 };
    $('#5pin').hide();
    $('#6pin').hide();
    $('#7pin').hide();
    $('#8pin').hide();
    $('#9pin').hide();
    $('#10pin').hide();
    if (bowl === 2) { $("#pinButtons").show().children().show() };
    bowl += 1;
    if (bowl === 3) { bowl = 1 }
  });

  $('#7pin').click(function() {
    scorecard.add(7, round);
    $(`#round${round + 1}Score`).text(scorecard.calculateScore(round));
    if (scorecard.scoreTracker[round].length === 2) { round +=1 };
    $('#4pin').hide();
    $('#5pin').hide();
    $('#6pin').hide();
    $('#7pin').hide();
    $('#8pin').hide();
    $('#9pin').hide();
    $('#10pin').hide();
    if (bowl === 2) { $("#pinButtons").show().children().show() };
    bowl += 1;
    if (bowl === 3) { bowl = 1 }
  });

  $('#8pin').click(function() {
    scorecard.add(8, round);
    $(`#round${round + 1}Score`).text(scorecard.calculateScore(round));
    if (scorecard.scoreTracker[round].length === 2) { round +=1 };
    $('#3pin').hide();
    $('#4pin').hide();
    $('#5pin').hide();
    $('#6pin').hide();
    $('#7pin').hide();
    $('#8pin').hide();
    $('#9pin').hide();
    $('#10pin').hide();
    if (bowl === 2) { $("#pinButtons").show().children().show() };
    bowl += 1;
    if (bowl === 3) { bowl = 1 }
  });

  $('#9pin').click(function() {
    scorecard.add(9, round);
    $(`#round${round + 1}Score`).text(scorecard.calculateScore(round));
    if (scorecard.scoreTracker[round].length === 2) { round +=1 };
    $('#2pin').hide();
    $('#3pin').hide();
    $('#4pin').hide();
    $('#5pin').hide();
    $('#6pin').hide();
    $('#7pin').hide();
    $('#8pin').hide();
    $('#9pin').hide();
    $('#10pin').hide();
    if (bowl === 2) { $("#pinButtons").show().children().show() };
    bowl += 1;
    if (bowl === 3) { bowl = 1 }
  });

  $('#10pin').click(function() {
    scorecard.add(10, round);
    $(`#round${round + 1}Score`).text(scorecard.calculateScore(round));
    if (scorecard.scoreTracker[round].length === 2) { round +=1 };
  });

});
