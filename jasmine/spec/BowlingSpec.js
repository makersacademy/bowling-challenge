describe('Bowling', function() {
  beforeEach(function() {
    bowling = new Bowling;
    roll = bowling.currentRoll;
  })

  describe('scorecard', function() {
    it('initialized with an instance of Scorecard', function() {
      expect(bowling.scorecard).toEqual(jasmine.any(Scorecard));
    })
  })

  describe('currentRoll', function() {
    it('creates a new roll if one doesnt exist already', function() {
      expect(bowling.currentRoll).toEqual(jasmine.any(Roll))
    })
  })

  describe('#nextRoll', function() {
    it('creates a new roll', function() {
      bowling.nextRoll();
      expect(bowling.currentRoll).toEqual(roll)
    })
  })

  describe('_rollTracker', function() {
    it('keeps track of the number of rolls', function() {
      expect(bowling._rollTracker).toEqual(0);
    })
  })

  describe('#increaseRollPinfall', function() {
    it('increases pinfall of current roll by 1', function() {
      bowling.increaseRollPinfall();
      expect(roll.pinfall).toEqual(1);
    })

    it("can't exceed a total of 10 for the current Frame", function() {
      roll.pinfall = 9;
      bowling.scorecard.currentFrame.addToFrame(roll)
      bowling.nextRoll();
      roll2 = bowling.currentRoll;
      bowling.increaseRollPinfall();
      bowling.increaseRollPinfall();
      expect(roll2.pinfall).toEqual(1)
    })
  })

  describe('#decreaseRollPinfall', function() {
    it('decrease current roll pinfall by 1', function() {
      roll.pinfall = 4;
      bowling.decreaseRollPinfall();
      expect(roll.pinfall).toEqual(3)
    })
  })

  describe('#submitScore', function() {
    it('adds the roll to the current frame', function() {
      bowling.submitScore();
      expect(bowling.scorecard.currentFrame.rollTally).toContain(roll)
    })

    it('starts a new frame if the current one is complete', function() {
      bowling.submitScore();
      bowling.submitScore();
      bowling.submitScore();
      expect(bowling.scorecard.currentFrame.rollTally).toEqual([roll])
    })
  })

})
