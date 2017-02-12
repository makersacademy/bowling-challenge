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
  });
  $('#button-3').click(function(){
    scorecard.bowl(3);
  });
  $('#button-4').click(function(){
    scorecard.bowl(4);
  });
  $('#button-5').click(function(){
    scorecard.bowl(5);
  });
  $('#button-6').click(function(){
    scorecard.bowl(6);
  });
  $('#button-7').click(function(){
    scorecard.bowl(7);
  });
  $('#button-8').click(function(){
    scorecard.bowl(8);
  });
  $('#button-9').click(function(){
    scorecard.bowl(9);
  });
  $('#button-10').click(function(){
    scorecard.bowl(10);
  });

  function updateBowl() {
    $( '#F' + currentFrame() + "B" + currentBowl() ).text("test");
  };

  function currentFrame() {
    return scorecard.allFrames.length + 1;
  }

  function currentBowl() {
      return 1;
  }






});
