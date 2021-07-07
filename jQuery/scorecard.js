$(document).ready(function() {

  let scorecard = new playerScoreCard();
  let round = 0;
  let bowl = 1;

  $('#0pin').click(function() {
    scorecard.add(0, round);
    if (bowl === 1) { $(`#round${round + 1}FirstBowl`).text(0) };

    if (bowl === 2) {
      $("#pinButtons").show().children().show();
      $(`#round${round + 1}SecondBowl`).text(0)
      $(`#round${round + 1}Score`).text(scorecard.calculateScore(round));
    }

    if (scorecard.scoreTracker[round].length === 2) { round +=1 };
    bowl += 1;

    if (bowl === 3) { bowl = 1 }
  });

  $('#1pin').click(function() {
    scorecard.add(1, round);
    if (bowl === 1) { $(`#round${round + 1}FirstBowl`).text(1);
      $('#10pin').hide();
    };

    if (bowl === 2) {
      $("#pinButtons").show().children().show();
      $(`#round${round + 1}SecondBowl`).text(1)
      $(`#round${round + 1}Score`).text(scorecard.calculateScore(round));
    }

    if (scorecard.scoreTracker[round].length === 2) { round +=1 };
    bowl += 1;

    if (bowl === 3) { bowl = 1 }
  });

  $('#2pin').click(function() {
    scorecard.add(2, round);

    if (bowl === 1) { $(`#round${round + 1}FirstBowl`).text(2);
      $('#9pin').hide();
      $('#10pin').hide();
    };

    if (bowl === 2) {
      $("#pinButtons").show().children().show();
      $(`#round${round + 1}SecondBowl`).text(2)
      $(`#round${round + 1}Score`).text(scorecard.calculateScore(round));
    }

    if (scorecard.scoreTracker[round].length === 2) { round +=1 };
    bowl += 1;

    if (bowl === 3) { bowl = 1 }
  });

  $('#3pin').click(function() {
    scorecard.add(3, round);
    if (bowl === 1) { $(`#round${round + 1}FirstBowl`).text(3);
      $('#8pin').hide();
      $('#9pin').hide();
      $('#10pin').hide();
    };

    if (bowl === 2) {
      $("#pinButtons").show().children().show();
      $(`#round${round + 1}SecondBowl`).text(3)
      $(`#round${round + 1}Score`).text(scorecard.calculateScore(round));
    }

    if (scorecard.scoreTracker[round].length === 2) { round +=1 };
    bowl += 1;

    if (bowl === 3) { bowl = 1 }
  });

  $('#4pin').click(function() {
    scorecard.add(4, round);
    if (bowl === 1) { $(`#round${round + 1}FirstBowl`).text(4);
      $('#7pin').hide();
      $('#8pin').hide();
      $('#9pin').hide();
      $('#10pin').hide();
    };

    if (bowl === 2) {
      $("#pinButtons").show().children().show();
      $(`#round${round + 1}SecondBowl`).text(4)
      $(`#round${round + 1}Score`).text(scorecard.calculateScore(round));
    }

    if (scorecard.scoreTracker[round].length === 2) { round +=1 };
    bowl += 1;

    if (bowl === 3) { bowl = 1 }
  });

  $('#5pin').click(function() {
    scorecard.add(5, round);
    if (bowl === 1) { $(`#round${round + 1}FirstBowl`).text(5);
      $('#6pin').hide();
      $('#7pin').hide();
      $('#8pin').hide();
      $('#9pin').hide();
      $('#10pin').hide();
    };

    if (bowl === 2) {
      $("#pinButtons").show().children().show();
      $(`#round${round + 1}SecondBowl`).text(5)
      $(`#round${round + 1}Score`).text(scorecard.calculateScore(round));
    }

    if (scorecard.scoreTracker[round].length === 2) { round +=1 };
    bowl += 1;

    if (bowl === 3) { bowl = 1 }
  });

  $('#6pin').click(function() {
    scorecard.add(6, round);
    if (bowl === 1) { $(`#round${round + 1}FirstBowl`).text(6);
      $('#5pin').hide();
      $('#6pin').hide();
      $('#7pin').hide();
      $('#8pin').hide();
      $('#9pin').hide();
      $('#10pin').hide();
    };

    if (bowl === 2) {
      $("#pinButtons").show().children().show();
      $(`#round${round + 1}SecondBowl`).text(6)
      $(`#round${round + 1}Score`).text(scorecard.calculateScore(round));
    }

    if (scorecard.scoreTracker[round].length === 2) { round +=1 };
    bowl += 1;

    if (bowl === 3) { bowl = 1 }
  });

  $('#7pin').click(function() {
    scorecard.add(7, round);
    if (bowl === 1) { $(`#round${round + 1}FirstBowl`).text(7)
      $('#4pin').hide();
      $('#5pin').hide();
      $('#6pin').hide();
      $('#7pin').hide();
      $('#8pin').hide();
      $('#9pin').hide();
      $('#10pin').hide();
    };

    if (bowl === 2) {
      $("#pinButtons").show().children().show();
      $(`#round${round + 1}SecondBowl`).text(7)
      $(`#round${round + 1}Score`).text(scorecard.calculateScore(round));
    }

    if (scorecard.scoreTracker[round].length === 2) { round +=1 };
    bowl += 1;

    if (bowl === 3) { bowl = 1 }
  });

  $('#8pin').click(function() {
    scorecard.add(8, round);
    if (bowl === 1) { $(`#round${round + 1}FirstBowl`).text(8);
      $('#3pin').hide();
      $('#4pin').hide();
      $('#5pin').hide();
      $('#6pin').hide();
      $('#7pin').hide();
      $('#8pin').hide();
      $('#9pin').hide();
      $('#10pin').hide();
    };

    if (bowl === 2) {
      $("#pinButtons").show().children().show();
      $(`#round${round + 1}SecondBowl`).text(8)
      $(`#round${round + 1}Score`).text(scorecard.calculateScore(round));
    }

    if (scorecard.scoreTracker[round].length === 2) { round +=1 };
    bowl += 1;

    if (bowl === 3) { bowl = 1 }
  });

  $('#9pin').click(function() {
    scorecard.add(9, round);
    if (bowl === 1) {
      $(`#round${round + 1}FirstBowl`).text(9)
      $('#2pin').hide();
      $('#3pin').hide();
      $('#4pin').hide();
      $('#5pin').hide();
      $('#6pin').hide();
      $('#7pin').hide();
      $('#8pin').hide();
      $('#9pin').hide();
      $('#10pin').hide();
    };
    if (bowl === 2) {
      $("#pinButtons").show().children().show();
      $(`#round${round + 1}SecondBowl`).text(9)
      $(`#round${round + 1}Score`).text(scorecard.calculateScore(round));
    };
    if (scorecard.scoreTracker[round].length === 2) { round +=1 };
    bowl += 1;
    if (bowl === 3) { bowl = 1 }
  });

  $('#10pin').click(function() {
    scorecard.add(10, round);

    if (bowl === 1) {
     $(`#round${round + 1}FirstBowl`).text("-");
     $(`#round${round + 1}SecondBowl`).text("X")
     $(`#round${round + 1}Score`).text(scorecard.calculateScore(round));
    };

    if (bowl === 2) {
      $("#pinButtons").show().children().show();
      $(`#round${round + 1}SecondBowl`).text("/")
      $(`#round${round + 1}Score`).text(scorecard.calculateScore(round));
    }

    if (scorecard.scoreTracker[round].length === 2) { round +=1 };
    bowl = 1
  });
});
