describe('Frame', function() {
  var frame;
  beforeEach(function() {
    firstRoll = jasmine.createSpyObj('firstRoll', ['getScore', 'setScore', 'isScored']);
    secondRoll = jasmine.createSpyObj('secondRoll', ['getScore', 'isScored']);
    frame = new Frame(firstRoll, secondRoll);
  });

  describe('#rolls', function() {
    it('has an array of rolls', function() {
      expect(frame.rolls.length).toEqual(2);
    });
  });

  describe('#currentRollIndex', function() {
    it('starts with a currentRoll of 0', function() {
      expect(frame.currentRollIndex).toEqual(0);
    });
  });

  describe('getCurrentRoll', function() {
    it('current roll is defined', function() {
      expect(frame.getCurrentRoll()).toBeDefined();
    });
    it('can get the value of the current roll', function() {
      firstRoll.getScore.and.returnValue(1);
      expect(frame.getCurrentRoll().getScore()).toEqual(1);
    })
  });

  describe('#nextRoll', function() {
    it('adds to currentRoll', function() {
      frame.nextRoll();
      expect(frame.currentRollIndex).toEqual(1);
    });
  });

  describe('#setCurrentRollScore', function() {
    it('sets score of current roll', function() {
      frame.setCurrentRollScore(5);
      expect(firstRoll.setScore).toHaveBeenCalledWith(5);
    });
  });

  describe('#finished', function() {
    it('returns true if both roll slots are filled', function() {
      firstRoll.isScored.and.returnValue(true);
      secondRoll.isScored.and.returnValue(true);
      frame.updateFinishState();
      expect(frame.finished()).toEqual(true);
    });
    it('returns true if first roll slot is greater than 10', function() {
      firstRoll.getScore.and.returnValue(10);
      frame.updateFinishState();
      expect(frame.finished()).toEqual(true);
    });
    it('returns false if one slot is not filled', function() {
      firstRoll.getScore.and.returnValue(9);
      expect(frame.finished()).toEqual(false);
    })
  });

  describe('#basicTotalScore', function() {
    it('returns the basic total of both rolls', function() {
      firstRoll.getScore.and.returnValue(4);
      secondRoll.getScore.and.returnValue(3);
      expect(frame.basicTotalScore()).toEqual(7);
    });
  });

  describe('#setFinishState', function() {
    it('sets finish state', function() {
      frame.setFinishState(frame.finishStates.finished);
      expect(frame.finishState).toEqual(frame.finishStates.finished);
    });
  });

  describe('#getFinishState', function() {
    it('returns the finishState', function() {
      expect(frame.getFinishState()).toEqual(frame.finishStates.unfinished);
    })
  });

  describe('#updateFinishState', function() {
    it('updates the finish state to finished if both values have a score', function() {
      firstRoll.isScored.and.returnValue(true);
      secondRoll.isScored.and.returnValue(true);
      frame.updateFinishState();
      expect(frame.finishState).toEqual(frame.finishStates.finished);
    });
    it('updates the finish state to spare if both values add up to 10', function() {
      firstRoll.isScored.and.returnValue(true);
      secondRoll.isScored.and.returnValue(true);
      firstRoll.getScore.and.returnValue(5);
      secondRoll.getScore.and.returnValue(5);
      frame.updateFinishState();
      expect(frame.finishState).toEqual(frame.finishStates.spare);
    });
    it('updates the finish state to strike if first value is 10', function() {
      firstRoll.getScore.and.returnValue(10);
      frame.updateFinishState();
      expect(frame.finishState).toEqual(frame.finishStates.strike);
    });
    it('keeps the value as unfinished if frame is not finished spare or strike', function() {
      firstRoll.getScore.and.returnValue(1);
      secondRoll.isScored.and.returnValue(false);
      frame.updateFinishState();
      expect(frame.finishState).toEqual(frame.finishStates.unfinished);
    })
  });

  describe('#rollReportText', function() {
    it('returns an object with X and "" if it was a strike', function() {
      spyOn(frame, 'getFinishState').and.returnValue(frame.finishStates.strike);
      expect(frame.rollText().firstRoll).toEqual('X');
      expect(frame.rollText().secondRoll).toEqual('');
    });
    it('returns an object with 3 and "/" if it was a spare', function() {
      spyOn(frame, 'getFinishState').and.returnValue(frame.finishStates.spare);
      firstRoll.getScore.and.returnValue(3);
      expect(frame.rollText().firstRoll).toEqual(3);
      expect(frame.rollText().secondRoll).toEqual('/');
    });
    it('returns current score values for rolls if finished', function() {
      spyOn(frame, 'getFinishState').and.returnValue(frame.finishStates.finished);
      firstRoll.getScore.and.returnValue(3);
      secondRoll.getScore.and.returnValue(6);
      expect(frame.rollText().firstRoll).toEqual(3);
      expect(frame.rollText().secondRoll).toEqual(6);
    });
    it('returns first scores value for unfinished frame', function() {
      firstRoll.getScore.and.returnValue(3);
      secondRoll.getScore.and.returnValue('');
      expect(frame.rollText().firstRoll).toEqual(3);
      expect(frame.rollText().secondRoll).toEqual('');
    });
  });
});