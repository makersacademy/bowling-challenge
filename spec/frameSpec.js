/*frame

if regular rolls, adds whole array

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

  beforeEach(function() {
    frame = new Frame()
    pins  = 3
  })

  it('begins with an empty scoreboard', function(){
    expect(frame._score).toEqual(0)
  })

  it('adds pins to scoreboard', function(){
    frame.roll(pins)
    expect(frame._score).toEqual(pins)
  })

  it('adds two rolls', function(){
    frame.roll(pins)
    frame.roll(pins)
    expect(frame._score).toEqual(pins + pins)
  })

  it('Does not allow 3 rolls', function(){
    frame.roll(pins)
    frame.roll(pins)
    expect(function() { frame.roll(pins) }).toThrowError('Two rolls per frame!')
  })
})
