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
    this.bowls = []

    Frame.prototype.saveFrameScore = function(score) {
        var entry = {
            Throw: this.bowlsRemaining,
            Score: score
        }
        this.bowls.push(entry)
    }

  
};
