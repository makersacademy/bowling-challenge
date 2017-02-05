bowling = new Bowling()
$("#name").text(bowling.player.name);

$(document).ready(function(){
  $("#random").click(function (){bowl()});
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
    $("#pin9-2").text(bowling.player.scoreCard[9][2]);
    result = bowling.player.displayScore(bowling.frame-1)
    for (var i=0; i <= result.length; i++){
      $("#score"+i).text(result[i]);
    }
    var score = 0
    for (var i=bowling.player.score.length-1; i >= 0; i--){
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
