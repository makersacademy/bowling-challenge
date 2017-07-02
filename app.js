var bowling = bowling || new Bowling();

$(function () {
  function resetScores() {
    $("#f1b1").html(bowling.scoreCard.f1b1)
    $("#f1b2").html(bowling.scoreCard.f1b2)
    $("#f2b1").html(bowling.scoreCard.f2b1)
    $("#f2b2").html(bowling.scoreCard.f2b2)
    $("#f3b1").html(bowling.scoreCard.f3b1)
    $("#f3b2").html(bowling.scoreCard.f3b2)
    $("#f4b1").html(bowling.scoreCard.f4b1)
    $("#f4b2").html(bowling.scoreCard.f4b2)
    $("#f5b1").html(bowling.scoreCard.f5b1)
    $("#f5b2").html(bowling.scoreCard.f5b2)
    $("#f6b1").html(bowling.scoreCard.f6b1)
    $("#f6b2").html(bowling.scoreCard.f6b2)
    $("#f7b1").html(bowling.scoreCard.f7b1)
    $("#f7b2").html(bowling.scoreCard.f7b2)
    $("#f8b1").html(bowling.scoreCard.f8b1)
    $("#f8b2").html(bowling.scoreCard.f8b2)
    $("#f9b1").html(bowling.scoreCard.f9b1)
    $("#f9b2").html(bowling.scoreCard.f9b2)
    $("#f10b1").html(bowling.scoreCard.f10b1)
    $("#f10b2").html(bowling.scoreCard.f10b2)
    $("#f10b3").html(bowling.scoreCard.f10b3)
    $("#f1tot").html(bowling.scoreCard.f1tot)
    $("#f2tot").html(bowling.scoreCard.f2tot)
    $("#f3tot").html(bowling.scoreCard.f3tot)
    $("#f4tot").html(bowling.scoreCard.f4tot)
    $("#f5tot").html(bowling.scoreCard.f5tot)
    $("#f6tot").html(bowling.scoreCard.f6tot)
    $("#f7tot").html(bowling.scoreCard.f7tot)
    $("#f8tot").html(bowling.scoreCard.f8tot)
    $("#f9tot").html(bowling.scoreCard.f9tot)
    $("#f10tot").html(bowling.scoreCard.f10tot)
    $("#total").html(bowling.scoreCard.total)
    $("#frame").html('Frame: ' + bowling.frameNumber)
    $("#ball").html('Ball: ' + bowling.currentBall)
  }

  $('#bowl').click(function(pins) {
    bowl(parseInt(pins.target.id));
    resetScores();
  })

  resetScores();
})

function bowl(pins) {
  bowling.bowl(pins);
  if (bowling.currentBall == 2) {
    hideButtons();
  }else{
    showButtons();
  }
  if (bowling.frameNumber == "GAME") { hideAllButtons();}
}

function hideButtons() {
  for (var btn = 0; btn <= 10; btn++)
    if ((bowling.currentFrame.ballOne + btn) > 10 && bowling.currentFrame.ballOne < 10) {
    document.getElementById(btn).disabled = true;
  }
}

function showButtons() {
  for (var btn = 0; btn <= 10; btn++)
    document.getElementById(btn).disabled = false;
}

function hideAllButtons() {
  for (var btn = 0; btn <= 10; btn++)
    document.getElementById(btn).disabled = true;
}
