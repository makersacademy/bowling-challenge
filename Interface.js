var scorecard = new Scorecard();

$(function () {
  $("#ambience").click(function () {
    if ($("#video").prop("muted")) {
      $("#video").prop("muted", false);
      $("#ambience span").html("on");
    } else {
      $("#video").prop("muted", true);
      $("#ambience span").html("off");
    }
  });

  $(".record").click(function (e) {
    let score = parseInt(e.currentTarget.value);
    scorecard.record(score);
    updateScores();
  });

  var updateScores = () => {
    scorecard.frames.forEach(function (frame, i) {
      if (i < 9) {
        updateFrame(frame, i);
      } else {
        updateFrame9(frame, i);
      }
    });
  };
});

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

// Scorecard methods for interfacing
// scorecard.record(score)
// scorecard.runningTotal(frame)
// scorecard.frames[framenumber].roll1
// scorecard.frames[framenumber].roll2
// scorecard.frames[framenumber].roll3
