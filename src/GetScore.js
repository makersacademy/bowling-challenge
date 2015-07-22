var getScore = (function() {
  var gameCounter = (function () {
    var pinsPerBalls    = [];
    var scoreAcumulated = 0;
    var frame;

    var scoreOperation = function () {
      function strike() {
        return(sum == 10 && frame.length == 1);
      };

      function spare() {
        return(sum == 10 && frame.length == 2);
      };
      
      function bonusCheck(){
        if(strike()){
          var nextTwoRolls = pinsPerBalls.slice(0,2);
          scoreAcumulated += sum + frameSum.getSum(nextTwoRolls)
        }else if(spare()){
          var nextRoll = pinsPerBalls.slice(0,1);
          scoreAcumulated += sum + frameSum.getSum(nextRoll)
        }else{
          scoreAcumulated += sum
        }
      }

      while(pinsPerBalls.length > 0){
        frame = frameIdentifier.getFrame(pinsPerBalls);
        frame = pinsPerBalls.splice(0, frame.length);
        var sum = frameSum.getSum(frame);
        bonusCheck();
      }

      return scoreAcumulated;
    };

    function storePinsPerBalls(userInput) {
      scoreAcumulated = 0;
      //this is ugly shit ASK. how...
      pinsPerBalls = userInput;
    };

    return {
      introducePinsPerBalls: storePinsPerBalls,
      remainingPinsPerBalls: pinsPerBalls,
      score: scoreOperation
    };
  })();



  var frameIdentifier = (function() {
    function getFrameOperator(arrayOfPinsPerRoll) {

      if(arrayOfPinsPerRoll[0] === 10){
        return arrayOfPinsPerRoll.slice(0,1);
      } else {
        return arrayOfPinsPerRoll.slice(0,2);
      }
    };   

    return {
      getFrame: getFrameOperator
    };
  })();



  var frameSum = (function() {
    return {
      getSum: function(value) {
        return value.reduce(function(accumulator, element) {
          return(accumulator + element);
        }, 0);
      }
    }
  })();


  
  return {
    run: function(userInput) {
      gameCounter.introducePinsPerBalls(userInput);
      return gameCounter.score;
    }
  }
})();