describe('Frame', function() {
  var frame;
  beforeEach(function() {
    firstRoll = jasmine.createSpyObj('firstRoll', ['getScore', 'setScore']);
    secondRoll = jasmine.createSpyObj('secondRoll', ['getScore']);
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
      firstRoll.getScore.and.returnValue(1);
      secondRoll.getScore.and.returnValue(1);
      frame = new Frame(firstRoll, secondRoll);
      expect(frame.finished()).toEqual(true);
    });
    it('returns true if first roll slot is greater than 10', function() {
      firstRoll.getScore.and.returnValue(10);
      frame = new Frame(firstRoll, secondRoll);
      expect(frame.finished()).toEqual(true);
    });
    it('returns false if one slot is not filled', function() {
      firstRoll.getScore.and.returnValue(9);
      frame = new Frame(firstRoll, secondRoll);
      expect(frame.finished()).toEqual(false);
    })
  });

  describe('#rollReportText', function() {
    it('returns an X if the roll was 10', function() {
      firstRoll.getScore.and.returnValue(10);
      expect(frame.rollReportText()).toEqual('X');
    })
  })
});