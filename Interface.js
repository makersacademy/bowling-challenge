$(() => {
  var scorecard = new Scorecard();

  $("#ambience").click(() => {
    if ($("#video").prop("muted")) {
      $("#video").prop("muted", false);
      $("#ambience span").html("on");
    } else {
      $("#video").prop("muted", true);
      $("#ambience span").html("off");
    }
  });

  $(".record").click((e) => {
    let score = parseInt(e.currentTarget.value);
    scorecard.record(score);
    updateScores();
  });

  function updateScores() {
    scorecard.frames.forEach((frame, i) => {
      if (i < 9) {
        updateFrame(frame, i);
      } else {
        updateFrame9(frame, i);
      }
      updateRunningTotal(frame, i);
    });
  }

  function updateFrame(frame, i) {
    $(`#frame${i} .roll1`).html(frame.isStrike() ? "X" : frame.roll1);
    $(`#frame${i} .roll2`).html(frame.isSpare() ? "/" : frame.roll2);
  }

  function updateFrame9(frame, i) {
    $("#frame9 .roll1").html(frame.roll1 == 10 ? "X" : frame.roll1);

    if (frame.roll2 == 10) {
      $("#frame9 .roll2").html("X");
    } else if (frame.isSpare()) {
      $("#frame9 .roll2").html("/");
    } else {
      $("#frame9 .roll2").html(frame.roll2);
    }

    $("#frame9 .roll3").html(frame.roll3 == 10 ? "X" : frame.roll3);
  }

  function updateRunningTotal(frame, i) {
    if (frame.isComplete()) {
      $(`#frame${i} .running-total`).html(scorecard.runningTotal(i));
      if (i === 9) {
        $(`#grand-total`).html(scorecard.runningTotal(i));
      }
    }
  }

  $("#reset").click(() => {
    scorecard = new Scorecard();
    clearScores();
  });

  function clearScores() {
    scorecard.frames.forEach((frame, i) => {
      clearFrame(frame, i);
    });
    clearTotal();
  }

  function clearFrame(frame, i) {
    $(`#frame${i} .roll1`).empty();
    $(`#frame${i} .roll2`).empty();
    $(`#frame${i} .roll3`).empty();
    $(`#frame${i} .running-total`).empty();
  }

  function clearTotal() {
    $(`#grand-total`).empty();
  }
});
