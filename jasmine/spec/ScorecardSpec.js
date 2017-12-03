describe('Scorecard', function() {
  beforeEach(function() {
    scorecard = new Scorecard;
  })

  describe('frames', function() {
    it('holds an array of frames', function() {
      expect(scorecard.frames).toEqual([]);
    })
  })

  describe('#startNewFrame', function() {
    it('creates a new Frame instance', function() {
      scorecard.startNewFrame();
      expect(scorecard.currentFrame).toEqual(jasmine.any(Frame))
    })
  })

  describe('currentFrame', function() {
    it('creates a new frame when initialized', function() {
      expect(scorecard.currentFrame).toEqual(jasmine.any(Frame))
    })

    it('returns the current instance of from if it already exists', function() {
      var frame = scorecard.currentFrame;
      expect(scorecard.currentFrame).toEqual(frame)
    })
  })

  describe('#addFrameToCard', function() {
    it('adds the currentFrame to the list of frames', function() {
      var frame = scorecard.currentFrame;
      scorecard.addFrameToCard(frame);
      expect(scorecard.frames).toContain(frame);
    })

    it('increases the _frameTracker by 1', function() {
      var frame = 'frame'
      scorecard.addFrameToCard(frame)
      expect(scorecard._frameTracker).toEqual(1);
    })
  })

  describe('#allRolls', function() {
    it('returns a single array of all rolls', function() {
      scorecard.frames = [[1, 2], [3, 4]];
      expect(scorecard.allRolls()).toEqual([1, 2, 3, 4]);
    })
  })

  describe('_frameTracker', function() {
    it('A property to keep track of the current Frame, starts at 0', function() {
      expect(scorecard._frameTracker).toEqual(0);
    })
  })

  describe('_rollTracker', function() {
    it('keeps track of the number of rolls', function() {
      expect(scorecard._rollTracker).toEqual(0);
    })
  })

  describe('#updateStrikeScores', function() {
    describe('it looks back to the previous frame', function() {
      it('if it was a strike, it adds the last two roles to the total score', function() {
        var roll1 = new Roll;
        roll1.pinfall = 10;
        scorecard.currentFrame.addToFrame(roll1);
        scorecard.updateStrikeScores();
        scorecard.addFrameToCard(scorecard.currentFrame);
        scorecard.startNewFrame();
        var roll2 = new Roll;
        roll2.pinfall = 2;
        scorecard.currentFrame.addToFrame(roll2);
        var roll3 = new Roll;
        roll3.pinfall = 3;
        scorecard.currentFrame.addToFrame(roll3);
        scorecard.updateStrikeScores();
        var firstFrame = scorecard.frames[0]
        expect(firstFrame.getScore()).toEqual(15);
      })
    })

    describe('checks the last two frames', function() {
      it('if both were strikes, it adds the score of the first roll to the older frame', function() {
        // Frame 1:
        var roll1 = new Roll;
        roll1.pinfall = 10;
        scorecard.currentFrame.addToFrame(roll1);
        scorecard.updateStrikeScores();
        scorecard.addFrameToCard(scorecard.currentFrame);
        scorecard.startNewFrame();
        // Frame 2:
        var roll2 = new Roll;
        roll2.pinfall = 10;
        scorecard.currentFrame.addToFrame(roll2);
        scorecard.updateStrikeScores()
        scorecard.addFrameToCard(scorecard.currentFrame)
        scorecard.startNewFrame();
        // Frame 3:
        var roll3 = new Roll;
        roll3.pinfall = 5;
        scorecard.currentFrame.addToFrame(roll3);
        var roll4 = new Roll;
        roll4.pinfall = 2;
        scorecard.currentFrame.addToFrame(roll4);
        scorecard.updateStrikeScores();
        var firstFrame = scorecard.frames[0]
        expect(firstFrame.getScore()).toEqual(25);
      })
    })

    describe('#updateSpareScores', function() {
      it('checks last frame and awards the first roll of the current frame as a bonus if true', function() {
        // Frame 1:
        var roll1 = new Roll;
        roll1.pinfall = 8;
        scorecard.currentFrame.addToFrame(roll1);
        var roll2 = new Roll;
        roll2.pinfall = 2;
        scorecard.currentFrame.addToFrame(roll2);
        scorecard.updateSpareScores()
        scorecard.updateStrikeScores()
        scorecard.addFrameToCard(scorecard.currentFrame)
        scorecard.startNewFrame()

        // Frame 2:
        var roll3 = new Roll;
        roll3.pinfall = 5;
        scorecard.currentFrame.addToFrame(roll3)
        var roll4 = new Roll;
        roll4.pinfall = 3;
        scorecard.currentFrame.addToFrame(roll4)

        scorecard.updateSpareScores()
        scorecard.updateStrikeScores()
        var firstFrame = scorecard.frames[0]
        expect(firstFrame.getScore()).toEqual(15)
      })
    })
  })

})
