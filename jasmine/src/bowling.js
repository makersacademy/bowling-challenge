function Bowling() {
    this.scoreSheet = [];
    this.currentFrame = {}
    this.maxFrames = 10
    this.gameOver = false

    Bowling.prototype.newGame = function() {
        this.newFrame()
    };

    Bowling.prototype.newFrame = function() {
        this.currentFrame = new Frame(this.scoreSheet.length + 1)
    }

    Bowling.prototype.bowlScore = function(score) {
        this.checkGameOver();
        this.checkScore(score);

        if (this.bonusPoints > 0){
          this.scoreSheet[this.currentFrame.number - 2].score += score
        }

        this.currentFrame.saveFrameScore(score)
        this.checkStrike()
        if (this.currentFrame.bowlNumber > this.currentFrame.maxBowls) {
            this.saveFrame(this.currentFrame);
        }
    };

    Bowling.prototype.checkStrike = function() {
        if (this.currentFrame.strike === true) {
            this.bonusPoints = 2
        }
    }
    Bowling.prototype.checkScore = function(score) {
        if (isNaN(score)) {
            throw new Error("your have not entered a number, try again");
        } else {
            if (score < 0 || score > 10) {
                throw new Error("your have not entered a number between 0 and 10, try again")
            }
            if (score > this.currentFrame.spares) {
                throw new Error("Cannot score higher than available spares");
            }
        }
    };

    Bowling.prototype.saveFrame = function(frame) {
        frame.saveScore();
        this.scoreSheet.push(frame);
        this.checkGameEnd();
        this.newFrame()
    }

    Bowling.prototype.checkGameEnd = function() {
        if (this.scoreSheet.length >= this.maxFrames &&
            this.currentFrame.bowlNumber > this.currentFrame.maxBowls) {
            this.gameOver = true;
            this.currentFrame = {}
            throw new Error("Game Over")
        }
    }

    Bowling.prototype.checkGameOver = function() {
        if (this.gameOver === true) {
            throw new Error("Game Over")
        }
    }
}

function Frame(frameNumber) {
    this.maxBowls = 2
    this.bowlNumber = 1
    this.bowls = []
    this.spares = 10
    this.number = frameNumber
    this.strike = false
    this.score = 0

    Frame.prototype.saveFrameScore = function(score) {
        this.calcSpares(score)
        if (score === 10 && this.score === 0) {
            this.strike = true
            if (this.number === 10) {
                this.maxBowls = 3
                this.resetSpares()
            } else {
                this.maxBowls = this.bowlNumber
            }
        }
        var entry = {
            Throw: this.bowlNumber,
            Score: score
        }
        this.bowls.push(entry)
        this.nextBowl();
    }

    Frame.prototype.calcSpares = function(bowl) {
        this.spares -= bowl
    }

    Frame.prototype.resetSpares = function() {
        this.spares = 10
    }

    Frame.prototype.saveScore = function() {
        var score = 0
        for (var i = 0; i < this.bowls.length; i++) {
            score += this.bowls[i].Score
        }
        this.score += score
    }

    Frame.prototype.nextBowl = function() {
        this.bowlNumber++
    }
}
