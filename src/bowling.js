function Bowling() {
  this.scoreSheet = [];
  this.currentFrame = {}
  this.maxFrames = 10
  this.gameOver = false
  this.bonusPoints = 0
  this.strikeBonusPoints = 0

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

  Bowling.prototype.bowlScore = function(bowl) {
    this.checkGameOver();
    this.checkScore(bowl);
    this.currentFrame.saveScore(bowl);
    this.currentFrame.checkForStrike(bowl);


    if (this.strikeBonusPoints > 0) {
      console.log("ading strike points")
      this.addStrikeBonusPoints(bowl);
    }

    if (this.bonusPoints > 0) {
      console.log("ading Bonus points")

      this.addBonusPoints(bowl);
    }

    this.currentFrame.saveFrameScore(bowl)
    if (this.currentFrame.bowlNumber > this.currentFrame.maxBowls) {
      this.saveFrame(this.currentFrame);
    }
  };

  Bowling.prototype.checkStrikeBonusPoints = function() {
    if (this.scoreSheet.length !== 0) {
      if (this.currentFrame.strike === true) {
        this.strikeBonusPoints = 2
      }
    }
  }

  Bowling.prototype.checkSpareBonusPoints = function() {
    if (this.scoreSheet.length !== 0) {
      if (this.scoreSheet[this.currentFrame.number - 1].score ===
        10 && this.scoreSheet[this.currentFrame.number - 1].strike ===
        false) {
          this.bonusPoints = 1
        }
      }
    }

    Bowling.prototype.addBonusPoints = function(bowl) {
      this.scoreSheet[this.currentFrame.number - 2].rollingScore += bowl
      this.currentFrame.rollingScore += bowl
      this.bonusPoints--
    }

    Bowling.prototype.addStrikeBonusPoints = function(bowl) {
      // console.log(this.strikeBonusPoints)
      this.scoreSheet[this.currentFrame.number - 2].rollingScore += bowl
      console.log(`adding ${bowl} to frame ${this.currentFrame.number - 2}`)
      this.currentFrame.rollingScore += bowl

      if (this.currentFrame.number > 3){
        if (this.scoreSheet[this.currentFrame.number - 2].strike &&
          this.scoreSheet[this.currentFrame.number - 3].strike){
            console.log("triple strike")
            this.scoreSheet[this.currentFrame.number - 2].rollingScore += bowl
            this.scoreSheet[this.currentFrame.number - 3].rollingScore += bowl
            this.currentFrame.rollingScore += bowl
          }
        }
        this.strikeBonusPoints--

      }

      Bowling.prototype.checkScore = function(bowl) {
        if (isNaN(bowl)) {
          throw new Error("your have not entered a number, try again");
        } else {
          if (bowl < 0 || bowl > 10) {
            throw new Error
            ("your have not entered a number between 0 and 10, try again")
          }
          if (bowl > this.currentFrame.RemainingPins) {
            throw new Error
            ("Cannot score higher than available spares");
          }
        }
      };

      Bowling.prototype.saveFrame = function(frame) {
        this.scoreSheet.push(frame);
        this.checkSpareBonusPoints();
        this.checkStrikeBonusPoints();
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

        Frame.prototype.saveFrameScore = function(bowl) {
          var entry = {
            Throw: this.bowlNumber,
            Score: bowl
          }
          this.bowls.push(entry)

          this.calcRemainingPins(bowl)
          this.checkForStrike(bowl)
          if (this.score === 10) {
            if (this.number === 10) {
              this.maxBowls = 3
              this.resetRemainingPins();
            } else {
              this.maxBowls = this.bowlNumber
            }
          }
          this.resetPinCheck(bowl)
          this.nextBowl();
        }

        Frame.prototype.checkForStrike = function(bowl) {
          if (bowl === 10 && (this.bowls < 1 || this.bowls.length === 3)) {
            this.strike = true
          }
        }

        Frame.prototype.calcRemainingPins = function(bowl) {
          this.RemainingPins -= bowl
        }


        Frame.prototype.resetPinCheck = function(bowl) {
          if (bowl === 10)
          {
            this.RemainingPins = 10
          }
        }

        Frame.prototype.resetRemainingPins = function(bowl) {
          this.RemainingPins = 10
        }

        Frame.prototype.saveScore = function(bowl) {
          this.score += bowl
          this.rollingScore += bowl
        }

        Frame.prototype.nextBowl = function() {
          this.bowlNumber++
        }
      }
