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
        this.currentFrame.saveFrameScore(score)

        if (this.currentFrame.bowlNumber > this.currentFrame.maxBowls) {
            this.saveFrame(this.currentFrame);
        }
    };

    Bowling.prototype.saveFrame = function(frame) {
        this.scoreSheet.push(frame)
        this.newFrame()
    }
}

function Frame(frameNumber) {
    this.maxBowls = 2
    this.bowlNumber = 1
    this.bowls = []
    this.number = frameNumber
    this.strike = false

    Frame.prototype.saveFrameScore = function(score) {
        if (score === 10 && this.score() === 0) {
            console.log("STRIKE!")
            this.strike = true
            this.maxBowls = this.bowlNumber
        }

        var entry = {
            Throw: this.bowlNumber,
            Score: score
        }
        this.bowls.push(entry)
        this.nextBowl();
    }

    Frame.prototype.score = function() {
        var score = 0
        for (var i = 0; i < this.bowls.length; i++) {
            score += this.bowls[i].Score
        }
        return score
    }
    Frame.prototype.nextBowl = function() {
        this.bowlNumber++
    }
}
