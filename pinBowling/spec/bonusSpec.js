describe(".Bonus", function () {

  var bonus;

  beforeEach(function(){bonus = new Bonus(2);})

  describe("#reduceTimeLimit", function () {
    it ('reduces time limit', function () {
      bonus.reduceTimeLimit();
      expect(bonus.timeLimit).toEqual(1);
    });

  });
});
