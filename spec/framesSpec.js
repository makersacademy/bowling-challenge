describe('Frame Score', function() {

  var frame;

  beforeEach(function(){
      frame = new Frame();
  });

  it('can record a roll', function() {
    frame.roll(3);
    expect(bowling.rolls).toEqual([3]);
  });

  // it('returns total of two rolls', function() {
  //   bowling.roll(3);
  //   bowling.roll(6);
  //   bowling.score();
  //   expect(bowling.runningTotal).toEqual(9);
  // })

  it('adds total of two rolls per frame', function(){
    bowling.roll(3);
    bowling.roll(6);
    bowling.framescore();
    expect(bowling.frames.f1).toEqual(9);
  })

});
