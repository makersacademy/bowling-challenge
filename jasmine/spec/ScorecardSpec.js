describe('Scorecard', function() {
  beforeEach(function() {
    frame = jasmine.createSpy('Frame Double').and.returnValue('frame');
    scorecard = new Scorecard(frame);
  })

  describe('frames', function() {
    it('holds an array of frames', function() {
      var listOfFrames = arrayWithItems(10, frame);
      expect(scorecard.frames).toEqual(listOfFrames);
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

  describe('#_nextFrame', function() {
    it('increases the _frameTracker by 1', function() {
      scorecard._nextFrame();
      expect(scorecard._frameTracker).toEqual(1);
    })
  })

  describe('#currentFrame', function() {
    it('returns the current instance of the frame, based on the _frameTracker', function() {
      scorecard.frames = [[1], [2], [3], [4]];
      expect(scorecard.currentFrame()).toEqual([1]);
      scorecard._nextFrame();
      expect(scorecard.currentFrame()).toEqual([2]);
    })
  })

  describe('_rollTracker', function() {
    it('keeps track of the number of rolls', function() {
      expect(scorecard._rollTracker).toEqual(0);
    })
  })

  describe('_nextRoll', function() {
    it('increases the _rollTracker by 1', function() {
      scorecard._nextRoll();
      expect(scorecard._rollTracker).toEqual(1);
    })
  })

  describe('#updateStrikeScores', function() {
    describe('it looks back two previous frames', function() {
      it('if it was a strike, it adds the last two roles to the total score', function() {
        var realScorecard = new Scorecard;
        firstFrame = realScorecard.frames[0]
        secondFrame = realScorecard.frames[1]
        firstFrame.rollTally[0] = 10;
        secondFrame.rollTally[0] = 6;
        secondFrame.rollTally[1] = 3;
        realScorecard.updateStrikeScores();
        expect(firstFrame.totalScore).toEqual(19);
      })
    })
  })

})
