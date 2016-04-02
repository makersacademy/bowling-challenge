describe('Frame', function() {
  var frame;
  var pins;
  var spare;

  beforeEach(function() {
    frame = new Frame;
    pins  = 3
    spare = 7
  })

  it('adds first roll', function() {
    frame.roll(pins)
    expect(frame._rolls).toEqual([pins])
  })

  it('adds second roll', function() {
    frame.roll(pins)
    frame.roll(pins)
    expect(frame._rolls).toEqual([pins, pins])
  })

  it('returns score for full frame(2 rolls)', function(){
    frame.roll(pins)
    frame.roll(pins)
    expect(frame.isFull()).toEqual(pins + pins)
  })

  xit('calculates a spare', function(){
    frame.roll(pins)
    frame.roll(spare)
    expect(frame.isSpare()).toEqual(true)
  })
})
