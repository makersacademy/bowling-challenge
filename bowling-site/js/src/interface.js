$(document).ready(function(){

  game = new Game();

  function displaySingleFrameScore(frameNumber) {
    if(frameNumber<10){
      displayNormalSingleFrameScore(frameNumber)
    }else{
      displayFrame10SingleFrameScore(frameNumber)
    }
  }


  function displayAllCurrentResults(){
    for (i = 0; i < game.results.length; i++) {
      displaySingleFrameScore(i+1);
    }
    $('#total-score').text("Total: "+ game.totalScore);
  }

  var frame10ThrowCounter=0
  var regularThrowCounter=0
  function displayFrame10SingleFrameScore(frameNumber){

    throw1Score = game.results[frameNumber-1].throw1;
    throw2Score = game.results[frameNumber-1].throw2;
    throw3Score = game.results[frameNumber-1].throw3;
    combinedScore =throw1Score +throw2Score;
    if(throw3Score == 10){
      throw3Score = "X";
    }
    if(throw2Score == 10){
      throw2Score = "X";
    }
    if(throw1Score == 10){
      throw1Score = "X";
    }
    if((combinedScore) == 10){
      throw2Score = "/";
    }

    if (frame10ThrowCounter>=0){
      $('#frame-' + frameNumber +' > .throw1-score').text(throw1Score)
    }
    if (frame10ThrowCounter>=1){
      $('#frame-' + frameNumber +' > .throw2-score').text(throw2Score)
    }

    if ((combinedScore >= 10) && frame10ThrowCounter >=2){
      $('#frame-' + frameNumber +' > .throw3-score').text(throw3Score)
    }
    frame10ThrowCounter ++
    if (frame10ThrowCounter == 3){
      frame10ThrowCounter=0
    }
  }

  function displayNormalSingleFrameScore(frameNumber) {
    throw1Score = game.results[frameNumber-1].throw1;
    throw2Score = game.results[frameNumber-1].throw2;

    if (throw1Score == 10) {
      throw1Score='NaN'
      throw2Score = "X";
    }
    if((throw2Score + throw1Score) == 10){
      throw2Score = "/";
    }
    if(throw2Score!='X' &&regularThrowCounter==0){
      throw2Score='NaN'
    }

    if (regularThrowCounter>=0 && throw1Score!="NaN"){
      $('#frame-' + frameNumber +' > .throw1-score').text(throw1Score)
    }
    if (regularThrowCounter>=1 && throw2Score!='NaN'|| throw2Score=="X"){
      $('#frame-' + frameNumber +' > .throw2-score').text(throw2Score)
    }

    regularThrowCounter++
    if (regularThrowCounter == 2){
      regularThrowCounter=0
    }

  }



  $('#reset-button').click(function(){
    location.reload();
  });

  $('.score-button').click(function(){
    classId = $(this).attr('id');
    rollScore = parseInt(classId.substr(5));
    game.throwBall(rollScore);
    displayAllCurrentResults()

  });


  $('.score-button').click(function(){

  })
  $('#continueButton').attr("disabled", true);

});
