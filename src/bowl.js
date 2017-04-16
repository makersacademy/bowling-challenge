function Bowl() {
  this.hitPinsRound1 = []
  this.hitPinsRound2 = []
  this.pinAngle = {1: 0, 2: -5, 3: 5, 4: -10, 6: 10, 7: -15, 10: 15}
  this.pinDomino = {1: [2, 3], 2: [4, 5], 3: [5, 6], 4: [7, 8], 5: [8, 9], 6: [9, 10]}
}

Bowl.prototype.throw = function(angle, pinRound) {
  if (angle < -15 || angle > 15) return 0;
  for(i = 1; i <= 10; i++) {
    if ([5, 8, 9].includes(i) || this.hitPinsRound1.includes(i) || this.hitPinsRound2.includes(i)) continue;
    if (Math.abs(this.pinAngle[i] - angle) <= 2.5) {
      pinRound.push(i);
      return i;
    };
  };
};

Bowl.prototype.pushPins = function(behindPins, pinRound, i) {
  if ((Math.random() > 0.2) && !pinRound.includes(behindPins[i])) pinRound.push(behindPins[i]);
}

Bowl.prototype.knockDown = function(pin, pinRound) {
  this.pushPins(this.pinDomino[pin], pinRound, 0)
  this.pushPins(this.pinDomino[pin], pinRound, 1)
}

Bowl.prototype.domino = function(pinRound) {
  for(i = 0; i <= 6; i++) {
    if (pinRound.includes(i)) this.knockDown(i, pinRound);
  }
}

Bowl.prototype.score = function(pinRound) {
  return pinRound.length;
}
