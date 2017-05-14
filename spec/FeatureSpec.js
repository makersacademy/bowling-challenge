describe('Features', function() {

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('Player can bowl a ball', function(){
    expect(bowling.bowl(5)).toEqual(5);
    expect(bowling.bowl(3)).toEqual(3);
    expect(bowling.getFrames()).toEqual([5, 3]);
    expect(bowling.getFrameCounter()).toEqual(1);
  });

});
