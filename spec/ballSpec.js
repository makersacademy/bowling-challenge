describe('Ball', function() {
  var ball;

  beforeEach(function() {
    ball = new Ball();
  });

  describe('Intialized properties has', function() {
    it('measures first round score', function() {
      expect(ball.firstRollScore).toEqual(0);
    });
  });

  describe('First roll score', function() {
    it('takes an input number', function() {
      expect(ball.firstRoll(6)).toEqual(6)
    });
  });




});