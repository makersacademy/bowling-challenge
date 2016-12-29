function Bowling() {
    this.scoreSheet = [];
    this.currentFrame = {}

    Bowling.prototype.newGame = function() {
        this.newFrame()
    };

    Bowling.prototype.newFrame = function() {
        this.currentFrame = new Frame(this.scoreSheet.length + 1)
    }

    Bowling.prototype.bowlScore = function(score) {
        this.checkScore(score);
        this.currentFrame.saveFrameScore(score)

        if (this.currentFrame.bowlNumber > this.currentFrame.maxBowls) {
            this.saveFrame(this.currentFrame);
        }
    };

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
        this.newFrame()
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
        if (score === 10 && this.score === 0) {
            console.log("STRIKE!")
            this.strike = true
            this.maxBowls = this.bowlNumber
        }
        var entry = {
            Throw: this.bowlNumber,
            Score: score
        }
        this.bowls.push(entry)
        this.calcSpares(score)
        this.nextBowl();
    }

    Frame.prototype.calcSpares = function(score) {
        this.spares -= score
    }

    Frame.prototype.saveScore = function() {
        var score = 0
        for (var i = 0; i < this.bowls.length; i++) {
            score += this.bowls[i].Score
        }
        this.score = score
    }

    Frame.prototype.nextBowl = function() {
        this.bowlNumber++
    }
}
