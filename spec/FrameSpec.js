describe("Frame", function() {

  beforeEach(function() {
    frame = new Frame();
    finalFrame = new Frame('final');
    bonusSpareFrame = new Frame('spare');
    bonusStrikeFrame = new Frame('strike');
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

  describe('Frame Type', function() {
    it("Knows the result of the frame - normal", function() {
      frame.addScore(5);
      frame.addScore(1);
      expect(frame.frameResult()).toEqual(null);
    });

    it("Knows the result of the frame - spare", function() {
      frame.addScore(5);
      frame.addScore(5);
      expect(frame.frameResult()).toEqual('spare');
    });
    it("Knows the result of the frame - strike", function() {
      frame.addScore(10);
      frame.addScore(0);
      expect(frame.frameResult()).toEqual('strike');
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
    it('should add bonus of first score', function(){
      bonusSpareFrame.addScore(2);
      bonusSpareFrame.addScore(3);
      expect(bonusSpareFrame.calculateScore()).toEqual(7);
    })
  });

  describe("Strike Bonus Game", function(){
    it('should add bonus of combined score', function(){
      bonusStrikeFrame.addScore(3);
      bonusStrikeFrame.addScore(4);
      expect(bonusStrikeFrame.calculateScore()).toEqual(14);
    })
  });

  describe("Final Frame", function(){
    it('should add bonus of combined score', function(){
      finalFrame.addScore(3);
      finalFrame.addScore(4);
      expect(finalFrame.calculateScore()).toEqual(7);
    });
    it('should add one roll bonus for spare', function(){
      finalFrame.addScore(3);
      finalFrame.addScore(7);
      finalFrame.addScore(5);
      expect(finalFrame.calculateScore()).toEqual(15);
    });
    it('should add one roll bonus for strike', function(){
      finalFrame.addScore(10);
      finalFrame.addScore(10);
      expect(finalFrame.calculateScore()).toEqual(20);
    });
    it('should add two roll bonus for doublestrike', function(){
      finalFrame.addScore(10);
      finalFrame.addScore(10);
      finalFrame.addScore(10);
      expect(finalFrame.calculateScore()).toEqual(30);
    })
  });

  describe('Defending Against Edge Cases', function() {
    it("should not accept more than two scores unless final", function() {
      frame.addScore(5);
      frame.addScore(1);
      expect(function(){frame.addScore(5)}).toThrow(new Error("The Frame in already over"));
    });
    it("should not accept two scores over 10", function() {
      frame.addScore(6);
      expect(function(){frame.addScore(7)}).toThrow(new Error("Maximum Frame Score Reached"));
    });
    it("should not accept three scores over 30 on final w/ strikes", function() {
      finalFrame.addScore(10);
      finalFrame.addScore(10);
      expect(function(){finalFrame.addScore(15)}).toThrow(new Error("Maximum Frame Score Reached"));
    });
  });




});
