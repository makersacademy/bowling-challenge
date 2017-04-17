gameCounter = (function () {
  var pinsPerBalls;
  var scoreAcumulated = 0;
  var frame;

  function scoreCalculation() {
    while(pinsPerBalls.length > 0){
      frame = frameIdentifier.getFrame([pinsPerBalls]);
      
      frame = pinsPerBalls.splice(0, frame[0].length);
      
      scoreAcumulated += frameSum.getSum(frame);
    }

    return scoreAcumulated;
  };

  return {
    introducePinsPerBalls: function(input) {
      scoreAcumulated = 0
      pinsPerBalls = input;
    },
    score: scoreCalculation
  };

})();
  