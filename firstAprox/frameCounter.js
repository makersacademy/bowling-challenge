frame = (function() {
  var rollsCounted = 0;
  var sumFrame     = 0;

  return {
    isInProgress: function() {
      if(sumFrame === 10){
        return false;
      }
      else{
        return(rollsCounted < 2);
      }
    },
    registerRoll: function(pins) {
      sumFrame     += pins;
      rollsCounted += 1;
    },
    resetFrame: function() {
      rollsCounted = 0;
      sumFrame     = 0;
    },
    getSumFrame: function() {
      return sumFrame;
    },
    isStrike: function() {
      return(rollsCounted === 1 && sumFrame === 10);
    },
    isSpare: function() {
      return(rollsCounted === 2 && sumFrame === 10);
    }
  };
})();


// FRAME 
// GAME
// SCORER

// game = {
//   var pinsPerBalls = []
//   var operator     = function() {
//     getRollsPerFrame()
//   };

//   return {
//     getPinsPerBalls: function(arg) {
//       pinsPerBalls = arg 
//     }

//     getScore: operator()
//   }
// }

// scorer = {

// }