function Bowl() {
  this.pins = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  this.pinAngle = {0: 0, 1: -5, 2: 5, 3: -10, 5: 10, 6: -15, 9: 15}
  this.pinDomino = {0: [1, 2], 1: [3, 4], 2: [4, 5], 3: [6, 7], 4: [7, 8], 5: [8, 9]}
}

Bowl.prototype.throw = function(angle) {
  if (angle < -15 || angle > 15) return 0;
  for(i = 0; i <= 10; i++) {
    if ([4, 7, 8].includes(i)) continue;
    if (Math.abs((this.pinAngle[i]) - angle) <= 2.5) {
      this.pins[i] = 'X';
      return i;
    };
  };
};

Bowl.prototype.pushPins = function(behindPins, i) {
  if (Math.random() > 0.2) this.pins[behindPins[i]] = 'X';
}

Bowl.prototype.knockDown = function(pin) {
  this.pushPins(this.pinDomino[pin], 0)
  this.pushPins(this.pinDomino[pin], 1)
}

Bowl.prototype.domino = function() {
  for(i = 0; i < 6; i++) {
    if (this.pins[i] == 'X')
    this.knockDown(i);
  }
}

Bowl.prototype.score = function() {
  score = 0
  for(i = 0; i < 10; i++) {
    if (this.pins[i] == 'X') score++
  }
  return score;
}
