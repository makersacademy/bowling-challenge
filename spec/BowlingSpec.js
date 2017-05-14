describe('Bowling', function() {

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('has an array storing results, empty by default', function() {
    expect(bowling.getFrames()).toEqual([]);
  });

  it('has a frame counter, 1 by default', function() {
    expect(bowling.getFrameCounter()).toEqual(1);
  });

});
