describe("SpareFrame", function() {

  beforeEach(function() {
    spareFrame = new SpareFrame();
  });

  describe("Spare Bonus Game", function(){
    it('should add bonus of first score', function(){
      spareFrame.addScore(2);
      spareFrame.addScore(3);
      expect(spareFrame.calculateScore()).toEqual(7);
    });
    it('should finish on first roll strike', function(){
      spareFrame.addScore(10);
      expect(function(){spareFrame.addScore(5)}).toThrow(new Error("The Frame is already over"));
    })

  });

  describe('Frame Type', function() {
    it("Knows the result of the frame - normal", function() {
      spareFrame.addScore(5);
      spareFrame.addScore(1);
      expect(spareFrame.frameResult()).toEqual('frame');
    });

    it("Knows the result of the frame - spare", function() {
      spareFrame.addScore(5);
      spareFrame.addScore(5);
      expect(spareFrame.frameResult()).toEqual('spare');
    });
    it("Knows the result of the frame - strike", function() {
      spareFrame.addScore(10);
      expect(spareFrame.frameResult()).toEqual('strike');
    });
  });

  describe('Defending Against Edge Cases', function() {
    it("should not accept more than two scores", function() {
      spareFrame.addScore(5);
      spareFrame.addScore(1);
      expect(function(){spareFrame.addScore(5)}).toThrow(new Error("The Frame is already over"));
    });
    it("should not accept two scores over 10", function() {
      spareFrame.addScore(6);
      expect(function(){spareFrame.addScore(7)}).toThrow(new Error("Max Score Reached"));
    });
  });

  describe('Returning Display Symbols', function() {
    it("should return numbers on normal frame", function() {
      spareFrame.addScore(5);
      spareFrame.addScore(1);
      expect(spareFrame.getDisplaySymbols()).toEqual({first: 5, second: 1})
    });
    it("should return whitespace/strike on strike", function() {
      spareFrame.addScore(10);
      expect(spareFrame.getDisplaySymbols()).toEqual({ first: '\u00A0', second: 'X' })
    });
    it("should return number/spare on spare", function() {
      spareFrame.addScore(3);
      spareFrame.addScore(7);
      expect(spareFrame.getDisplaySymbols()).toEqual({ first: 3, second: '/' })
    });
  });
});
