$(document).ready(function() {

  var scorecard = new Scorecard();


  $('#button-0').click(function(){
    scorecard.bowl(0);
    updateBowl();
  });
  $('#button-1').click(function(){
    scorecard.bowl(1);
    updateBowl();
  });
  $('#button-2').click(function(){
    scorecard.bowl(2);
    updateBowl();
  });
  $('#button-3').click(function(){
    scorecard.bowl(3);
    updateBowl();
  });
  $('#button-4').click(function(){
    scorecard.bowl(4);
    updateBowl();
  });
  $('#button-5').click(function(){
    scorecard.bowl(5);
    updateBowl();
  });
  $('#button-6').click(function(){
    scorecard.bowl(6);
    updateBowl();
  });
  $('#button-7').click(function(){
    scorecard.bowl(7);
    updateBowl();
  });
  $('#button-8').click(function(){
    scorecard.bowl(8);
    updateBowl();
  });
  $('#button-9').click(function(){
    scorecard.bowl(9);
    updateBowl();
  });
  $('#button-10').click(function(){
    scorecard.bowl(10);
    updateBowl();
  });

  function updateBowl() {
    if(scorecard.firstBowl == 10 && scorecard.lastFrame == "X"){
      changeCell("1", "X");
    }
    else if(scorecard.currentBowl == 1 && scorecard.lastFrame[1] == "/"){
      changeCell("2", "/");
     }
    else if(scorecard.currentBowl == 2){
      changeCell("1", scorecard.firstBowl);
    }
    else if(scorecard.currentBowl == 1){
      changeCell("2", scorecard.secondBowl);
    }
    updateTotals();
  };

  function changeCell(column, text){
    $( '#F' + scorecard.currentFrame + "B" + column).text(text);
  }

  function updateTotals(){
    for(i=0; i<11; i++) {
      $( '#F' + (i+1) + "T" ).text(scorecard.playerScores[i]);
    }
    $('#TS').text(scorecard.runningTotal);
  }

});
