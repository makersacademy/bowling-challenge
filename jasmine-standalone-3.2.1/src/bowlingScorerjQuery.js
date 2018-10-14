$(document).ready(function() {
  var game = new BowlingScorer();

  $('#score1').on('click', function() {
    game.roll(1);
    $('#score10').hide();
  })

  $('#score2').on('click', function() {
    game.roll(2);
    $('#score9').hide();
    $('#score10').hide();
  })

  $('#score3').on('click', function() {
    game.roll(3);
    $('#score8').hide();
    $('#score9').hide();
    $('#score10').hide();
  })

  $('#score4').on('click', function() {
    game.roll(4);
    $('#score7').hide();
    $('#score8').hide();
    $('#score9').hide();
    $('#score10').hide();
  })

  $('#score5').on('click', function() {
    game.roll(5);
    $('#score6').hide();
    $('#score7').hide();
    $('#score8').hide();
    $('#score9').hide();
    $('#score10').hide();
  })

  $('#score6').on('click', function() {
    game.roll(6);
    $('#score5').hide();
    $('#score6').hide();
    $('#score7').hide();
    $('#score8').hide();
    $('#score9').hide();
    $('#score10').hide();
  })

  $('#score7').on('click', function() {
    game.roll(7);
    $('#score4').hide();
    $('#score5').hide();
    $('#score6').hide();
    $('#score7').hide();
    $('#score8').hide();
    $('#score9').hide();
    $('#score10').hide();
  })

  $('#score8').on('click', function() {
    game.roll(8);
    $('#score3').hide();
    $('#score4').hide();
    $('#score5').hide();
    $('#score6').hide();
    $('#score7').hide();
    $('#score8').hide();
    $('#score9').hide();
    $('#score10').hide();
  })

  $('#score9').on('click', function() {
    game.roll(9);
    $('#score2').hide();
    $('#score3').hide();
    $('#score4').hide();
    $('#score5').hide();
    $('#score6').hide();
    $('#score7').hide();
    $('#score8').hide();
    $('#score9').hide();
    $('#score10').hide();
  })

  // $('#Score').text("hello world");
  // $('#score6').hide();
})
