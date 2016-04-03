/*frame

if regular rolls, adds both to score

if either first or second index 10, then its a strike

if addition of indicies = 10, it's a spare.

if regular rolls, tally score.

if strike, add next frame--if next frame strike, add third frame to sum of first two

if spare, add first roll of next frame

ONE FRAME IS TWO ROLLS

FRAME STORES ROLLS, GAME CALCULATES SCORE.
HOW TO CALCULATE NEXT ARRAYS IF strike

IN GAME, IF STRIKE HOLD SCORE, ROLL 2ND FRAME-
IF NEXT FRAME STRIKE, HOLD SCORE ROLL 3RD FRAME,
 3RD STRIKE, ADD ALL TOGETHER,
ELSE ADD FIRST TWO FRAMES PLUS SCORE OF THIRD TO FIRST FRAME SCORE.

JUST ADD ALL THREE TOGETHER, BY HOLDING SCORE IF FIRST TWO FRAMES ARE STRIKES
*/
describe('Frame', function() {
  var frame;
  var pins;
  var strike;

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
    frame.roll(pins)
    frame.roll(pins)
    frame.closeFrame()
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

  xit('calculates frame score', function() {
    frame.play(pins)
    frame.play(pins)
    expect(frame._frameScore).toEqual(pins + pins)
  })
})
