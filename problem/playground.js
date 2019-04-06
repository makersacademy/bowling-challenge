function Scorecard() {
  this.frames = [];
}

Scorecard.prototype = {
  constructor: Scorecard
    
}

// need a way to index each frame

function Frame() {
  this.firstRollScore = 0;
  this.secondRollScore = 0;
  this.basicScore = 0;
  this.bonusScore = 0;
  this.totalScore = 0;
  // this.frameClosed = false;
}

Frame.prototype = {
  constructor: Frame,
  enterFirstRollScore: function(pins) {
    this.firstRollScore = pins
    if (this.firstRollScore === 10) {
      this.secondRollScore = "Strike frame";
      // if (instance.of.Scorecard.frames[index - 1].firstRollScore === 10) -> add pins to thatInstance.bonusScore
      // else if (instance.of.Scorecard.frames[index - 1].basicScore === 10 -> add pins to thatInstance. and closeFrame(thatInstance so it is pushed to frames array)
    }
    
  },

  enterSecondRollScore: function(pins) {
    if (this.firstRollScore === 10) {
      this.secondRollScore = "Strike frame";
    } else {
      this.secondRollScore = pins
    }
  }
}


// original (too big) first feature test

describe("Gutter game", function() {
  it("returns complete game after 10 frames", function() {
    scorecard = new Scorecard;
    // frame = new Frame;
    
    frameNumber = 1;
    pinsScored = 0;
    for (frameNumber; frameNumber == 10; frameNumber++) {
      frame = new Frame;
      frame.enterFirstRollScore(pinsScored);
      frame.enterSecondRollScore(pinsScored);
      scorecard.frames.push(frame);
    }
    expect(scorecard.isComplete).toBe(true);
    // expect(scorecard.Score).toEqual(0);
  });
  
});