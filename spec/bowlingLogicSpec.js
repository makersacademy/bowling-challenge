describe('Bowling Game Score', function() {

  var bowling;

  beforeEach(function(){
      bowling = new BowlingScore();
  });

  it('can record a roll', function() {
    bowling.roll(3);
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
