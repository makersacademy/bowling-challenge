describe("Frame", function() {

  beforeEach(function() {
    frame = new Frame();
  });

  describe('Adding Scores', function() {
    it("should accept first score ", function() {
      frame.addScore(5);
      expect(frame.firstScore).toEqual(5);
    });

    it("should accept second score ", function() {
      frame.addScore(2);
      frame.addScore(6);
      expect(frame.secondScore).toEqual(6);
    });
  });

  describe('Calculating Frame Score', function(){
    it('should return 0 on a gutter frame', function() {
      frame.addScore(0);
      frame.addScore(0);
      expect(frame.calculateScore()).toEqual(0);
    });

    it('should return sum of pins on normal frame', function(){
      frame.addScore(2);
      frame.addScore(3);
      expect(frame.calculateScore()).toEqual(5);
    })
  });

  describe("Spare Bonus Game", function(){
    beforeEach(function() {
      bonusSpareFrame = new Frame('spare');
    });
    it('should add bonus of first score', function(){
      bonusSpareFrame.addScore(2);
      bonusSpareFrame.addScore(3);
      expect(bonusSpareFrame.calculateScore()).toEqual(7);
    })
  });

  describe("Spare Bonus Game", function(){
    beforeEach(function() {
      bonusStrikeFrame = new Frame('strike');
    });
    it('should add bonus of combined score', function(){
      bonusStrikeFrame.addScore(3);
      bonusStrikeFrame.addScore(4);
      expect(bonusStrikeFrame.calculateScore()).toEqual(14);
    })
  });


});
