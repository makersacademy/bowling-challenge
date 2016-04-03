describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
    frame.rollBall(4);
    frame.rollBall(5);
  });

  describe('rolling the ball', function() {
    it('sets first roll value', function() {
      expect(frame.getFirstRoll()).toEqual(4);
    });
    it('sets second roll value', function() {
      expect(frame.getSecondRoll()).toEqual(5);
    });
    it('stops after 2 rolls', function() {
      frame.rollBall(3);
      expect(frame.getSecondRoll()).toEqual(5);
    });
    it('gets total of both rolls', function() {
      expect(frame.getTotal()).toEqual(9);
    });
  });

  describe('special frames', function() {
    beforeEach(function() {
      frame = new Frame();
    });
    it('can have a spare, when sum of rolls is all pins', function() {
      frame.rollBall(6);
      frame.rollBall(4);
      expect(frame.isSpare()).toBeTruthy();
      expect(frame.isStrike()).toBeFalsy();
    });

    it('can have a strike, when first roll is all pins', function() {
      frame.rollBall(10);
      expect(frame.isSpare()).toBeFalsy();
      expect(frame.isStrike()).toBeTruthy();
    });
  });

  describe('exceptions', function() {
    beforeEach(function() {
      frame = new Frame();
    });
    it('can\'t have more than 10 pins per roll', function() {
      var expection = function() {
        frame.rollBall(11);
      };
      expect(expection).toThrow();
    });

    it('can\'t have more than 10 pins per frame', function() {
      var expection = function(){
        frame.rollBall(9);
        frame.rollBall(2);
      };
      expect(expection).toThrow();
    });
  });

});
