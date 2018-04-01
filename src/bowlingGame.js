function bowlingGame(rolls) {
  console.log("rolls:", rolls)
  var fullRolls = NormaliseScores(rolls)
  console.log("fullRolls:", fullRolls)
  var scoreFrames = getScoreFrames(fullRolls)
  console.log("scoreFrames:", scoreFrames)
  var scoreFramesWithoutNulls = filterNulls(scoreFrames)
  console.log("scoreFramesWithoutNulls:", scoreFramesWithoutNulls)
  var finalScoreFrameList = allFrameCalcu(scoreFramesWithoutNulls)
  return scoreCalcu(finalScoreFrameList)
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
  console.log("bye")
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
