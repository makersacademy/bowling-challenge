bowlingCalc.controller('BowlingCalcController', ['Frame', 'Game', 'ScoreCard',function(BFrame, Game, ScoreCard) {

  var self = this;
  self.tempArray = []
  self.rollButtons = [0,1,2,3,4,5,6,7,8,9,10]
  self.framesBowled = []
  self.frameFull = true

  self.addRoll = function(roll){
    if (self.frameFull) {
      self.framesBowled.push({roll1: roll})
      if (roll === 10) {
        self.frameFull = true
        checkIfValid()
      } else {
        self.frameFull = false
      }
    } else {
      if (roll + self.framesBowled[self.framesBowled.length -1].roll1 > 10){
        console.log('error')
        return
      }
      var curFrame = self.framesBowled[self.framesBowled.length -1];
      curFrame.roll2 = roll
      self.frameFull = true
      checkIfValid()
    }
  }

  self.scoreGame = function(n){
    var game = new Game(makeArrayOfRolls(), BFrame, ScoreCard);
    return game.scoreForFrame(n)
  }

  makeArrayOfRolls = function(){
    var array = []
    for (var i = 0; i < self.framesBowled.length; i++) {
      array.push(self.framesBowled[i].roll1)

      if (self.framesBowled[i].roll2) {
         array.push(self.framesBowled[i].roll2)
      }

    };
    return array
  }

  checkIfValid = function(){
    var curFrame = self.framesBowled[self.framesBowled.length -1];
    var prevFrame = self.framesBowled[self.framesBowled.length -2];
    var prevTwo = self.framesBowled[self.framesBowled.length -3]
    if (curFrame.roll1 === 10 || curFrame.roll1 + curFrame.roll2 === 10){
      curFrame.score = "..."
    } else {
      curFrame.score = (self.scoreGame(self.framesBowled.length))
    }

    if (prevFrame){
      if (prevFrame.roll1 + prevFrame.roll2 === 10){
        prevFrame.score = (self.scoreGame(self.framesBowled.length -1))
      }
    }
    if (prevTwo){
      if (prevTwo.roll1 === 10){
        prevTwo.score = (self.scoreGame(self.framesBowled.length -2))
      }
    }
  }

}]);

