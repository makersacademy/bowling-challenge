describe ('Bowling', function () {
  var bowling;
  beforeEach(function(){
    bowling = new Bowling();
  });

  it('totals a frame score', function() {
    bowling.bowl(6)
    bowling.bowl(3)
    expect(bowling.getFrameScore()).toEqual(9);
  });

  it('does not allow a frame score above 10', function() {
    bowling.bowl(6)
    expect(function() {bowling.bowl(7)}).toThrow(new Error("A score above 10 in a frame is not possible"));
  });

  it('collects a total score of 2 frames', function() {
    bowling.bowl(6)
    bowling.bowl(3)
    bowling.bowl(6)
    bowling.bowl(3)
    expect(bowling.getTotalScore()).toEqual(18);
  });

  it('keeps track of number of frames', function() {
    bowling.bowl(6)
    bowling.bowl(3)
    bowling.bowl(6)
    bowling.bowl(3)
    expect(bowling.getTotalFrames()).toEqual(2);
  });
});
