function EvaluateScore() {}

'use strict';

EvaluateScore.prototype.scorecard = function(scorecard){
  var returnArray = [0]

  for (var i = 0; i < scorecard.length; i++){

    if(arraySum(scorecard[i])<10){
      returnArray.push(returnArray[returnArray.length-1] + arraySum(scorecard[i]))
    }else{
        switch (scorecard[i].length) {
          case 2:
            if(scorecard[i+1]!=undefined){
              returnArray.push(returnArray[returnArray.length-1] + (10 + scorecard[i+1][0]))
            }else{
              returnArray.push(returnArray[returnArray.length-1] + 10)
            }
            break;
          case 1:
            break;
          default:
        }
      }
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
