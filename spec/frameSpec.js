describe('Frame', function() {
  var frame, pins, strike;

  beforeEach(function() {
    frame  = new Frame()
    pins   = 3
    spare  = 7
    strike = 10
  })

  it('begins with an empty scoreboard', function(){
    expect(frame._scoreboard).toEqual([])
  })

  it('adds pins to scoreboard', function(){
    frame.roll(pins)
    expect(frame._scoreboard).toEqual([pins])
  })

  it('adds two rolls', function(){
    frame.roll(pins)
    frame.roll(pins)
    expect(frame._scoreboard).toEqual([pins, pins])
  })

  it('has max of 2 rolls', function(){
    frame.roll(pins)
    frame.roll(pins)
    expect(function() { frame.roll(pins) }).toThrowError('Two rolls per frame!')
  })

  it('declares finished frame', function(){
    frame.play(pins)
    frame.play(pins)
    expect(frame._isFinished).toEqual(true)
  })

  it('declares frame as strike', function(){
    frame.play(strike)
    expect(frame._isStrike).toEqual(true)
  })

  it('declares frame as spare', function(){
    frame.play(pins)
    frame.play(spare)
    expect(frame._isSpare).toEqual(true)
  })

  it('calculates frame score', function() {
    frame.play(pins)
    frame.play(pins)
    expect(frame._score).toEqual(pins + pins)
  })
})
