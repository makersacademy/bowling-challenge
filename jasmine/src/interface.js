$(document).ready(function() {
  var score = new Score;
  var bowling = new Bowling(score);
  var count = 0;

  $('#0').click(function() {
    bowling.pinsHit(0);
  });

  $('#1').click(function() {
    bowling.pinsHit(1);
  });

  $('#2').click(function() {
    bowling.pinsHit(2);
  });

  $('#3').click(function() {
    bowling.pinsHit(3);
  });

  $('#4').click(function() {
    bowling.pinsHit(4);
  });

  $('#5').click(function() {
    bowling.pinsHit(5);
  });

  $('#6').click(function() {
    bowling.pinsHit(6);
  });

  $('#7').click(function() {
    bowling.pinsHit(7);
  });

  $('#8').click(function() {
    bowling.pinsHit(8);
  });

  $('#9').click(function() {
    bowling.pinsHit(9);
  });

  $('#10').click(function() {
    bowling.pinsHit(10);
  });

  $("button").click(function() {
    count = count+1;

    for (i=1; i <= count; i ++) {
      if (i%2 === 0) {j=1}else{j=0}
      if (i === 21) {
        $('#roll21').text(bowling.frames[10][2]);
      } else {
        if (bowling.frames[Math.ceil(i/2)][j] === 10) {
          $('#roll'+i).text(bowling.frames[Math.ceil(i/2)][0]);
          if (i === count && count < 19) {count ++;}
        } else {
          $('#roll'+i).text(bowling.frames[Math.ceil(i/2)][j]);
        }
      }
    }
    var scoreArray = []
    if (i < 20) {
      scoreArray = score.createScoreArray(bowling.frames,(Math.ceil(count/2)+1));
    } else {
      scoreArray = score.createScoreArray(bowling.frames,(11));
    }

    for (i=1; i <= count; i ++) {
      if (i < 19) {
        if (scoreArray[(Math.ceil(i/2)-1)] === parseInt(scoreArray[(Math.ceil(i/2)-1)], 10)) {
          $('#score' + Math.ceil(i/2)).text(scoreArray[(Math.ceil(i/2)-1)]);
        }
      } else {
        if (scoreArray[(Math.ceil(i/2)-1)] === parseInt(scoreArray[(Math.ceil(i/2)-1)], 10)) {
          $('#score10').text(scoreArray[9]);
        }
      }
    }
  });






});
