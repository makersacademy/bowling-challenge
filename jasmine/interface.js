$(document).ready(function() {
  var game = new BowlingGame();

  $('#roll1').on('click', function() {
    var pins1 =  $("#pins1").val();
    var pins2 =  $("#pins2").val();

    game.roll(pins1,pins2);

    var sum1 = 0;
$(".frame1").each( function(){
          sum1 += $(this).val() * 1;
});

    $('#currentScore1').text(sum1);
    $('#currentRoll').text(game.currentRollNumber);
    game.scoreFinal += sum1;
    $('#final').text(game.scoreFinal);
});


$('#roll2').on('click', function() {
  var pins3 =  $("#pins3").val();
  var pins4 =  $("#pins4").val();

  game.roll(pins3,pins4);

  var sum2 = 0;
$(".frame2").each( function(){
        sum2 += $(this).val() * 1;
});

  $('#currentScore2').text(sum2);
  $('#currentRoll').text(game.currentRollNumber);
  game.scoreFinal += sum2;
  $('#final').text(game.scoreFinal);
});

$('#roll3').on('click', function() {
  var pins5 =  $("#pins5").val();
  var pins6 =  $("#pins6").val();

  game.roll(pins5,pins6);

  var sum3 = 0;
$(".frame3").each( function(){
        sum3 += $(this).val() * 1;
});

  $('#currentScore3').text(sum3);
  $('#currentRoll').text(game.currentRollNumber);
  game.scoreFinal += sum3;
  $('#final').text(game.scoreFinal);
});

$('#roll4').on('click', function() {
  var pins7 =  $("#pins7").val();
  var pins8 =  $("#pins8").val();

  game.roll(pins7,pins8);
  var sum4 = 0;
$(".frame4").each( function(){
        sum4 += $(this).val() * 1;
});

  $('#currentScore4').text(sum4);
  $('#currentRoll').text(game.currentRollNumber);
  game.scoreFinal += sum4;
  $('#final').text(game.scoreFinal);
});

$('#roll5').on('click', function() {
  var pins9 =  $("#pins9").val();
  var pins10 =  $("#pins10").val();

  game.roll(pins9,pins10);

  var sum5 = 0;
$(".frame5").each( function(){
        sum5 += $(this).val() * 1;
});

  $('#currentScore5').text(sum5);
  $('#currentRoll').text(game.currentRollNumber);
  game.scoreFinal += sum5;
  $('#final').text(game.scoreFinal);
});

$('#roll6').on('click', function() {
  var pins11 =  $("#pins11").val();
  var pins12 =  $("#pins12").val();

  game.roll(pins11,pins12);

  var sum6 = 0;
$(".frame6").each( function(){
        sum6 += $(this).val() * 1;
});

  $('#currentScore6').text(sum6);
  $('#currentRoll').text(game.currentRollNumber);
  game.scoreFinal += sum6;
  $('#final').text(game.scoreFinal);
});

$('#roll7').on('click', function() {
  var pins13 =  $("#pins13").val();
  var pins14 =  $("#pins14").val();

  game.roll(pins13,pins14);

  var sum7 = 0;
$(".frame7").each( function(){
        sum7 += $(this).val() * 1;
});

  $('#currentScore7').text(sum7);
  $('#currentRoll').text(game.currentRollNumber);
  game.scoreFinal += sum7;
  $('#final').text(game.scoreFinal);
});

$('#roll8').on('click', function() {
  var pins15 =  $("#pins15").val();
  var pins16 =  $("#pins16").val();

  game.roll(pins15,pins16);

  var sum8 = 0;
$(".frame8").each( function(){
        sum8 += $(this).val() * 1;
});

  $('#currentScore8').text(sum8);
  $('#currentRoll').text(game.currentRollNumber);
  game.scoreFinal += sum8;
  $('#final').text(game.scoreFinal);
});

$('#roll9').on('click', function() {
  var pins17 =  $("#pins17").val();
  var pins18 =  $("#pins18").val();

  game.roll(pins18,pins18);

  var sum9 = 0;
$(".frame9").each( function(){
        sum9 += $(this).val() * 1;
});

  $('#currentScore9').text(sum9);
  $('#currentRoll').text(game.currentRollNumber);
  game.scoreFinal += sum9;
  $('#final').text(game.scoreFinal);
});

$('#roll10').on('click', function() {
  var pins19 =  $("#pins19").val();
  var pins20 =  $("#pins20").val();

  game.roll(pins19,pins20);

  var sum10 = 0;
$(".frame10").each( function(){
        sum10 += $(this).val() * 1;
});

  $('#currentScore10').text(sum10);
  $('#currentRoll').text(game.currentRollNumber);
  game.scoreFinal += sum10;
  $('#final').text(game.scoreFinal);
});

$('#roll11').on('click', function() {
  var pins21 =  $("#pins21").val();
  var pins22 =  $("#pins22").val();

  game.roll(pins21,pins22);

  var sum11 = 0;
$(".frame11").each( function(){
        sum11 += $(this).val() * 1;
});

  $('#currentScore11').text(sum11);
  $('#currentRoll').text(game.currentRollNumber);
  game.scoreFinal += sum11;
  $('#final').text(game.scoreFinal);
});

$('#roll12').on('click', function() {
  var pins23 =  $("#pins23").val();
  var pins24 =  $("#pins24").val();

  game.roll(pins23,pins24);

  var sum12 = 0;
$(".frame12").each( function(){
        sum12 += $(this).val() * 1;
});

  $('#currentScore12').text(sum12);
  $('#currentRoll').text(game.currentRollNumber);
  game.scoreFinal += sum12;
  $('#final').text(game.scoreFinal);
});

$('#roll13').on('click', function() {
  var pins25 =  $("#pins25").val();
  var pins26 =  $("#pins26").val();

  game.roll(pins25,pins26);

  var sum13 = 0;
$(".frame13").each( function(){
        sum13 += $(this).val() * 1;
});

  $('#currentScore13').text(sum13);
  $('#currentRoll').text(game.currentRollNumber);
  game.scoreFinal += sum13;
  $('#final').text(game.scoreFinal);
});

$('#finalScore').on('click', function() {
  $('#final2').text(game.scoreFinal);
});


});
