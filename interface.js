$(document).ready(function () {


  var bowling = new Bowling();

  $('#submit1').on('click', function () {
    bowling.knock(Number($('#fram1roll1').val()));
    bowling.knock(Number($('#fram1roll2').val()));
    $('#totaltillfram1').text(bowling.getTotalScores(1));
  });

  $('#submit2').on('click', function () {
    bowling.knock(Number($('#fram2roll1').val()));
    bowling.knock(Number($('#fram2roll2').val()));
    $('#totaltillfram2').text(bowling.getTotalScores(2));
  });

  $('#submit3').on('click', function () {
    bowling.knock(Number($('#fram3roll1').val()));
    bowling.knock(Number($('#fram3roll2').val()));
    $('#totaltillfram3').text(bowling.getTotalScores(3));
  });

  $('#submit4').on('click', function () {
    bowling.knock(Number($('#fram4roll1').val()));
    bowling.knock(Number($('#fram4roll2').val()));
    $('#totaltillfram4').text(bowling.getTotalScores(4));
  });

  $('#submit5').on('click', function () {
    bowling.knock(Number($('#fram5roll1').val()));
    bowling.knock(Number($('#fram5roll2').val()));
    $('#totaltillfram5').text(bowling.getTotalScores(5));
  });

  $('#submit6').on('click', function () {
    bowling.knock(Number($('#fram6roll1').val()));
    bowling.knock(Number($('#fram6roll2').val()));
    $('#totaltillfram6').text(bowling.getTotalScores(6));
  });

  $('#submit7').on('click', function () {
    bowling.knock(Number($('#fram7roll1').val()));
    bowling.knock(Number($('#fram7roll2').val()));
    $('#totaltillfram7').text(bowling.getTotalScores(7));
  });

  $('#submit8').on('click', function () {
    bowling.knock(Number($('#fram8roll1').val()));
    bowling.knock(Number($('#fram8roll2').val()));
    $('#totaltillfram8').text(bowling.getTotalScores(8));
  });

  $('#submit9').on('click', function () {
    bowling.knock(Number($('#fram9roll1').val()));
    bowling.knock(Number($('#fram9roll2').val()));
    $('#totaltillfram9').text(bowling.getTotalScores(9));
  });

  $('#submit10').on('click', function () {
    bowling.knock(Number($('#fram10roll1').val()));
    bowling.knock(Number($('#fram10roll2').val()));
    $('#totaltillfram10').text(bowling.getTotalScores(10));
  });


});