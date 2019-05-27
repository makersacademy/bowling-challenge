function Game () {
  this.rolls = []
  this.frames = []
}

Game.prototype = {
  constructor: Game,

  roll: function (pins) {
    var roll

    if (this.isComplete()) {
      return 'finished!'
    }

    this.addFrameIfRequired()
    if (this.frames.length === 10) {
      this.currentFrame().isFinalFrame = true
    }
    this.currentFrame().addRoll(pins)
    roll = {
      frame: this.currentFrame(),
      pins: pins,
      isStrike: this.currentFrame().isStrike(),
      completesSpare: this.currentFrame().isSpare(),
      completesFrame: this.currentFrame().roll2 !== null
    }
    this.rolls.push(roll)
    this.checkBonuses()

    return this.frames
  },

  score: function () {
    var sum = 0
    this.frames.forEach(function(frame) {
      sum += frame.score()
    })
    return sum
  },

  isComplete: function () {
    return (this.frames.length === 10 && this.currentFrame().isComplete())
  },

  addFrameIfRequired: function () {
    if (this.frames.length === 0) {
      this.frames.push(new Frame())
    } else if (this.currentFrame().isComplete()) {
      this.frames.push(new Frame())
    }
  },

  currentFrame: function () {
    return this.frames[this.frames.length - 1]
  },

  checkBonuses: function () {
    this.checkThisRoll()
    this.checkLastRoll()
    this.checkLastButOneRoll()
  },

  checkThisRoll: function () {
    roll = this.thisRoll()
    if (roll.frame.isFinalFrame) {
      roll.frame.bonus = 0
    }
    else if (roll.completesFrame && !roll.completesSpare) {
      roll.frame.bonus = 0
    }
  },

  checkLastRoll: function () {
    roll = this.lastRoll()
    if (typeof(roll) !== 'undefined') {
      if (!roll.frame.isFinalFrame) {
        if (roll.completesSpare) {
          roll.frame.bonus = this.thisRoll().pins
        }
      }
    }
  },

  checkLastButOneRoll: function () {
    roll = this.lastButOneRoll()
    if (typeof(roll) !== 'undefined') {
      if (!roll.frame.isFinalFrame) {
        if (roll.isStrike) {
          roll.frame.bonus = this.thisRoll().pins + this.lastRoll().pins
        }
      }
    }
  },

  thisRoll: function () {
    return this.rolls[this.rolls.length - 1]
  },

  lastRoll: function () {
    return this.rolls[this.rolls.length - 2]
  },

  lastButOneRoll: function () {
    return this.rolls[this.rolls.length - 3]
  }
}

g1 = new Game()
scores = [9, 1, 0, 10, 10, 10, 6, 2, 7, 3, 8, 2, 10, 9, 0, 10, 10, 8]
scores.forEach(function(roll) {
  g1.roll(roll)
})

g2 = new Game()
scores = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10] 
scores.forEach(function(roll) {
  g2.roll(roll)
})

