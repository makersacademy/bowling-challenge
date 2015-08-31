card = new Card();

$(document).ready(function(){

 
  setFrameRoll();
  setPinsLeft();


  $('#pins').change(function(){
    var score = parseInt($('#pins').val());
    card.updateScoreArray(score);
    console.log(score);
    $("#scoreCard").html(generateScoreCard());
    setFrameRoll();
    setPinsLeft();
  });

  function generateScoreCard(){
    var scoreCard = "<p>SCORE CARD</p><br></br>"
    console.log('Score Card: ' + card.scoreArray);
    console.log('Total Score: '+ card.getTotalScore(card.scoreArray));
    return scoreCard;
  }

  function setFrameRoll(){
    var currentFrame = "Current Frame: " + card.currentFrame(card.scoreArray);
    var currentRoll = "Current Roll: " + card.currentRoll(card.scoreArray);
    $('#currentFrame').text(currentFrame);
    $('#currentRoll').text(currentRoll);
  }

  function setPinsLeft(){

    var pinsLeft = card.pinsStanding(card.scoreArray);
    console.log("Pins Left: " +   pinsLeft);
    var pinsSelector = "<option selected='selected', disabled='disabled'>Pins knocked down</option>"
    for (i=0; i <= pinsLeft; i++){
      var temp = "<option value='"+i
      temp+="'>"
      pinsSelector+=temp + i;
    }
    $('#pins').html(pinsSelector);
  }



});




  // var currentFrame = "Current Frame: " + card.currentFrame(card.scoreArray);
  // var currentRoll = "Current Roll: " + card.currentRoll(card.scoreArray);
  // var pinsLeft = card.pinsStanding(card.scoreArray);

  // var pinsSelector = "<select id='pins'>";
  // pinsSelector += "<option selected='selected', disabled='disabled'>Pins knocked down</option>"
  // for (i=0; i <= pinsLeft; i++){
  //   var temp = "<option value='"+i
  //   temp+="'>"
  //   pinsSelector+=temp + i;
  // }

  // $('#currentFrame').text(currentFrame);
  // $('#currentRoll').text(currentRoll);
  // $('#pinsLeft').append(pinsSelector);

