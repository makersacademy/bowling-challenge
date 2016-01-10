describe(".Bonus", function () {

  var bonus;

  beforeEach(function(){bonus = new Bonus(2);})

  describe("#reduceTimeLimit", function () {
    it ('reduces time limit', function () {
      bonus.reduceTimeLimit();
      expect(bonus.timeLimit).toEqual(1);
    });
  });

  describe("#loopLimit", function () {
    it ('provides a value of 1 if within time limit', function () {
      expect(bonus.loopLimit()).toEqual(1);
    });

    it ('provides a value of 0 if outside of time limit', function () {
      bonus.reduceTimeLimit();
      bonus.reduceTimeLimit();
      expect(bonus.loopLimit()).toEqual(0);
    });
  });
});
