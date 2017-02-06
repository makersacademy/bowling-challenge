'use strict';
var bowling = new Bowling()
$("#scoreArea").hide();
$("#inputArea").hide();
$("#message").hide();

$(document).ready(function(){
  $("#start").click(function (){startGame()})
  $("#random").click(function (){bowl()})
  $("#0").click(function (){bowl(0)})
  $("#1").click(function (){bowl(1)})
  $("#2").click(function (){bowl(2)})
  $("#3").click(function (){bowl(3)})
  $("#4").click(function (){bowl(4)})
  $("#5").click(function (){bowl(5)})
  $("#6").click(function (){bowl(6)})
  $("#7").click(function (){bowl(7)})
  $("#8").click(function (){bowl(8)})
  $("#9").click(function (){bowl(9)})
  $("#10").click(function (){bowl(10)})

  if (bowling.frame===9){updateFrame()}
})

function startGame(){
  var name = $("#nameText").val();
  if (name === ""){var player1 = new Player()} else {var player1 = new Player(name)}
  bowling = new Bowling(player1)
  $("#name").text(bowling.player.name);
  $("#gameOptions").hide();
  $("#scoreArea").show();
  $("#inputArea").show();
  scrollMessage("Welcome to Super Bowl",10)
}

function bowl(pin=null){
  try {bowling.play(pin)}
  catch(err) {alert(err)}
  updateFrame()
}

function updateFrame(){
  $.when(bowling.player.scoreCard).then (function(result) {
    for (var i=0; i <= 9; i++){
      var display = displayChar(bowling.player.scoreCard[i][0],bowling.player.scoreCard[i][1])
      $("#pin"+i+"-0").text(display[0]);
      $("#pin"+i+"-1").text(display[1]);
    }
    var displayMessage = null;
    for (var i=9; i >= 0; i--){
      var display = displayChar(bowling.player.scoreCard[i][0],bowling.player.scoreCard[i][1])
      if (displayMessage === null && display[0] !== null){var displayMessage=display}
    }
    if (displayMessage[0] === "X"){scrollMessage("STRIKE!",5)}
    if (displayMessage[1] === "X"){scrollMessage("STRIKE!",5)}
    if (displayMessage[1] === "/"){scrollMessage("SPARE!",5)}
    if ($("#pin9-1").text()===""){$("#pin9-1").text(checkStrike(bowling.player.scoreCard[9][1]))}
    $("#pin9-2").text(checkStrike(bowling.player.scoreCard[9][2]));
    result = bowling.player.displayScore(bowling.frame-1)
    for (var i=0; i <= result.length; i++){
      $("#score"+i).text(result[i]);
    }
    var score = 0
    for (var i=bowling.player.score.length; i >= 0; i--){
      if (Number.isInteger(bowling.player.score[i])){score += bowling.player.score[i]}
    }
    $("#totalScore").text(score)
  })
}

function displayChar(text1, text2){
  if (text1===10){return ["X",""]}
  if (text1+text2===10){return [text1,"/"]}
  return [text1,text2]
}

function checkStrike(text){
  if (text===10){return "X"}else{return text}
}

function scrollMessage(message, time=5){
  $("#message").hide();
  time = time * 1000;
  $("#scrollMessage").text(message);
  $("#message").show().delay(5000).fadeOut();
}
