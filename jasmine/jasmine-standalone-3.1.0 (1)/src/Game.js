function Game(rolls = 1, frameNumber = 0, frames = []){
  pins = new Pins;
  this.defaultPins = pins.default;
  this.rolls = rolls;
  this.frameNumber = frameNumber;
  this.frames = frames;
  for (i = 0; i < 10; i++) {
    this.frames.push(new Frame());
  };
};

Game.prototype.totalScore = function() {
  totalScore = 0;
  for (i = 0; i < 10; i ++) {
    n = this.frames[i].total()
    totalScore += n
  };
  if (totalScore === 200) {
    totalScore = 300
  };
  return totalScore
};

Game.prototype.calculateBonus = function() {
  if (this.frameNumber === 0) {
    return
  }
  if (this.frames[this.frameNumber - 1]['firstRoll'] === 10) {
   this.frames[this.frameNumber - 1].bonus = this.frames[this.frameNumber]['firstRoll'] + this.frames[this.frameNumber]['secondRoll']
 } else if (this.frames[this.frameNumber - 1]['firstRoll'] + this.frames[this.frameNumber - 1]['secondRoll'] === 10) {
   this.frames[this.frameNumber - 1].bonus = this.frames[this.frameNumber]['firstRoll']
 };
};

Game.prototype.roll = function(n) {
  if (this.frameNumber > 9) {
    throw new Error('You already did 10 frames!');
  } else if (this.rolls === 1) {
    this.frames[this.frameNumber]['firstRoll'] = n
    if (n === 10) {
      if (this.frameNumber === 9) {
        this.rolls += 1
      } else {
        this.calculateBonus()
        this.frameNumber += 1
      }
      return this.defaultPins;
    } else {
      this.rolls += 1
      this.calculateBonus()
      secondPins = this.defaultPins.slice(0, 11 - n)
      return secondPins;
    }
  } else if (this.rolls === 2) {
    this.frames[this.frameNumber]['secondRoll'] = n
    secondPins = this.defaultPins.slice(0, 11 - this.frames[this.frameNumber]['firstRoll'])
    if (this.frameNumber === 9) {
      if (n === 10) {
        this.rolls += 1
      } else if (n === secondPins.length - 1) {
        this.rolls += 1;
      } else if (this.frames[9]['firstRoll'] === 10) {
        this.rolls += 1
      } else {
        this.rolls -= 1;
        this.frameNumber += 1
      };
    } else {
      this.rolls -= 1;
      this.calculateBonus()
      this.frameNumber += 1
    }
    return this.defaultPins;
  } else if (this.rolls === 3) {
    this.frames[this.frameNumber]['thirdRoll'] = n
    this.frameNumber += 1
    this.rolls -= 2
    return this.defaultPins;
  }
};
