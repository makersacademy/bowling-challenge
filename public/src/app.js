card = new Card();

$(document).ready(function(){

 
  setFrameRoll();
  setPinsLeft();


  $('#pins').change(function(){
    var score = parseInt($('#pins').val());
    card.updateScoreArray(score);
    if (card.isGameOver()) { return finalstuff(); }
    $("#scoreCard").html(generateScoreCard());
    setFrameRoll();
    setPinsLeft();
  });

  function generateScoreCard(){
    var scoreCard = "<br></br>Total Score: " + card.getTotalScore(card.scoreArray);
    scoreCard += "<br></br>Score Card: " + card.scoreArray;
    return scoreCard;
  }

  function setFrameRoll(){
    var currentFrame = "Frame: " + card.currentFrame(card.scoreArray);
    var currentRoll = "Roll: " + card.currentRoll(card.scoreArray);
    $('#currentFrame').text(currentFrame);
    $('#currentRoll').text(currentRoll);
  }

  function setPinsLeft(){

    var pinsLeft = card.pinsStanding(card.scoreArray);  
    var pinsSelector = "<option selected='selected', disabled='disabled'>Pins knocked down</option>"
    for (i=0; i <= pinsLeft; i++){
      var temp = "<option value='"+i
      temp+="'>"
      pinsSelector+=temp + i;
    }
    $('#pins').html(pinsSelector);
  }

  function finalstuff(){
    $("#scoreCard").html(generateScoreCard());
    $('#goodbye').text("Game Over");
    $('#pins').remove();
    $('#currentFrame').remove();
    $('#currentRoll').remove();

  }

});






