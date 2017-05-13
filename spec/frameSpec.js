describe("Frame", function(){
  var frame;
  var lastFrame;
  var pins;

  beforeEach(function(){
    frame = new Frame(5);
    lastFrame = new Frame(10);
  });

  describe('has a number of rolls/bowls', function() {
    it('returns a score on the first bowl', function() {
      frame.firstBowl(7);
      expect(frame._details.firstScore).toEqual(7);
    });

    it('returns a score on the second bowl', function() {
      frame.secondBowl(2);
      expect(frame._details.secondScore).toEqual(2);
    });

    it('returns an error on the third bowl', function() {
      expect(function(){
        frame.thirdBowl(4);
      }).toThrowError('Error: You cannot bowl a third time.')
    });

    it('cannot score more than ten pins on a standard frame', function() {
      frame.firstBowl(5);
      expect(function(){
        frame.secondBowl(6);
      }).toThrowError('Error: You cannot hit more than 10 pins.')
    });

    it('cannot score more pins after a strike', function() {
      frame.firstBowl(10);
      expect(function(){
        frame.secondBowl(1);
      }).toThrowError('Error: You cannot hit more than 10 pins.')
    })
  });

  describe('totals the score of the bowls in the frame', function() {
    it('can add the scores of the two bowls', function() {
      frame.firstBowl(7);
      frame.secondBowl(2);
      expect(frame._details.pins).toEqual(9);
    });
  });

  describe('treatment of strikes', function() {
    it('recognises when the player makes a strike', function() {
      frame.firstBowl(10);
      expect(frame.isStrike()).toBe(true);
    });

    it('recognises when the player does not make a strike', function() {
      frame.firstBowl(9);
      expect(frame.isStrike()).toBe(false);
    });
  });

  describe('treatment of spares', function() {
    it('recognises when the player makes a spare', function() {
      frame.firstBowl(8);
      frame.secondBowl(2);
      expect(frame.isSpare()).toBe(true);
    });

    it('recognises when the player does not make a spare', function() {
      frame.firstBowl(8);
      frame.secondBowl(1);
      expect(frame.isSpare()).toBe(false);
    });
  });

  describe('treatment of gutters', function() {
    it('recognises when the player makes a gutter', function() {
      frame.firstBowl(0);
      frame.secondBowl(0);
      expect(frame.isGutter()).toBe(true);
    });

    it('recognises when the player does not make a gutter', function() {
      frame.firstBowl(1);
      frame.secondBowl(0);
      expect(frame.isGutter()).toBe(false);
    });
  });

  describe('special functionality for frame 10', function() {
    it('will not ordinarily allow the player to make three bowls in frame 10', function() {
      expect(function(){
        frame.firstBowl(1);
        frame.secondBowl(4);
        lastFrame.thirdBowl(10);
      }).toThrowError('Error: You cannot bowl a third time.')
    });

    it('allows the player to make a third bowl if they make a strike', function() {
      lastFrame.firstBowl(10);
      lastFrame.secondBowl(10);
      lastFrame.thirdBowl(10);
      expect(lastFrame._details.pins).toEqual(30);
    });

    it('allows the player to make a third bowl if they make a spare', function() {
      lastFrame.firstBowl(2);
      lastFrame.secondBowl(8);
      lastFrame.thirdBowl(1);
      expect(lastFrame._details.pins).toEqual(11);
    });
  });

});
