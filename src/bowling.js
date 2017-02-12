var BOWLING = (function (){
    var scoreHistory, score, flatArray, frameArray, bonus;
    scoreHistory = [];
    score = 0;
    flatArray = [];
    frameArray = [];
    bonus = 0;

    var throws = function (number){
      if (number === 10 && frameArray.length === 0){
        frameArray.push(number);
        frameArray.push(0);
        scoreHistory.push(frameArray);
        frameArray = [];
      }
      else if (frameArray.length === 0 && scoreHistory.length < 10){
        frameArray.push(parseInt(number));
      }
      else if (frameArray.length === 0 && scoreHistory.length === 10){
        frameArray.push(number);
        frameArray.push(0);
        scoreHistory.push(frameArray);
        frameArray = [];
      }
      else if (frameArray.length === 1){
        frameArray.push(parseInt(number));
        scoreHistory.push(frameArray);
        frameArray = [];
      }

    }

    var write = function(number){
      frameArray.push(number)
      frameArray.push(0);
      scoreHistory.push(frameArray);
      frameArray = [];
    }

    var reset = function(){
      scoreHistory = [];
      score = 0;
      flatArray = [];
      frameArray = [];
      bonus = 0;
    }

    var count = function(){
      total();
      bonus = 0;
      for (var i = 0; i < Math.min(scoreHistory.length,10); i ++){
        if(scoreHistory[i][0] === 10 && scoreHistory[i+1][0] !== 10
          && scoreHistory[i+1] !== undefined)
        {
          bonus += scoreHistory[i+1][0];
          bonus += scoreHistory[i+1][1];
        }

        else if(scoreHistory[i][0] === 10 && scoreHistory[i+1][0] === 10
              && scoreHistory[i+1] !== undefined)
              {
          bonus += scoreHistory[i+1][0];
          bonus += scoreHistory[i+2][0];
        }

        else if(scoreHistory[i][0] + scoreHistory[i][1] === 10
                && scoreHistory[i+1][0] !== undefined)
                {
            bonus += scoreHistory[i+1][0];
          }
      }
     score += bonus;
     return score
    }

    var total = function(){
      var scoreSum = 0;
      flatArray = [].concat.apply([], scoreHistory);
      for (var i = 0; i < Math.min(flatArray.length,20); i ++){
        scoreSum += parseInt(flatArray[i]);}
      score = scoreSum;
    }

    return {
      count: count,
      throws: throws,
      reset: reset
    };

}());
