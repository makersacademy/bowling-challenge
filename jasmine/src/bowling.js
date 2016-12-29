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
        if (this.currentFrame.bowlNumber === this.currentFrame.maxBowls) {
            this.saveFrame(this.currentFrame.bowls);
        }
    };

    Bowling.prototype.saveFrame = function(frame) {
        this.scoreSheet.push(frame)
    }
}

function Frame(frameNumber) {
    this.maxBowls = 2
    this.bowlNumber = 0
    this.bowls = []
    this.number = frameNumber

    Frame.prototype.saveFrameScore = function(score) {
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
