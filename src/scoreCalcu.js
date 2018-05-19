function getCompletedFrame(scoreFrame){
  console.log("hi")
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
