Game = function() {
  this.pinsArray = []
};

Game.prototype.roll = function(pins) {
  this.pinsArray.push(pins)
  return this.score()
};

Game.prototype.score = function() {
  var isStartOfFrame = true
  var total = 0
  var frameNumber = 1
  for(idx=0; idx < this.pinsArray.length; idx++) {
    total += this.pinsArray[idx]
    if(isHalfStrike(this.pinsArray, idx, isStartOfFrame) == true) {
      total += halfStrikeBonus(this.pinsArray, idx) }
    if(isStrike(this.pinsArray, idx) == true) {
      total += strikeBonus(this.pinsArray, idx)
      isStartOfFrame = !(isStartOfFrame)  }
  isStartOfFrame = !(isStartOfFrame)
  if(isStartOfFrame === true) {
    frameNumber += 1
  }
}
  return total;
};

function halfStrikeBonus(pinsArray, idx) {
      return pinsArray[idx + 2];
}

function isHalfStrike(pinsArray, idx, isStartOfFrame) {
  if(pinsArray.length > idx + 2) {
    if(pinsArray[idx] + pinsArray[idx + 1] == 10) {
      if(isStartOfFrame === true){
        return true }
      }
    }
  }

function isStrike(pinsArray, idx) {
  if(pinsArray[idx] === 10) {
    return true
  }
}

function strikeBonus(pinsArray, idx) {
      return pinsArray[idx + 1] + pinsArray[idx + 2];
}
