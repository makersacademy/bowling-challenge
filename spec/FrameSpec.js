describe('Frame', function() {

  var frame;
  beforeEach(function() {
    frame = new Frame()
  })

  it('is initiated with zero points', function() {
    expect(frame._points).toEqual(0)
  });

  it('is initiated with ten pins', function() {
    expect(frame._pins).toEqual(10)
  });

  it('rolling increases the points and decreases the pins', function() {
    spyOn(frame, '_hit').and.returnValue(4);
    frame.roll()
    expect(frame._points).toEqual(4)
    expect(frame._pins).toEqual(6)
  });

  it('keeps track of rolls', function() {
    frame.roll()
    expect(frame._rolls).toEqual(1)
  });

  it('recognises a strike, and that the strike ends the frame', function() {
    spyOn(frame, '_hit').and.returnValue(10)
    frame.roll()
    expect(frame.isStrike()).toBeTruthy()
    expect(frame.isFinished()).toBeTruthy()
  });

  it('recognises a spare', function() {
    spyOn(frame, '_hit').and.returnValue(5)
    frame.roll()
    frame.roll()
    expect(frame.isSpare()).toBeTruthy()
  });

  it('recognises when it is finished', function() {
    frame.roll()
    frame.roll()
    expect(frame.isFinished()).toBeTruthy()
  });


});
