var FinalFrame = require('../src/finalFrame.js');


describe('FinalFrame', function() {
  var fFrame;

  beforeEach(function() {
    fFrame = new FinalFrame();
  });

  it('has an array of rolls', function() {
    expect(fFrame.rolls).toEqual([])
  });

  it('adds to the rolls when the player rolls', function() {
    fFrame.roll(3);
    expect(fFrame.rolls).toEqual([3])
  });

  it('always lets the player make at least two rolls', function() {
    fFrame.roll(3);
    fFrame.roll(4);
    expect(fFrame.rolls).toEqual([3, 4]);
  });

  it('lets the player strike twice', function() {
    fFrame.roll(10);
    fFrame.roll(10);
    expect(fFrame.strikes).toEqual([true, true]);
  });

  describe("#calculateScore", function() {
    it('calculates the score for no spares/strikes', function () {
      fFrame.roll(3)
      fFrame.roll(3)
      expect(fFrame.calculateScore()).toEqual(6)
    })

    it('calculates the score for a spare on roll 1', function () {
      fFrame.roll(3)
      fFrame.roll(7)
      fFrame.roll(4)
      expect(fFrame.calculateScore()).toEqual(14)
    });

    it('calculates the score for a strike on roll 0', function () {
      fFrame.roll(10)
      fFrame.roll(3)
      fFrame.roll(4)
      expect(fFrame.calculateScore()).toEqual(17)
    });

    it('calculates the score for two strikes on rolls 0 and 1', function () {
      fFrame.roll(10)
      fFrame.roll(10)
      fFrame.roll(4)
      expect(fFrame.calculateScore()).toEqual(24)
    });

    it('calculates the score correctly after one strike', function() {
      fFrame.roll(10)
      expect(fFrame.calculateScore()).toEqual(10)
    });

    it('calculates the score correctly after two strikes', function() {
      fFrame.roll(10)
      fFrame.roll(10)
      expect(fFrame.calculateScore()).toEqual(20)
    });

    it('calculates the score correctly after a spare', function() {
      fFrame.roll(5)
      fFrame.roll(5)
      expect(fFrame.calculateScore()).toEqual(10)
    });

    it('calculates the score correctly before the frame has started', function() {
      expect(fFrame.calculateScore()).toEqual(0)
    });
  });

  describe("Error handling", function () {
    it('errors if the player makes a third roll without a spare', function() {
      fFrame.roll(3);
      fFrame.roll(4);
      expect(function() {
        fFrame.roll(2)
      }).toThrowError('The frame is already over.')
    });

    it('errors if the player tries to score more than 10', function() {
      expect(function() {
        fFrame.roll(12)
      }).toThrowError('The score on one roll cannot be over 10.')
    });

    it('errors if the player tries to score more than remaining', function() {
      fFrame.roll(3);
      expect(function() {
        fFrame.roll(8)
      }).toThrowError('You cannot knock down more pins than there are standing.')
    });

    it('errors if the player tries to score more than remaining after strike', function() {
      fFrame.roll(10);
      fFrame.roll(3);
      expect(function() {
        fFrame.roll(8)
      }).toThrowError('You cannot knock down more pins than there are standing.')
    });
  });

  describe("#scoreRoll", function () {
    it("calls firstRoll on the first roll", function() {
      fFrame.roll(5)
      expect(fFrame.remaining).toEqual(5)
    });

    it("raises error if rolls has the wrong length", function() {
      fFrame.rolls = [1,2,3,4]
      expect(function() {
        fFrame.scoreRoll(5)
      }).toThrowError('Incorrect rolls length.')
    });
  });
});
