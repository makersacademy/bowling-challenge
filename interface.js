$(document).ready(function() {
  var game = new Game();
  updateScore();
  var frame1_roll1;
  var frame1_roll2;
  var frame2_roll1;
  var frame2_roll2;
  var frame3_roll1;
  var frame3_roll2;
  var frame4_roll1;
  var frame4_roll2;
  var frame5_roll1;
  var frame5_roll2;
  var frame6_roll1;
  var frame6_roll2;
  var frame7_roll1;
  var frame7_roll2;
  var frame8_roll1;
  var frame8_roll2;
  var frame9_roll1;
  var frame9_roll2;
  var frame10_roll1;
  var frame10_roll2;

$( "#frame2_roll1" ).hide();
$( "#frame2_roll2" ).hide();
$( "#frame2" ).hide();
$( "#frame2_heading" ).hide();
$( "#frame3_roll1" ).hide();
$( "#frame3_roll2" ).hide();
$( "#frame3" ).hide();
$( "#frame3_heading" ).hide();
$( "#frame4_roll1" ).hide();
$( "#frame4_roll2" ).hide();
$( "#frame4" ).hide();
$( "#frame4_heading" ).hide();
$( "#frame5_roll1" ).hide();
$( "#frame5_roll2" ).hide();
$( "#frame5" ).hide();
$( "#frame5_heading" ).hide();
$( "#frame6_roll1" ).hide();
$( "#frame6_roll2" ).hide();
$( "#frame6" ).hide();
$( "#frame6_heading" ).hide();
$( "#frame7_roll1" ).hide();
$( "#frame7_roll2" ).hide();
$( "#frame7" ).hide();
$( "#frame7_heading" ).hide();
$( "#frame8_roll1" ).hide();
$( "#frame8_roll2" ).hide();
$( "#frame8" ).hide();
$( "#frame8_heading" ).hide();
$( "#frame9_roll1" ).hide();
$( "#frame9_roll2" ).hide();
$( "#frame9" ).hide();
$( "#frame9_heading" ).hide();
$( "#frame10_roll1" ).hide();
$( "#frame10_roll2" ).hide();
$( "#frame10" ).hide();
$( "#frame10_heading" ).hide();


  $('#frame1_roll1').change(function() {
    roll1_input = $('#frame1_roll1').val();
    frame1_roll1 = Number(roll1_input);
  })

  $('#frame1_roll2').change(function() {
    roll2_input = $('#frame1_roll2').val();
    frame1_roll2 = Number(roll2_input);
  })

  $('#frame1').click(function(e) {
    e.preventDefault();
    console.log(frame1_roll1);
    console.log(frame1_roll2);
    game.frame_score(frame1_roll1, frame1_roll2);
    updateScore();
    $('#frame2_show').show();
    $('#frame1_show').hide();
  })


  $('#frame2_roll1').change(function() {
    roll1_input = $('#frame2_roll1').val();
    frame2_roll1 = Number(roll1_input);
  })

  $('#frame2_roll2').change(function() {
    roll2_input = $('#frame2_roll2').val();
    frame2_roll2 = Number(roll2_input);
  })

  $('#frame2').click(function() {
    game.frame_score(frame2_roll1, frame2_roll2);
    updateScore();
    console.log(game._total_score);
    return false;
  })

  $('#frame3_roll1').change(function() {
    roll1_input = $('#frame3_roll1').val();
    frame3_roll1 = Number(roll1_input);
  })

  $('#frame3_roll2').change(function() {
    roll2_input = $('#frame3_roll2').val();
    frame3_roll2 = Number(roll2_input);
  })

  $('#frame3').click(function() {
    game.frame_score(frame3_roll1, frame3_roll2);
    updateScore();
    console.log(game._total_score);
    return false;
  })

  $('#frame4_roll1').change(function() {
    roll1_input = $('#frame4_roll1').val();
    frame4_roll1 = Number(roll1_input);
  })

  $('#frame4_roll2').change(function() {
    roll2_input = $('#frame4_roll2').val();
    frame4_roll2 = Number(roll2_input);
  })

  $('#frame4').click(function() {
    game.frame_score(frame4_roll1, frame4_roll2);
    updateScore();
    console.log(game._total_score);
    return false;
  })

  $('#frame5_roll1').change(function() {
    roll1_input = $('#frame5_roll1').val();
    frame5_roll1 = Number(roll1_input);
  })

  $('#frame5_roll2').change(function() {
    roll2_input = $('#frame5_roll2').val();
    frame5_roll2 = Number(roll2_input);
  })

  $('#frame5').click(function() {
    game.frame_score(frame5_roll1, frame5_roll2);
    updateScore();
    console.log(game._total_score);
    return false;
  })

  $('#frame6_roll1').change(function() {
    roll1_input = $('#frame6_roll1').val();
    frame6_roll1 = Number(roll1_input);
  })

  $('#frame6_roll2').change(function() {
    roll2_input = $('#frame6_roll2').val();
    frame6_roll2 = Number(roll2_input);
  })

  $('#frame6').click(function() {
    game.frame_score(frame6_roll1, frame6_roll2);
    updateScore();
    console.log(game._total_score);
    return false;
  })

  $('#frame7_roll1').change(function() {
    roll1_input = $('#frame7_roll1').val();
    frame7_roll1 = Number(roll1_input);
  })

  $('#frame7_roll2').change(function() {
    roll2_input = $('#frame7_roll2').val();
    frame7_roll2 = Number(roll2_input);
  })

  $('#frame7').click(function() {
    game.frame_score(frame7_roll1, frame7_roll2);
    updateScore();
    console.log(game._total_score);
    return false;
  })

  $('#frame8_roll1').change(function() {
    roll1_input = $('#frame8_roll1').val();
    frame8_roll1 = Number(roll1_input);
  })

  $('#frame8_roll2').change(function() {
    roll2_input = $('#frame8_roll2').val();
    frame8_roll2 = Number(roll2_input);
  })

  $('#frame8').click(function() {
    game.frame_score(frame8_roll1, frame8_roll2);
    updateScore();
    console.log(game._total_score);
    return false;
  })

  $('#frame9_roll1').change(function() {
    roll1_input = $('#frame9_roll1').val();
    frame9_roll1 = Number(roll1_input);
  })

  $('#frame9_roll2').change(function() {
    roll2_input = $('#frame9_roll2').val();
    frame9_roll2 = Number(roll2_input);
  })

  $('#frame9').click(function() {
    game.frame_score(frame9_roll1, frame9_roll2);
    updateScore();
    console.log(game._total_score);
    return false;
  })

  $('#frame10_roll1').change(function() {
    roll1_input = $('#frame10_roll1').val();
    frame10_roll1 = Number(roll1_input);
  })

  $('#frame10_roll2').change(function() {
    roll2_input = $('#frame10_roll2').val();
    frame10_roll2 = Number(roll2_input);
  })

  $('#frame10').click(function() {
    game.frame_score(frame10_roll1, frame10_roll2);
    updateScore();
    console.log(game._total_score);
    return false;
  })


  function updateScore() {
    // console.log(5)
    $('#score').text(game._total_score);
  };


});
