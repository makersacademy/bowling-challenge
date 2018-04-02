$(document).ready(function() {
  console.log("hi")
  var bowlingRolls = [];

  var possibPins = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  var templete = $('#templeteBtn')
  possibPins.map(pin =>
    {var button = templete.clone()
    button.text(pin)
    button.attr('id', 'btn' + pin)
    button.appendTo("form");
    button.on('click', function(){
      bowlingRolls.push(pin)
      upDateUi(bowlingRolls)

    })
  })
  templete.remove();

  var possibFrames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  var templete = $('#templeteFrame')
  possibFrames.map(frameNum =>
    {var frame = templete.clone()
    frame.attr('id', 'frame' + frameNum)
    frame.appendTo("#gameList");

  })
  templete.remove();
  upDateUi(bowlingRolls)
})

function upDateUi(bowlingRolls){
  var scores = bowlingGame(bowlingRolls)
  var frameList = getFrameRolls(bowlingRolls)
  var frameListWithType = rollTypeCheck(frameList)
  var gameFinished = isGameFinished(scores)
  var pinsToShow = getMaxNumRemainPins(frameList)
  console.log("pins to show:", pinsToShow)

  $.map(scores, function(element, index){
    $('#frame'+ (index + 1) + ' .score').text(element);
  })

  $.map(frameListWithType, function(element, index){
    var display = []
    if(element.type === "strike"){ display = ["", "X"]}
    else if(element.type === "spare"){ display = [element.score[0], "/"]}
    else{ display = [element.score[0], element.score[1]]}
    $('#frame'+ (index + 1) + ' .r1').text(display[0]);
    $('#frame'+ (index + 1) + ' .r2').text(display[1]);
  })

  if(gameFinished){
    $('.gameFinished').show()
  }else{
    $('.gameFinished').hide()
  }

  var possibPins = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  $.map(possibPins, function(pin){
    if(pin <= pinsToShow && !gameFinished){
      $('#btn' + pin).show()
    }else { $('#btn' + pin).hide()}
  })
}
