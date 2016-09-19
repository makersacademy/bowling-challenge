describe("Final Frame", function() {

  beforeEach(function() {
    finalFrame = new FinalFrame();
  });

  describe('Calculating Scores', function() {
    it('should add two rolls normally', function(){
      finalFrame.addScore(7);
      finalFrame.addScore(1);
      expect(finalFrame.calculateScore()).toEqual(8);
    });
    it('should add three rolls on strike', function(){
      finalFrame.addScore(10);
      finalFrame.addScore(10);
      finalFrame.addScore(5);
      expect(finalFrame.calculateScore()).toEqual(25);
    });
    it('should add two roll bonus for doublestrike', function(){
      finalFrame.addScore(7);
      finalFrame.addScore(3);
      finalFrame.addScore(5);
      expect(finalFrame.calculateScore()).toEqual(15);
    });
  });

  describe("Number of Rolls", function(){
    it('should have two rolls w/o strike/spare', function(){
      finalFrame.addScore(3);
      finalFrame.addScore(4);
      expect(function(){finalFrame.addScore(5)}).toThrow(new Error("The Frame is already over"));
    });
    it('should add one roll bonus for spare', function(){
      finalFrame.addScore(3);
      finalFrame.addScore(7);
      finalFrame.addScore(5);
      expect(function(){finalFrame.addScore(5)}).toThrow(new Error("The Frame is already over"));
    });
    it('should add two roll bonus for strike', function(){
      finalFrame.addScore(10);
      finalFrame.addScore(7);
      finalFrame.addScore(2);
      expect(function(){finalFrame.addScore(5)}).toThrow(new Error("The Frame is already over"));
    });
  });

  describe('Returning Display Symbols', function() {
    it("should return numbers on normal frame", function() {
      finalFrame.addScore(5);
      finalFrame.addScore(1);
      expect(finalFrame.getDisplaySymbols()).toEqual({first: 5, second: 1, third:'\u00A0' })
    });
    it("should return strike/strike/strike", function() {
      finalFrame.addScore(10);
      finalFrame.addScore(10);
      finalFrame.addScore(10);
      expect(finalFrame.getDisplaySymbols()).toEqual({first: 'X', second: 'X', third:'X' })
    });
    it("should return strike/strike/number", function() {
      finalFrame.addScore(10);
      finalFrame.addScore(10);
      finalFrame.addScore(5);
      expect(finalFrame.getDisplaySymbols()).toEqual({first: 'X', second: 'X', third:5 })
    });
    it("should return number/spare/number", function() {
      finalFrame.addScore(3);
      finalFrame.addScore(7);
      finalFrame.addScore(5);
      expect(finalFrame.getDisplaySymbols()).toEqual({first: 3, second: '/', third:5 })
    });
    it("should return number/spare/strike", function() {
      finalFrame.addScore(3);
      finalFrame.addScore(7);
      finalFrame.addScore(10);
      expect(finalFrame.getDisplaySymbols()).toEqual({first: 3, second: '/', third:'X' })
    });
  });
});
