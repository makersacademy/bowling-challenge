function ScoreCard() {
  this.framesMap = new Map();
  this.rollsCount = 0;
}

ScoreCard.prototype.setUp = function() {
  this.framesMap.set(1, []);
  this.framesMap.set(2, []);
  this.framesMap.set(3, []);
  this.framesMap.set(4, []);
  this.framesMap.set(5, []);
  this.framesMap.set(6, []);
  this.framesMap.set(7, []);
  this.framesMap.set(8, []);
  this.framesMap.set(9, []);
  this.framesMap.set(10, []);
};

ScoreCard.prototype.takeTurn = function(pins) {
  // Locate & update the correct frame element
  var arrElement = this.rollsCount % 2;
  var frame = ((this.rollsCount - arrElement) / 2) + 1;
  if(frame === 11) {
    this.framesMap.get(10).push(pins);
  }
  else {
    var pinsArr = this.framesMap.get(frame);
    pinsArr.push(pins);
  }
  if(pins === 10 && frame <10 ) {
    this.rollsCount += 2;
  }
  else {
  this.rollsCount += 1;
  }
};

ScoreCard.prototype.currentScore = function() {
  return this.pinsDown() + this.currentBonus();
};

ScoreCard.prototype.pinsDown = function() {
  var framesTotal = 0;
  for(var i=1; i<=10; i++){
    var frame = this.framesMap.get(i);
    frame.forEach(function(item, index, array) {
      framesTotal += item;
    });
  }
  return framesTotal;
};

ScoreCard.prototype.currentBonus = function() {
  var bonus = 0
  for(var i=1; i<=10; i++) {
    var thisFrame = this.framesMap.get(i)
    if(thisFrame.length ===3) {
      bonus += thisFrame[1];
      bonus += thisFrame[2];
    }
    // handle strikes
    if(thisFrame.length === 1 && thisFrame[0] === 10) {
      var nextFrame = this.framesMap.get(i+1);
      if(nextFrame.length === 2) {
        bonus += nextFrame[0];
        bonus += nextFrame[1];
      }
      if(nextFrame.length === 1 && nextFrame[0] < 10) {
        bonus += nextFrame[0];
      }
      if(nextFrame.length === 1 && nextFrame[0] ===10 && i < 9) {
        bonus += nextFrame[0];
        var nextNextFrame = this.framesMap.get(i+2);
        if(nextNextFrame.length > 0) {
          bonus += nextNextFrame[0]
        }
      }
    }
    //handle spares
    if(thisFrame.length === 2 && thisFrame[0] + thisFrame[1] ===10) {
      if(i<10) {
        var nextFrame = this.framesMap.get(i+1);
        if(nextFrame.length > 0) {
          bonus += nextFrame[0];
        }
      }
    }
  }
  return bonus;
}
