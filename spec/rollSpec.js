describe('Roll', function() {
  var roll;

  describe('#rollBall', function() {
    it('gets and returns user input for ball roll', function () {
      roll = new Roll();
      score = 5;
      expect(roll.rollBall(score)).toEqual(score);
    });
  });

});
