$(document).ready(function() {
  var bowling = new Bowling();

  $("#1").click(function() {
    bowling.roll(1);
    $("#totalScore").text(bowling.score)
  })

  $("#2").click(function() {
    bowling.roll(2);
    $("#totalScore").text(bowling.score)
  })

  $("#3").click(function() {
    bowling.roll(3);
    $("#totalScore").text(bowling.score)
  })

  $("#4").click(function() {
    bowling.roll(4);
    $("#totalScore").text(bowling.score)
  })

  $("#5").click(function() {
    bowling.roll(5);
    $("#totalScore").text(bowling.score)
  })

  $("#6").click(function() {
    bowling.roll(6);
    $("#totalScore").text(bowling.score)
  })

  $("#7").click(function() {
    bowling.roll(7);
    $("#totalScore").text(bowling.score)
  })

  $("#8").click(function() {
    bowling.roll(8);
    $("#totalScore").text(bowling.score)
  })

  $("#9").click(function() {
    bowling.roll(9);
    $("#totalScore").text(bowling.score)
  })
});
