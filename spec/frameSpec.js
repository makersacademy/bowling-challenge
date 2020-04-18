describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
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

  it('knows if frame is complete', function() {
    frame.enterTurn(1);
    frame.enterTurn(2);
    expect(frame.complete()).toEqual(true);
  })

  it('a strike completes a frame', function() {
    frame.enterTurn(10);
    expect(frame.complete()).toEqual(true);
  })
  
})