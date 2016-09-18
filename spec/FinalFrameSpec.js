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
});
