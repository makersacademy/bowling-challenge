function Bowl() {
  this.hitPins = []
  this.pins = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  this.pinAngle = {1: 0, 2: -5, 3: 5, 4: -10, 6: 10, 7: -15, 10: 15}
  this.pinKnockOn = {1: [2, 3], 2: [4, 5], 3: [5, 6], 4: [7, 8], 5: [8, 9], 6: [9, 10]}
}

Bowl.prototype.throw = function(angle) {
  for (i = 1, i <= 10, i++) {
    if ([5, 8, 9].contains(i)) continue;
    if ((pinAngle[i] - angle) <= 2.5)
      return i;
    }
  }
}
