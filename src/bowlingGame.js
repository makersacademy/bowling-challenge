function bowlingGame(rolls) {
  var fullRolls = NormaliseScores(rolls)
  var scoreFrames = getScoreFrames(fullRolls)
  var scoreFramesWithoutNulls = filterNulls(scoreFrames)
  var finalScoreFrameList = allFrameCalcu(scoreFramesWithoutNulls)
  return scoreCalcu(finalScoreFrameList)
}

function getFrameRolls(rolls){
  var fullRolls = NormaliseScoresPair(rolls)
  var scoreFrames = eachCons(fullRolls, 2)
  return rollsList = filterNulls(scoreFrames)
}

// get maximum number of remaining pins in current frame
function getMaxNumRemainPins(rollsList){
  var oneFrame = getFirstUnfinishedFrame(rollsList)
  return getNumOfRemainpins(oneFrame)
}

//unit functions
function getFirstUnfinishedFrame(rollsList){
  var unfinishedFrame = rollsList.find(function(eachList){
    return isRollFinished(eachList) === false
  })
  if(unfinishedFrame === undefined){
    return []
  }else{
    return unfinishedFrame
  }
}

function rollTypeCheck(rollsList) {
  return rollsList.map(function(frameRolls){
    if(frameRolls.length === 1){
      if(frameRolls[0] === 10){
        return {type: "strike", score: frameRolls}
      }else{return{type: "normal", score: frameRolls}}
    }else if(frameRolls.length === 2){
      if(frameRolls[0] + frameRolls[1] === 10){
        return {type: "spare", score: frameRolls}
      } else{return {type: "normal", score: frameRolls}}
    }
  })
}

function isGameFinished(scoreFrameList){
  if(scoreFrameList.length === 10){
    return true
  }else{
    return false
  }
}

function isRollFinished(oneFrame){
  return (oneFrame.length === 1 && oneFrame[0] === 10) || oneFrame.length === 2
}

//get the number of the remaining pins of the current frame
function getNumOfRemainpins(oneFrame){
  if(isRollFinished(oneFrame)){
    return 0
  }else if(oneFrame.length === 0){
    return 10
  }else {
    return 10 - oneFrame[0]
  }
}

function NormaliseScoreFrame (accumulator, score) {
  var framesSoFar = accumulator[0]
  var isRoll1 = accumulator[1] //it's true or false
  if(score === 10 && isRoll1) { return [framesSoFar.concat([10, null]), true] }
  else { return [framesSoFar.concat([score]), !isRoll1]}
}

function NormaliseScores (scoresList){
  return ((scoresList.reduce( NormaliseScoreFrame, [[], true] ))[0]).concat([null, null, null])
}

function NormaliseScoresPair (scoresList){
  return ((scoresList.reduce( NormaliseScoreFrame, [[], true] ))[0]).concat([null])
}

var eachCons = function (a, n) {
  var r = []
  for (var i = 0; i < a.length - n + 1; i+=2) {
    r.push(range(a, i, n))
  };
  return r
};

function range (arr, startIndex, qty) {
  var res = []
  for (var j = 0; j < qty; j++) {
    res.push(arr[startIndex + j])
  };
  return res
};

function getScoreFrames(scoresHistory) {
  return eachCons(scoresHistory, 5)
};

function filterNulls(scoreFrames) {
  return scoreFrames.map(subArr => subArr.filter(element => element != null))
};

function getCompletedFrame(scoreFrame){
  if(scoreFrame.length < 2){
    return null
  } else if (scoreFrame.length === 2){
    if((scoreFrame[0] + scoreFrame[1] < 10)){
      return [scoreFrame[0], scoreFrame[1]]
    } else {
      return null
    };
  } else {
    if((scoreFrame[0] + scoreFrame[1] < 10)){
      return [scoreFrame[0], scoreFrame[1]]
    } else {
      return [scoreFrame[0], scoreFrame[1], scoreFrame[2]]
    }
  };
};

function allFrameCalcu(scoreFrames){
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return scoreFrames.map(scoreFrame => getCompletedFrame(scoreFrame)).filter(element => element != null).map(score => score.reduce(reducer, 0))
}

function historyAndCurrentTotal(accumulator, score){
  var history = accumulator.history
  var currentTotal = accumulator.currentTotal
  var updatedTotal = currentTotal + score
  return { history: history.concat([updatedTotal]), currentTotal: updatedTotal }
}

function scoreCalcu(scoreFrameList){
  return scoreFrameList.reduce(historyAndCurrentTotal, { history: [], currentTotal: 0 }).history
}
//TODO: need to include bonus roll for frame 10 and fix bug for bonus roll in frame 10, currently it doesn't finish the game if frame 10 is stike and bonus score is not strike
