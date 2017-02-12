"use strict"

function score(){
}

score.scoreBoard = function(game){
  var maxPins = game.NUMBER_OF_PINS
  var frameScores = []
  game.getFrames().forEach(function(frame,currentFrame){
    console.log(frame)
    if (frame.pinsDown() === maxPins){
      frameScores.push(score._applyBonuses(game,currentFrame))
    }else{
      frameScores.push(frame.pinsDown());
    }
  })
  return frameScores
}

score.runningTotal = function(game){
  var currentAmount = 0
  var runningScoreboard = []
  var scoreboard = score.scoreBoard(game)
  scoreboard.forEach(function(frame){
    currentAmount += frame
    runningScoreboard.push(currentAmount)
  })
  return runningScoreboard
}

score.scoreGameTotal = function(game){
  var scoreBoard = score.scoreBoard(game)
  return score._sumPoints(scoreBoard)
};

score._applyBonuses = function(game,start_frame){
  var maxPins = game.NUMBER_OF_PINS
  if(game.getFrames()[start_frame].isStrike()){
    return maxPins + score._getTwoBalls(game,start_frame + 1)
  }else {
    return maxPins + score._getOneBall(game,start_frame + 1)
  }
}

score._getOneBall = function (game,start_frame){
  return game.getFrames()[start_frame].getBalls()[0]
}

score._getTwoBalls = function (game,start_frame){
  var ball_one,ball_two
  ball_one = score._getOneBall(game,start_frame)
  if (ball_one === game.NUMBER_OF_PINS){
    ball_two = score._getOneBall(game,start_frame + 1)
  } else{
    ball_two = game.getFrames()[start_frame].getBalls()[1]
  }
  return ball_one + ball_two
}

score._sumPoints = function(array){
  return array.reduce(function(a, b) { return a + b; }, 0);
}
