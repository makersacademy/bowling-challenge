describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  })

  it('responds to a user bowling the ball', function() {
    expect(frame.bowlBall()).toBeDefined;
  })
})