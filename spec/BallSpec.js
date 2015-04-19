describe('Ball', function() {

  var ball;

  beforeEach(function() {
    ball = new Ball();
  });

  it('should have a score of 0 by default', function() {
    expect(ball.score).toEqual(0);
  });

  it("should be able to set it's score", function() {
    ball.setScore(1);
    expect(ball.score).toEqual(1);
  });

  it('should have a status of unrolled when created', function() {
    expect(ball.isRolled).toBe(false);
  });

  it('should change it\'s status to rolled when a score is given', function() {
    ball.setScore(1);
    expect(ball.isRolled).toBe(true);
  });

  it('should know if it is a strike', function() {
    ball.setScore(10);
    expect(ball.isStrike).toBe(true);
  });

  it('should know if it is not a strike', function() {
    ball.setScore(1);
    expect(ball.isStrike).toBe(false);
  });

  it('should know if it is a spare', function() {
    expect(ball.isSpare).toBe(false);
  });

  it('should be able to set a spare', function() {
    ball.spare();
    expect(ball.isSpare).toBe(true);
  });


});
