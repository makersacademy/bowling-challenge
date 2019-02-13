function EvaluateScore() {}

EvaluateScore.prototype.scorecard = function(scorecard){
  var returnArray = [0]

  for (var i = 0; i < scorecard.length; i++){
    returnArray.push(
      returnArray[returnArray.length-1] + arraySum(scorecard[i])
    )
  }

  returnArray.shift()
  return returnArray
}

function arraySum(array) {
  var sum = 0
  for (var j = 0; j <= array.length-1; j++){
    sum += array[j]
  }
  return sum
}
