describe("Frame", function() {
  var frame;
  var gameTrue;
  var gameFalse;

  beforeEach(function() {
    frame = new Frame();

    gameTrue = new Game();
    gameTrue.framesComplete = 10;

    gameFalse = new Game();
    gameFalse.framesComplete = 1;
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

    it("0 for the bonus roll", function(){
      expect(frame.bonusRollPins).toEqual(0);
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
      frame.rollBall(8);
      expect(frame.firstRollPins).toEqual(8);
    });

    it("should add it to the total", function() {
      frame.rollBall(8);
      expect(frame.totalPinsDown).toEqual(8);
    });

    it("should keep the score of the second roll", function(){
      frame.rollBall(8);
      frame.rollBall(1);
      expect(frame.secondRollPins).toEqual(1);
    });

    it("add it to the total", function(){
      frame.rollBall(8);
      frame.rollBall(1);
      expect(frame.totalPinsDown).toEqual(9);
    });

    it("should not allow a score higher than the max score - first frame", function(){
      expect(function() {frame.rollBall(11)}).toThrow(`Max pins per frame is ${frame.MAXPINS}`);
    });

    it("should not allow a total score higher than the max score", function(){
      frame.rollBall(8);
      expect(function() {frame.rollBall(3)}).toThrow(`Max pins per frame is ${frame.MAXPINS}`);
    });
  });

  describe("Strike or Spare", function(){
    it("should recognise a Strike", function(){
      frame.rollBall(10);
      expect(frame.strike).toEqual(true);
    });

    it("should not falsely recognise a strike", function(){
      frame.rollBall(6);
      expect(frame.strike).toEqual(false);
    });

    it("should not falsley recognise a Spare", function(){
      frame.rollBall(8);
      frame.rollBall(1);
      expect(frame.spare).toEqual(false);
    });
  });

  describe("Bonus roll", function(){
    it("in certain circumstances", function(){
      frame.strike = true;
      frame.isBonusRollAllowed(gameTrue);
      frame.rollBonusBall(5);
      expect(frame.bonusRollPins).toEqual(5);
    });

    it("but not in others", function(){
      frame.isBonusRollAllowed(gameFalse);
      expect(function() {frame.rollBonusBall(5)}).toThrow(`Bonus roll is not allowed.`);
    });
  });
});
