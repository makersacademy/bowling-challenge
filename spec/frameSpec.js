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

  it('can calculate score', function() {
    frame.enterTurn(1);
    frame.enterTurn(2);
    expect(frame.calculateScore()).toEqual(3);
  })
})