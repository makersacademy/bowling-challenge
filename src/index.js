var scorecard = new Scorecard;
var frame1 = new Frame;
var frame2 = new Frame;
var frame3 = new Frame;
var frame4 = new Frame;
var frame5 = new Frame;
var frame6 = new Frame;
var frame7 = new Frame;
var frame8 = new Frame;
var frame9 = new Frame;
var frame10 = new Frame;

$(document).ready(function() {
  function reset() {
    location.reload(true)
  }

  function refreshScores() {
    $("#frame-score-1").text(frame1.calculateTotalScore());
    $("#frame-score-2").text(frame2.calculateTotalScore());
    $("#frame-score-3").text(frame3.calculateTotalScore());
    $("#frame-score-4").text(frame4.calculateTotalScore());
    $("#frame-score-5").text(frame5.calculateTotalScore());
    $("#frame-score-6").text(frame6.calculateTotalScore());
    $("#frame-score-7").text(frame7.calculateTotalScore());
    $("#frame-score-8").text(frame8.calculateTotalScore());
    $("#frame-score-9").text(frame9.calculateTotalScore());
    $("#frame-score-10").text(frame10.calculateTotalScore());
    $("#running-total").text(scorecard.calculateTotalScore());
  } 

  $("#first-roll-submit-1").click(function() {
    var pins = parseInt($("#first-roll-1").val());
    frame1.enterFirstRollScore(pins, scorecard);
    $("#first-roll-1").prop("readOnly", true);
    refreshScores();
  });

  $("#second-roll-submit-1").click(function() {
    var pins = parseInt($("#second-roll-1").val());
    frame1.enterSecondRollScore(pins, scorecard);
    $("#second-roll-1").prop("readOnly", true);
    refreshScores();
  });

  $("#first-roll-submit-2").click(function() {
    var pins = parseInt($("#first-roll-2").val());
    frame2.enterFirstRollScore(pins, scorecard);
    $("#first-roll-2").prop("readOnly", true);
    refreshScores();
  });

  $("#second-roll-submit-2").click(function() {
    var pins = parseInt($("#second-roll-2").val());
    frame2.enterSecondRollScore(pins, scorecard);
    $("#second-roll-2").prop("readOnly", true);
    refreshScores();
  });

  $("#first-roll-submit-3").click(function() {
    var pins = parseInt($("#first-roll-3").val());
    frame3.enterFirstRollScore(pins, scorecard);
    $("#first-roll-3").prop("readOnly", true);
    refreshScores();
  });

  $("#second-roll-submit-3").click(function() {
    var pins = parseInt($("#second-roll-3").val());
    frame3.enterSecondRollScore(pins, scorecard);
    $("#second-roll-3").prop("readOnly", true);
    refreshScores();
  });

  $("#first-roll-submit-4").click(function() {
    var pins = parseInt($("#first-roll-4").val());
    frame4.enterFirstRollScore(pins, scorecard);
    $("#first-roll-4").prop("readOnly", true);
    refreshScores();
  });

  $("#second-roll-submit-4").click(function() {
    var pins = parseInt($("#second-roll-4").val());
    frame4.enterSecondRollScore(pins, scorecard);
    $("#second-roll-4").prop("readOnly", true);
    refreshScores();
  });

  $("#first-roll-submit-5").click(function() {
    var pins = parseInt($("#first-roll-5").val());
    frame5.enterFirstRollScore(pins, scorecard);
    $("#first-roll-5").prop("readOnly", true);
    refreshScores();
  });

  $("#second-roll-submit-5").click(function() {
    var pins = parseInt($("#second-roll-5").val());
    frame5.enterSecondRollScore(pins, scorecard);
    $("#second-roll-5").prop("readOnly", true);
    refreshScores();
  });

  $("#first-roll-submit-6").click(function() {
    var pins = parseInt($("#first-roll-6").val());
    frame6.enterFirstRollScore(pins, scorecard);
    $("#first-roll-6").prop("readOnly", true);
    refreshScores();
  });

  $("#second-roll-submit-6").click(function() {
    var pins = parseInt($("#second-roll-6").val());
    frame6.enterSecondRollScore(pins, scorecard);
    $("#second-roll-6").prop("readOnly", true);
    refreshScores();
  });

  $("#first-roll-submit-7").click(function() {
    var pins = parseInt($("#first-roll-7").val());
    frame7.enterFirstRollScore(pins, scorecard);
    $("#first-roll-7").prop("readOnly", true);
    refreshScores();
  });

  $("#second-roll-submit-7").click(function() {
    var pins = parseInt($("#second-roll-7").val());
    frame7.enterSecondRollScore(pins, scorecard);
    $("#second-roll-7").prop("readOnly", true);
    refreshScores();
  });

  $("#first-roll-submit-8").click(function() {
    var pins = parseInt($("#first-roll-8").val());
    frame8.enterFirstRollScore(pins, scorecard);
    $("#first-roll-8").prop("readOnly", true);
    refreshScores();
  });

  $("#second-roll-submit-8").click(function() {
    var pins = parseInt($("#second-roll-8").val());
    frame8.enterSecondRollScore(pins, scorecard);
    $("#second-roll-8").prop("readOnly", true);
    refreshScores();
  });

  $("#first-roll-submit-9").click(function() {
    var pins = parseInt($("#first-roll-9").val());
    frame9.enterFirstRollScore(pins, scorecard);
    $("#first-roll-9").prop("readOnly", true);
    refreshScores();
  });

  $("#second-roll-submit-9").click(function() {
    var pins = parseInt($("#second-roll-9").val());
    frame9.enterSecondRollScore(pins, scorecard);
    $("#second-roll-9").prop("readOnly", true);
    refreshScores();
  });

  $("#first-roll-submit-10").click(function() {
    var pins = parseInt($("#first-roll-10").val());
    frame10.enterFirstRollScore(pins, scorecard);
    $("#first-roll-10").prop("readOnly", true);
    refreshScores();
  });

  $("#second-roll-submit-10").click(function() {
    var pins = parseInt($("#second-roll-10").val());
    frame10.enterSecondRollScore(pins, scorecard);
    $("#second-roll-10").prop("readOnly", true);
    refreshScores();
  });

  $("#bonus-roll-1-submit").click(function() {
    var pins = parseInt($("#bonus-roll-1").val());
    frame10.enter10thFirstBonusRollScore(pins, scorecard);
    $("#bonus-roll-1").prop("readOnly", true);
    refreshScores();
  });
  $("#bonus-roll-2-submit").click(function() {
    var pins = parseInt($("#bonus-roll-2").val());
    frame10.enter10thSecondBonusRollScore(pins, scorecard);
    $("#bonus-roll-2").prop("readOnly", true);
    refreshScores();
  });

  $("#new-game").click(function() {
    reset();
  });
});