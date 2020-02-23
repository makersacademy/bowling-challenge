function Player(name = player1) {
  this.name = name
  this.score = 0
  this.roll1 = 0
  this.roll2 = 0
  this.onSpare = false
  this.strikeStreak = 0
  this.scoreTracker = []
};

Player.prototype.firstRoll = function(pins) {
  if (pins === 10) {
    if (this.onSpare === true) {
      this.strike();
      this.score += 20
    } else if (this.strikeStreak < 2 ) {
      this.strike();
    } else { 
      this.strike();
      this.score += 30
    }
  } else {
    this.roll1 = pins
    if (this.onSpare === true) {
      this.score += 10 + pins
    }
  }
}

Player.prototype.secondRoll = function(pins) {  
  if (this.roll1 + pins === 10) {
    if (this.strikeStreak === 1) {
      this.roll2 = pins
      this.scoreTracker.push([this.roll1, this.roll2])
      this.score += 10 + this.roll1 + pins
      this.spare();
    } else {
      this.spare();
    }
  } else {
    if (this.strikeStreak === 0 ) {
      this.roll2 = pins
      this.updateScore(pins);
    } else if (this.strikeStreak > 0) {
      this.roll2 = pins
      this.scoreTracker.push([this.roll1, this.roll2])
      this.score += this.strikeCalc(this.strikeStreak)
    }
    this.onSpare = false
    this.strikeStreak = 0
  }
}

Player.prototype.updateScore = function(pins) {
  this.score = this.score + this.roll1 + pins
  this.scoreTracker.push([this.roll1, this.roll2])
  this.roll1 = 0
  this.roll2 = 0
}

Player.prototype.strike = function() {
  this.strikeStreak += 1
  this.onSpare = false
  this.scoreTracker.push(['strike', 'NA'])
}

Player.prototype.spare = function() {
  this.strikeStreak = 0
  this.roll2 = 'spare'
  this.scoreTracker.push([this.roll1, this.roll2])
  this.onSpare = true
}

Player.prototype.firstRollOnSpare = function(pins) {
  this.roll1 = pins
  this.score = 10 + pins
}

Player.prototype.strikeCalc = function(streak) {
  var tempscore = 0
  var lastRolls = this.scoreTracker.slice(-1)[0];
  if (streak === 1) {
    console.log('last score', lastRolls)
    tempscore = 10 + (lastRolls[0])*2 + (lastRolls[1])*2
  } else if (streak === 2) {
    console.log("log", lastRolls)
    tempscore = (10 + 10 + (lastRolls[0])) + (10 + lastRolls[0] + lastRolls[1]) + (lastRolls[0] +lastRolls[1])

  } else if (streak > 2) {
    tempscore = 30
  }
  console.log('tempscore:', tempscore)
  return tempscore
}




function Game(player1 = new Player('Tim'), player2 = new Player('Harry')) {
  this.player1 = player1
  this.player2 = player2 
};


var examplearr = [[5,5], ['strike', 'NA'], [5,'spare'], [5,3]];