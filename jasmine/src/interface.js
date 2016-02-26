$(document).ready(function() {
  var score = new Score;
  var bowling = new Bowling(score);
  var count = 0;
  var waitSpare = 0;
  var waitStrike = 0;

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
    count = count+1;
    console.log(count)

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



    //   if(waitSpare === 1) {
    //     $('#score' + (Math.ceil(count/2)-1)).text(score.calculateChosen(bowling.frames, (Math.ceil(count/2)-1)));
    //     waitSpare = 0;
    //   }
    //
    // if (count <= 19) {
    //   //normal frames
    //  if (score.isStrike(bowling.frames[Math.ceil(count/2)])) {
    //
    //  } else if (score.isSpare(bowling.frames[Math.ceil(count/2)])) {
    //    waitSpare = 1;
    //  } else {
    //    // print score for normal frame
    //    if (count%2 === 0) {$('#score' + Math.ceil(count/2)).text(score.calculateChosen(bowling.frames, Math.ceil(count/2)));}
    //  }
    //
    // } else {
    //   //frame 10
    //   if (score.isStrike(bowling.frames[10])) {
    //
    //   } else if (score.isSpare(bowling.frames[10])) {
    //     if (count === 21) {$('#score10').text(score.calculateChosen(bowling.frames, 10));}
    //   } else {
    //     // print score for normal frame
    //     if (count%2 === 0) {$('#score10').text(score.calculateChosen(bowling.frames, 10));}
    //   }
    //
    // }




  //   if (count === 21) {
  //     $('#score10').text(score.calculateChosen(bowling.frames, 10));
  //   }
  //   if (count < 21) {
  //
  //
  //
  //   if(waitSpare === 1) {
  //
  //       $('#score' + (Math.ceil(count/2)-1)).text(score.calculateChosen(bowling.frames, (Math.ceil(count/2)-1)));
  //
  //     waitSpare = 0;
  //   }
  //
  //   if(waitStrike === 2) {
  //     $('#score' + (Math.ceil(count/2)-2)).text(score.calculateChosen(bowling.frames, (Math.ceil(count/2)-2)));
  //     waitStrike -- ;
  //   }
  //
  //   if(waitStrike === 3) {
  //     $('#score' + (Math.ceil(count/2)-2)).text(score.calculateChosen(bowling.frames, (Math.ceil(count/2)-2)));
  //     waitStrike -- ;
  //   }
  //
  //   if (count < 20) {
  //     if (score.isStrike(bowling.frames[Math.ceil(count/2)]) && waitStrike === 1) {
  //       waitStrike ++;
  //     }
  //   }
  //
  //
  //
  //   if (count%2 === 0) {
  //
  //     if(waitStrike === 1) {
  //       if (count<=20) {$('#score' + (Math.ceil(count/2)-1)).text(score.calculateChosen(bowling.frames, (Math.ceil(count/2)-1)));}
  //       waitStrike --;
  //     }
  //
  //     if (score.isStrike(bowling.frames[Math.ceil(count/2)])) {
  //       waitStrike ++;
  //     } else if (score.isSpare(bowling.frames[Math.ceil(count/2)])) {
  //       waitSpare = 1;
  //     } else {
  //       $('#score' + Math.ceil(count/2)).text(score.calculateChosen(bowling.frames, Math.ceil(count/2)));
  //     }
  //   }
  //
  // }
  //   console.log(waitStrike)
  });


  $('#score').text(bowling.calculationRoute());




});
