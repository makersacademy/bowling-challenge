var Game = function () {
  this.currentFrame = 1
  this.currentRoll = 1
  this.scorecard = {
    1:  {
          1: {hitPins: null, bonus: []},
          2: {hitPins: null, bonus: []},
          remainingPins: 10,
          frameScore: 0
        },
    2:  {
          1: {hitPins: null, bonus: []},
          2: {hitPins: null, bonus: []},
          remainingPins: 10,
          frameScore: 0
        },
    3:  {
          1: {hitPins: null, bonus: []},
          2: {hitPins: null, bonus: []},
          remainingPins: 10,
          frameScore: 0
        },
    4:  {
          1: {hitPins: null, bonus: []},
          2: {hitPins: null, bonus: []},
          remainingPins: 10,
          frameScore: 0
        },
    5:  {
          1: {hitPins: null, bonus: []},
          2: {hitPins: null, bonus: []},
          remainingPins: 10,
          frameScore: 0
        },
    6:  {
          1: {hitPins: null, bonus: []},
          2: {hitPins: null, bonus: []},
          remainingPins: 10,
          frameScore: 0
        },
    7:  {
          1: {hitPins: null, bonus: []},
          2: {hitPins: null, bonus: []},
          remainingPins: 10,
          frameScore: 0
        },
    8:  {
          1: {hitPins: null, bonus: []},
          2: {hitPins: null, bonus: []},
          remainingPins: 10,
          frameScore: 0
        },
    9:  {
          1: {hitPins: null, bonus: []},
          2: {hitPins: null, bonus: []},
          remainingPins: 10,
          frameScore: 0
        },
    10:  {
          1: {hitPins: null, bonus: []},
          2: {hitPins: null, bonus: []},
          3: {hitPins: null, bonus: []},
          remainingPins: 10,
          frameScore: 0
        }
  }
}

Game.prototype.play = function () {
  var hitPins = this.bowl()
  this._updateScorecard(hitPins)
}

Game.prototype.bowl = function () {
  return (Math.floor ((Math.random() * this._getRemainingPins() + 1)))
}

Game.prototype._getRemainingPins = function () {
  return (this.scorecard[this.currentFrame]['remainingPins'])
}

Game.prototype._updateScorecard = function (hitPins) {
  this.scorecard[this.currentFrame][this.currentRoll]['hitPins'] = hitPins
  this.scorecard[this.currentFrame]['remainingPins'] -= hitPins
  this.scorecard[this.currentFrame]['frameScore'] += hitPins
}
