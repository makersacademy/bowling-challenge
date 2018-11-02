describe("Frame", function() {
  var score;
  var roll1 = jasmine.createSpyObj('roll', ['getRoll'])
  var roll2 = jasmine.createSpyObj('roll', ['getRoll'])

  beforeEach(function() {
    score = new Frame();
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

  });
});
