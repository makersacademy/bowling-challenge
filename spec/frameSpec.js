describe("Frame", function() {

//Refactor so that this before each is in a spec helper
  beforeEach(function(){
    standardFrame = new Frame([4,5]);
    spareFrame = new Frame([5,5]);
    strikeFrame = new Frame([10]);
    gutterFrame = new Frame([]);
  });

  it("totals the score from the two bowls in a single frame.", function() {

    expect(standardFrame.frameScore).toEqual(9);
    expect(spareFrame.frameScore).toEqual(10);
    expect(strikeFrame.frameScore).toEqual(10);
    expect(gutterFrame.frameScore).toEqual(0);
  });

  xit("throws an error if more than 10 pins are knocked down in a standard frame.", function() {

    expect( function(){ new Frame([9,9]); } ).toThrowError('Cannot knock down more than 10 pins in a single frame');
  });

  xit("throws an error if there is more than two bowls in a standard frame", function() {

    expect( function(){ new Frame([1,1,3]); } ).toThrowError('Cannot have more than two bowls in a standard frame');
  });



  describe("Score method returns frame score", function(){
    // if calculate score is removed from initilize, the tests below stay as they are, otherwise need to remove the .caclulatescore line on each test

    it("returns 9 for a standard frame", function() {
      standardFrame.calculateScore();
      expect(standardFrame.score()).toEqual(9);
    });

    it("returns 10 for a spare frame", function() {
      spareFrame.calculateScore();
      expect(spareFrame.score()).toEqual(10);
    });

    it("returns 10 for a spare frame", function() {
      strikeFrame.calculateScore();
      expect(strikeFrame.score()).toEqual(10);
    });

    it("returns 0 for a gutter frame", function() {
      gutterFrame.calculateScore();
      expect(gutterFrame.score()).toEqual(0);
    });
  });

  describe("Caclulating Score for Spares", function(){

    it("should return 14 (10 + 1st bowl of 2nd frame) when followed by standard frame", function() {
      spareFrame.calculateScore(standardFrame);
      expect(spareFrame.frameScore).toEqual(14);
    });

    it("should return 15 (10 + 1st bowl of 2nd frame) when followed by another spare", function() {
      spareFrame.calculateScore(spareFrame);
      expect(spareFrame.frameScore).toEqual(15);
    });

    it("should return 20 when followed by a strike", function(){
      spareFrame.calculateScore(strikeFrame);
      expect(spareFrame.frameScore).toEqual(20);
    });

    it("should return 10 when followed by a gutter frame", function(){
      spareFrame.calculateScore(gutterFrame);

      expect(spareFrame.frameScore).toEqual(10);
    });
  });


  describe("Caclulating Score for strikes", function(){

    it("should return 19 (sum of two bowls in 2nd frame) when followed by standard frame", function() {
      strikeFrame.calculateScore(standardFrame);
      expect(strikeFrame.frameScore).toEqual(19);
    });

    it("should return 20 when followed by spare", function() {
      strikeFrame.calculateScore(spareFrame);
      expect(strikeFrame.frameScore).toEqual(20);
    });

    it("should return 30 when followed by two strikes", function(){
      strikeFrame.calculateScore(strikeFrame, strikeFrame);
      expect(strikeFrame.frameScore).toEqual(30);
    });

    it("should return 10 when followed by a gutter frame", function(){
      strikeFrame.calculateScore(gutterFrame);
      expect(strikeFrame.frameScore).toEqual(10);
    });
  });

});
