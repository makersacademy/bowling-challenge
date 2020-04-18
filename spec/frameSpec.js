describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  })

  it('responds to a user bowling the ball', function() {
    expect(frame.bowlBall()).toBeDefined;
  })

  it('can calculate  turns', function() {
    frame.bowlBall(1);
    expect(frame.currentTurn()).toEqual(1);
  })

  it('can calculate score', function() {
    frame.bowlBall(1);
    frame.bowlBall(2);
    expect(frame.calculateScore()).toEqual(3);
  })
})