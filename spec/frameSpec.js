describe('Frame features', function() {

  var frame;

  beforeEach(function () {
    frame = new Frame();
  });

  it('Gives first result value', function (){
    spyOn(frame.rolls[0], 'randomNumberGenerator').and.returnValue(10)
    frame.roll(frame.rolls, 0)
    frame.calculateFrameScore(frame.rolls);
    expect(frame.score).toEqual([10,0]);
  })
  it('Can roll multiple balls ', function() {
    spyOn(frame.rolls[0], 'randomNumberGenerator').and.returnValue(0)
    spyOn(frame.rolls[1], 'randomNumberGenerator').and.returnValue(10)
    frame.roll(frame.rolls, 0)
    frame.roll(frame.rolls, 1)
    frame.calculateFrameScore(frame.rolls)
    expect(frame.score).toEqual([0,10])

  })
  it('checks if frame is a strike', function() {
    spyOn(frame.rolls[0], 'randomNumberGenerator').and.returnValue(10)
    spyOn(frame.rolls[1], 'randomNumberGenerator').and.returnValue(0)
    frame.roll(frame.rolls, 0)
    frame.roll(frame.rolls, 1)
    frame.calculateFrameScore(frame.rolls)
    expect(frame.strike()).toEqual(true)
  })

  it('checks if frame is a spare', function() {
    spyOn(frame.rolls[0], 'randomNumberGenerator').and.returnValue(10)
    spyOn(frame.rolls[1], 'randomNumberGenerator').and.returnValue(0)
    frame.roll(frame.rolls, 0)
    frame.roll(frame.rolls, 1)
    frame.calculateFrameScore(frame.rolls)
    expect(frame.spare()).toEqual(false)
  })

  it('checks if frame is a spare', function() {
    spyOn(frame.rolls[0], 'randomNumberGenerator').and.returnValue(5)
    spyOn(frame.rolls[1], 'randomNumberGenerator').and.returnValue(5)
    frame.roll(frame.rolls, 0)
    frame.roll(frame.rolls, 1)
    frame.calculateFrameScore(frame.rolls)
    expect(frame.spare()).toEqual(true)
  })

  it('can add extra rolls', function() {
      frame.addRoll()
      expect(frame.rolls.length).toEqual(3)
  })

})
