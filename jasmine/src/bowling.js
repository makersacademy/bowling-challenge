function Bowling() {
    this.scoreSheet = [];
    this.currentFrame = {}

    Bowling.prototype.newGame = function() {
        this.currentFrame = new Frame()
    };

    Bowling.prototype.bowlScore = function(score) {
        this.currentFrame.saveFrameScore(score)
    };
};

function Frame() {
    this.bowlsRemaining = 2
    this.bowls = []

    Frame.prototype.saveFrameScore = function(score) {
        var entry = {
            Throw: this.bowlsRemaining,
            Score: score
        }
        this.bowls.push(entry)
        this.reduceThrowCount();
    }

    Frame.prototype.score = function() {
        var score = 0
        for (var i = 0; i < this.bowls.length; i++) {
            score += this.bowls[i].Score
        }
        return score
    }
    Frame.prototype.reduceThrowCount = function(){
      this.bowlsRemaining--
    }
};
