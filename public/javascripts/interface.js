$(document).ready(function() {
  var bowling = new Bowling();

  $("#0").click(function() {
    bowling.play(0);
    if ($(selectBowl()).is(":empty")) {
      $(selectBowl()).text("0");
    } else {
      $(frameSelect()).text("0");
    }
    $(selectTotaler()).text(bowling.total(bowling.score));
  });

  $("#1").click(function() {
    bowling.play(1);
    helper("1");
    $(selectTotaler()).text(bowling.total(bowling.score));
  });

  $("#2").click(function() {
    bowling.play(2);
    helper("2");
    $(selectTotaler()).text(bowling.total(bowling.score));
  });

  $("#3").click(function() {
    bowling.play(3);
    helper("3");
    $(selectTotaler()).text(bowling.total(bowling.score));
  });

  $("#4").click(function() {
    bowling.play(4);
    helper("4");
    $(selectTotaler()).text(bowling.total(bowling.score));
  });

  $("#5").click(function() {
    bowling.play(5);
    helper("5");
    $(selectTotaler()).text(bowling.total(bowling.score));
  });

  $("#6").click(function() {
    bowling.play(6);
    helper("6");
    $(selectTotaler()).text(bowling.total(bowling.score));
  });

  $("#7").click(function() {
    bowling.play(7);
    helper("7");
    $(selectTotaler()).text(bowling.total(bowling.score));
  });

  $("#8").click(function() {
    bowling.play(8);
    helper("7");
    $(selectTotaler()).text(bowling.total(bowling.score));
  });

  $("#9").click(function() {
    bowling.play(9);
    helper("9");
    $(selectTotaler()).text(bowling.total(bowling.score));
  });

  $("#10").click(function() {
    bowling.play(10);
    helper("10");
    $(selectTotaler()).text(bowling.total(bowling.score));
  });

  helper = function(number) {
    if ($(selectBowl()).is(":empty")) {
      $(selectBowl()).text(number);
    } else if (bowling.spare) {
      $(frameSelect()).text("/");
    } else {
      $(selectBowl()).text(bowling.score[bowling.frame][0]);
      $(frameSelect()).text(number);
    }
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
