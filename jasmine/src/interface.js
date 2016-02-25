$(document).ready(function() {
  var score = new Score;
  var bowling = new Bowling(score);
  var count = 0;

  $('#0').click(function() {
    bowling.pinsHit(0);
    $('#score').text(bowling.calculationRoute());
  });

  $('#1').click(function() {
    bowling.pinsHit(1);
    $('#score').text(bowling.calculationRoute());
  });

  $('#2').click(function() {
    bowling.pinsHit(2);
    $('#score').text(bowling.calculationRoute());
  });

  $('#3').click(function() {
    bowling.pinsHit(3);
    $('#score').text(bowling.calculationRoute());
  });

  $('#4').click(function() {
    bowling.pinsHit(4);
    $('#score').text(bowling.calculationRoute());
  });

  $('#5').click(function() {
    bowling.pinsHit(5);
    $('#score').text(bowling.calculationRoute());
  });

  $('#6').click(function() {
    bowling.pinsHit(6);
    $('#score').text(bowling.calculationRoute());
  });

  $('#7').click(function() {
    bowling.pinsHit(7);
    $('#score').text(bowling.calculationRoute());
  });

  $('#8').click(function() {
    bowling.pinsHit(8);
    $('#score').text(bowling.calculationRoute());
  });

  $('#9').click(function() {
    bowling.pinsHit(9);
    $('#score').text(bowling.calculationRoute());
  });

  $('#10').click(function() {
    bowling.pinsHit(10);
    $('#score').text(bowling.calculationRoute());
  });

  $("button").click(function() {
    console.log(count = count+1)
    for (i=1; i <= count; i ++) {
      if (i%2 === 0) {j=1}else{j=0}
      if (i === 21) {
        $('#roll21').text(bowling.frames[Math.ceil(10)][2]);
      } else {
        $('#roll'+i).text(bowling.frames[Math.ceil(i/2)][j]);
      }
    }
  });


  $('#score').text(bowling.calculationRoute());




});
