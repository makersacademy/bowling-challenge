bowlingCalc.controller('BowlingCalcController', ['Frame',function(BFrame) {

  var self = this;

  self.addRoll = function(roll){
    var frame = new BFrame
    frame.roll(roll)
    self.value = frame.pins

  }

}]);