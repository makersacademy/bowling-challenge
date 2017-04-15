describe('Frame', function() {

  var frame;
  beforeEach(function() {
    frame = new Frame()
  })

  it('is initiated with zero points', function() {
    expect(frame._rollOnePoints).toEqual(0)
    expect(frame._rollOnePoints).toEqual(0)
  });

  it('adds up points', function() {
    spyOn(frame, '_hit').and.returnValue(4)
    frame.roll()
    frame.roll()
    expect(frame.points()).toEqual(8)
  });

  it('is initiated with ten pins', function() {
    expect(frame._pins).toEqual(10)
  });

  it('rolling increases the points and decreases the pins', function() {
    spyOn(frame, '_hit').and.returnValue(4);
    frame.roll()
    expect(frame._rollOnePoints).toEqual(4)
    expect(frame._pins).toEqual(6)
    frame.roll()
    expect(frame._rollTwoPoints).toEqual(4)
    expect(frame._pins).toEqual(2)
  });

  it('keeps track of rolls', function() {
    frame.roll()
    expect(frame._rolls).toEqual(1)
  });

  it('recognises a strike, and that the strike ends the frame', function() {
    spyOn(frame, '_hit').and.returnValue(10)
    frame.roll()
    expect(frame.bonusFeature()).toEqual('strike')
    expect(frame.isFinished()).toBeTruthy()
  });

  it('recognises a spare', function() {
    spyOn(frame, '_hit').and.returnValue(5)
    frame.roll()
    frame.roll()
    expect(frame.bonusFeature()).toEqual('spare')
  });

  it('recognises when it is finished', function() {
    frame.roll()
    frame.roll()
    expect(frame.isFinished()).toBeTruthy()
  });

  it('can have bonus points added', function(){
    frame.addBonus(6)
    expect(frame.points()).toEqual(6)
  });

  it('calculates spare bonus', function() {
    spyOn(frame, '_hit').and.returnValue(7)
    frame.roll()
    frame.roll()
    expect(frame.spareBonus()).toEqual(7)
  });


});
