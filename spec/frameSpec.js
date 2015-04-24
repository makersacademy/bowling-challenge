describe('Bowling Frames', function() {

  var frame
  beforeEach(function() {
    frame = new Frame;
  });
  
  it('the game is on the 1st frame when it starts', function() {
    expect(frame.frameNumber).toEqual(1)
  });

  it('the game is on the 2nd frame when the 1st frame is finished', function() {
    frame.
    expect(frame.frameNumber).toEqual(2)
  });

  it('there are 10 frames to play in total', function() {
    expect(frame.framesLeft).toEqual(9)
  });

  // it('the frame is over when the player has rolled twice', function() {
  //   bowling.roll(1)
  //   bowling.roll(1)
  //   expect(bowling.frameNumber).toEqual(3);
  // });

  // it('the game is on the 3rd frame after the first two frames', function() {
  //   bowling.roll(1)
  //   bowling.roll(1)
  //   expect(bowling.frameNumber).toEqual(3);
  // });


});
