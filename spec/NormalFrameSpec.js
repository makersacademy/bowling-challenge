describe('Frame', function() {
  var normalframe;
  var ball;

  beforeEach(function() {
    normalframe = new NormalFrame();
    ball = new Ball();
  });

  it('should have 10 pins when created', function() {
    expect(normalframe.pinsStanding).toEqual(10);
  });

  it('not over when it is started', function() {
    expect(normalframe.isOver).toBe(false);
  });

  it('should know when it is over', function() {
    normalframe.Over();
    expect(normalframe.isOver).toBe(true);
  });

  it('should allow a ball to be bowled', function() {
    normalframe.bowl(ball);
    expect(normalframe.balls).toEqual([ball]);
  });

  it('should know how many pins are left after a ball is bowled', function(){
    ball.setScore(6);
    normalframe.bowl(ball);
    expect(normalframe.pinsStanding).toEqual(4);
  });

});