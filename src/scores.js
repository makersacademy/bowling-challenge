function NormaliseScoreFrame (accumulator, score) {
  var framesSoFar = accumulator[0]
  var isRoll1 = accumulator[1] //it's true or false
  if(score === 10 && isRoll1) { return [framesSoFar.concat([10, null]), true] }
  else { return [framesSoFar.concat([score]), !isRoll1]}
}

function NormaliseScores (scoresList){
  return (scoresList.reduce( NormaliseScoreFrame, [[], true] ))[0]
}
