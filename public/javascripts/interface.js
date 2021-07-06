$(document).ready(function() {
  var bowling = new Bowling();

  $("#0").click(function() {
    bowling.play(0);
    helper(0);
  });

  $("#1").click(function() {
    bowling.play(1);
    helper("1");
  });

  $("#2").click(function() {
    bowling.play(2);
    helper("2");
  });

  $("#3").click(function() {
    bowling.play(3);
    helper("3");
  });

  $("#4").click(function() {
    bowling.play(4);
    helper("4");
  });

  $("#5").click(function() {
    bowling.play(5);
    helper("5");
  });

  $("#6").click(function() {
    bowling.play(6);
    helper("6");
  });

  $("#7").click(function() {
    bowling.play(7);
    helper("7");
  });

  $("#8").click(function() {
    bowling.play(8);
    helper("7");
  });

  $("#9").click(function() {
    bowling.play(9);
    helper("9");
  });

  $("#10").click(function() {
    bowling.play(10);
    helper("10");
  });

  helper = function(number) {
    if ($(selectBowl()).is(":empty")) {
      $(selectBowl()).text(number);
    } else if (bowling.spare) {
      $(selectFrame()).text("/");
    } else {
      $(selectBowl()).text(bowling.score[bowling.frame][0]);
      $(selectFrame()).text(number);
    }
    $(selectTotaler()).text(bowling.total(bowling.score));
  };

  selectTotaler = function() {
    return "#totaler" + String(bowling.frame);
  };
  selectBowl = function() {
    return "#bowl" + String(bowling.frame + 1);
  };
  selectFrame = function() {
    return "#frame" + String(bowling.frame + 1);
  };
});
