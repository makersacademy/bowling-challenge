$(document).ready(function(){
  var scorecard = new Scorecard();

  $('#one').click(function(){
    scorecard.addOne();
    updateTotal();
  });

  $('#two').click(function(){
    scorecard.addTwo();
    updateTotal();
  });

  $('#three').click(function(){
    scorecard.addThree();
    updateTotal();
  });

  $('#four').click(function(){
    scorecard.addFour();
    updateTotal();
  });

  $('#five').click(function(){
    scorecard.addFive();
    updateTotal();
  });

  $('#six').click(function(){
    scorecard.addSix();
    updateTotal();
  });

  $('#seven').click(function(){
    scorecard.addSeven();
    updateTotal();
  });

  $('#eight').click(function(){
    scorecard.addEight();
    updateTotal();
  });

  $('#nine').click(function(){
    scorecard.addNine();
    updateTotal();
  });

  $('#strike').click(function(){
    scorecard.addTen();
    updateTotal();
  });

  $('#zero').click(function(){
    scorecard.addZero();
    updateTotal();
  });

  $('#finish').click(function(){
    scorecard.endGame();
  });


  function updateTotal(){
    for (var i = 1; i <= 18; i+=2){
      $('#move' + i).text(scorecard._scoreArray[i - 1]);
      $('#move' + (i+1)).text(scorecard._scoreArray[i]);
      if(scorecard._scoreArray[i-1]+scorecard._scoreArray[i]>=11){
        alert('Sorry try again, max pins in one frame is 10');
        scorecard._scoreArray.pop();
        $('#move' + (i+1)).text("");
        $('#move' + (i+1)).text(scorecard._scoreArray[i]);
      }
        $('#move19').text(scorecard._scoreArray[18]);
        if (scorecard._scoreArray[18]===10){
          $('#move20').text(scorecard._scoreArray[19]);
          $('#move21').text(scorecard._scoreArray[20]);
          $('#totalAmount').text(scorecard.resultTen);
          if(scorecard._scoreArray[19]===10){
            $('#move21').text(scorecard._scoreArray[20]);
          } else if (scorecard._scoreArray[19]+scorecard._scoreArray[20]>=11){
            alert('Sorry try again, max pins in one frame is 10');
            scorecard._scoreArray.pop();
            $('#move21').text("");
            $('#move21').text(scorecard._scoreArray[20]);
            $('#totalAmount').text(scorecard.resultTen);
          }
        } else {
          $('#move20').text(scorecard._scoreArray[19]);
          // Validates the roll cannot be more than 10
          if(scorecard._scoreArray[19]===10){
            $('#move21').text(scorecard._scoreArray[20]);
          } else if (scorecard._scoreArray[18]+scorecard._scoreArray[19]===10) {
            $('#move21').text(scorecard._scoreArray[20]);
            $('#totalAmount').text(scorecard.resultTen);
          }
          if (scorecard._scoreArray[18]+scorecard._scoreArray[19]>=11){
            alert('Sorry try again, max pins in one frame is 10');
            scorecard._scoreArray.pop();
            $('#move20').text("");
            $('#move20').text(scorecard._scoreArray[19]);
          }
          $('#totalAmount').text(scorecard.resultTen);
        }
    };
    $('#frame1').text(scorecard.frameOne());
    $('#frame2').text(scorecard.frameTwo());
    $('#frame3').text(scorecard.frameThree());
    $('#frame4').text(scorecard.frameFour());
    $('#frame5').text(scorecard.frameFive());
    $('#frame6').text(scorecard.frameSix());
    $('#frame7').text(scorecard.frameSeven());
    $('#frame8').text(scorecard.frameEight());
    $('#frame9').text(scorecard.frameNine());
    $('#frame10').text(scorecard.frameTen());
  };

});
