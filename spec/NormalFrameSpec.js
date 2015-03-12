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
    spyOn(ball, "score").and.returnValue(6);
    ball.setScore(6);
    normalframe.bowl(ball);
    expect(normalframe.pinsStanding).toEqual(4);
  });

  it('should be over if a strike is bowled', function() {
    spyOn(ball, "score").and.returnValue(10);
    ball.setScore(10);
    normalframe.bowl(ball);
    expect(normalframe.isOver).toBe(true);
  });

  xit('should not accept another ball if it is over', function(){
    spyOn(ball, "score").and.returnValue(10);
    ball.setScore(10);
    normalframe.bowl(ball);
    expect(normalframe.bowl(ball))
  });

});