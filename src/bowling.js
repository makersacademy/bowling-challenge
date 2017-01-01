function Bowling() {
  this.scoreSheet = [];
  this.currentFrame = {}
  this.maxFrames = 10
  this.gameOver = false
  this.bonusPoints = 0

  Bowling.prototype.newGame = function() {
    this.newFrame()
  };

  Bowling.prototype.newFrame = function() {
    var previousScore = 0
    if (this.scoreSheet.length !== 0) {
      previousScore = this.scoreSheet[this.currentFrame.number - 1]
        .rollingScore
    }
    this.currentFrame = new Frame(this.scoreSheet.length + 1, previousScore)
  }

  Bowling.prototype.bowlScore = function(score) {
    this.checkGameOver();
    this.checkScore(score);
    this.currentFrame.saveScore(score);

    if (this.bonusPoints > 0) {
      this.addBonusPoints(score);
    }

    this.checkStrikeBonusPoints()

    this.currentFrame.saveFrameScore(score)
    if (this.currentFrame.bowlNumber > this.currentFrame.maxBowls) {
      this.saveFrame(this.currentFrame);
    }
  };

  Bowling.prototype.addBonusPoints = function(score) {
    this.scoreSheet[this.currentFrame.number - 2].rollingScore += score
    this.currentFrame.rollingScore += score
    this.bonusPoints--
  }

  Bowling.prototype.checkStrikeBonusPoints = function() {
    if (this.currentFrame.strike === true) {
      this.bonusPoints = 2
    }
  }

  Bowling.prototype.checkSpareBonusPoints = function() {
    if (this.scoreSheet.length !== 0) {
      if (this.scoreSheet[this.currentFrame.number - 1].score ===
        10 && this.scoreSheet[this.currentFrame.number - 1].strike ===
        false) {
        console.log("spare Frame points")
        this.bonusPoints = 1
      }
    }
  }


  Bowling.prototype.checkScore = function(score) {
    if (isNaN(score)) {
      throw new Error("your have not entered a number, try again");
    } else {
      if (score < 0 || score > 10) {
        throw new Error("your have not entered a number between 0 and 10, try again")
      }
      if (score > this.currentFrame.RemainingPins) {
        throw new Error("Cannot score higher than available spares");
      }
    }
  };

  Bowling.prototype.saveFrame = function(frame) {
    this.scoreSheet.push(frame);
    this.checkSpareBonusPoints();
    this.checkGameEnd();
    this.newFrame()
  }

  Bowling.prototype.checkGameEnd = function() {
    if (this.scoreSheet.length >= this.maxFrames &&
      this.currentFrame.bowlNumber > this.currentFrame.maxBowls) {
      this.gameOver = true;
    }
  }

  Bowling.prototype.checkGameOver = function() {
    if (this.gameOver === true) {
      this.currentFrame = {}
      throw new Error("Game Over")
    }
  }
}

function Frame(frameNumber, previousScore) {
  this.maxBowls = 2
  this.bowlNumber = 1
  this.bowls = []
  this.RemainingPins = 10
  this.number = frameNumber
  this.strike = false
  this.score = 0
  this.rollingScore = previousScore

  Frame.prototype.saveFrameScore = function(score) {
    var entry = {
      Throw: this.bowlNumber,
      Score: score
    }
    this.bowls.push(entry)

    this.calcRemainingPins(score)
    this.checkForStrike(score)
    if (this.score === 10) {
        console.log("pre third round extentsion")
      if (this.number === 10) {
        console.log("third round extentsion")
        this.maxBowls = 3
        this.resetRemainingPins()
      } else {
        this.maxBowls = this.bowlNumber
      }
    }
    this.nextBowl();
  }

  Frame.prototype.checkForStrike = function(score) {
    if (score === 10) {
      this.strike = true
      this.resetRemainingPins()
    }
  }

  Frame.prototype.calcRemainingPins = function(bowl) {
    this.RemainingPins -= bowl
  }

  Frame.prototype.resetRemainingPins = function() {
    this.RemainingPins = 10
  }

  Frame.prototype.saveScore = function(score) {
    this.score += score
    this.rollingScore += score
  }

  Frame.prototype.nextBowl = function() {
    this.bowlNumber++
  }
}
