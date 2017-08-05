describe("ScoreCalculator", function() {
  var calculator;
  var frames;
  var bonuses;

  beforeEach(function() {
    frames = [];
    for (var i = 0; i < 10; i++) {
      frames.push(new Frame(i));
    }
    bonuses = [];
    calculator = new ScoreCalculator(frames, bonuses);
  });

  describe("initialization", function() {
    it("has an array of frames and an array of bonuses", function() {
      expect(calculator.frames instanceof Array).toBeTruthy();
      expect(calculator.bonuses instanceof Array).toBeTruthy();
    });
  });

  describe("calulating the total score", function() {
    it("adds the total and bonus scores together", function() {
      spyOn(Frame.prototype, "getScore").and.returnValue(5);
      bonuses.push(new Bonus("strike", 5));
      expect(calculator.totalScore()).toEqual(55);
    });
  });

  describe("calulating frame scores", function() {
    it("calculates the scores of the frames", function() {
      spyOn(Frame.prototype, "getScore").and.returnValue(5);
      expect(calculator.framesScore()).toEqual(50);
    });
  });

  describe("calculating bonus scores", function() {
    it("can calculate a strike bonus", function() {
      spyOn(Frame.prototype, "getScore").and.returnValue(5);
      bonuses.push(new Bonus("strike", 5));
      expect(calculator.bonusScores()).toEqual(5);
    });

    it("can calculate a spare bonus", function() {
      spyOn(Frame.prototype, "getFirstRoll").and.returnValue(2);
      bonuses.push(new Bonus("spare", 5));
      expect(calculator.bonusScores()).toEqual(2);
    });
  });
});
