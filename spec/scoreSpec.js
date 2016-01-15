describe("Score", function() {
  var score;
  var round1;
  var round2;

  beforeEach(function() {
    score = new Score();
    round1 = jasmine.createSpyObj('round1', ['rollOne', 'rollTwo']);
    round2 = jasmine.createSpyObj('round2', ['rollOne', 'rollTwo']);
  });

  describe("returning the score", function() {
    beforeEach(function() {
      round1.rollOne.and.returnValue(1);
      round1.rollTwo.and.returnValue(2);
      round2.rollOne.and.returnValue(5);
      round2.rollTwo.and.returnValue(4);
    });

    it("returns an array of scores", function() {
      expect(score.giveScore([round1])).toEqual([3]);
    });

    xit("returns an array of scores", function() {
      expect(score.giveScore([round1, round2])).toEqual([3, 9]);
    });
  });
});
