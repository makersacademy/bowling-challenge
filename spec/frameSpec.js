describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('The frame should start with', function() {
    it("0 rolls", function(){
      expect(frame.rollsComplete).toEqual(0);
    });

    it("0 for the first roll", function(){
      expect(frame.firstRollPins).toEqual(0);
    });

    it("0 for the second roll", function(){
      expect(frame.secondRollPins).toEqual(0);
    });

    it("0 pins knocked down", function(){
      expect(frame.totalPinsDown).toEqual(0);
    });

    it("a maximum of 10 pins per frame", function(){
      expect(frame.MAXPINS).toEqual(10);
    });

    it("a maximum of two rolls per frame", function(){
      expect(frame.MAXROLLS).toEqual(2);
    });
  });

  describe("Frame rules", function(){
    it("roll number should increase by 1", function(){
      frame.increaseRollNumber();
      expect(frame.rollsComplete).toEqual(1);
    });

    it("roll numbers should not be more than the max", function(){
      frame.increaseRollNumber();
      frame.increaseRollNumber();
      expect(function () {frame.increaseRollNumber()}).toThrow(`${frame.MAXROLLS} rolls maximum.`)
    });
  });

  describe("Rolls", function(){
    it("should keep the score of the first roll", function(){
      frame.rollFirstBall(8);
      expect(frame.firstRollPins).toEqual(8);
    });

    it("shoukd keep the score of the second roll", function(){
      frame.rollSecondBall(1);
      expect(frame.secondRollPins).toEqual(1);
    });
  });


});
