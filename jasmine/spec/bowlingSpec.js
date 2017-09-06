describe('Bowling', function() {
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('total score should equal one when roll a one', function(){
    bowling.play(1);
    expect(bowling.runningTotal()).toEqual(1);
  });

  it('should be on frame 2 after 2 rolls', function(){
    bowling.play(1);
    bowling.play(1);
    expect(bowling.currentFrame()).toEqual(2);
  });

  it('spare bonus should work', function(){
    bowling.play(3);
    bowling.play(7);
    bowling.play(2);
    bowling.play(1);
    expect(bowling.runningTotal()).toEqual(15);
  });


});
