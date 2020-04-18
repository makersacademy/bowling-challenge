describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  })

  it('responds to a user bowling the ball', function() {
    expect(frame.enterTurn()).toBeDefined;
  })

  it('can calculate  turns', function() {
    frame.enterTurn(5);
    expect(frame.currentTurn()).toEqual(1);
  })

  it('has a current score', function() {
    frame.enterTurn(2);
    expect(frame.viewScore()).toEqual(2);
  })

  it('can updates a score when turn is entered', function() {
    frame.enterTurn(1);
    frame.enterTurn(2);
    expect(frame.viewScore()).toEqual(3);
  })
})