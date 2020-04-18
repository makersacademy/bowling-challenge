describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  })

  it('responds to a user bowling the ball', function() {
    expect(frame.bowlBall()).toBeDefined;
  })

  it('bowling a ball updates the turn', function() {
    frame.bowlBall(1);
    expect(frame.currentTurn()).toEqual(1);
  })
})