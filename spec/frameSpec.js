describe('Frame', function() {
  var frame;
  var pins;

  beforeEach(function() {
    frame = new Frame;
    pins  = 5
  })

  it('adds first roll', function() {
    frame.roll(pins)
    expect(frame._frame).toEqual([pins])
  })

  it('adds second roll', function() {
    frame.roll(pins)
    frame.roll(pins)
    expect(frame._frame).toEqual([pins, pins])
  })
})
