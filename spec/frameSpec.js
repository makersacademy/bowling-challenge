describe("Frame", function() {
  var score;
  var roll1 = jasmine.createSpyObj('roll', ['getRoll'])
  var roll2 = jasmine.createSpyObj('roll', ['getRoll'])

  beforeEach(function() {
    score = new Frame();
  });

  describe("getCurrentScore", function() {
    it("defaults to 0", function() {
      expect(score.getCurrentScore()).toBe(0)
    });
  });

  describe("inputScore", function() {
    it("updates the users score", function(){
      roll1.getRoll.and.callFake(function() {return 4})
      roll2.getRoll.and.callFake(function() {return 2})
      roll1Score = roll1.getRoll()
      roll2Score = roll2.getRoll()
      score.calculateScore(roll1Score, roll2Score);
      expect(score.getCurrentScore()).toBe(6)
    });

    it("adds the second roll as 0 if the first roll is 10", function() {
      roll1.getRoll.and.callFake(function() {return 10})
      roll1Score = roll1.getRoll()
      score.calculateScore(roll1Score);
      expect(score.getCurrentScore()).toBe(10)
    });
  });

  describe("checkRolls", function() {
    it("checks the number of rolls in the frame", function() {
      score.addRoll()
      score.addRoll()
      expect(score.checkRolls()).toBe(2)
    });
  });
});
