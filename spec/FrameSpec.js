'use strict';
describe ("Frame.", function() {
  var frame;

  beforeEach(function() {
  frame = new Frame();
});
// As a player
// To see the correct score in the case of strike (10 pins with a first roll)
// The frame ends immediately

  it('in the case of strike - frame ends immediately and second roll is denied', function(){
    spyOn(Math,'random').and.returnValue(10);
    frame.rollBallOne();
    expect(function(){frame.rollBallTwo();}).toThrowError('You had a strike - no pins left to knock');

  });

//As a player
// To see the correct score of my frame
// Total score of the frame should be a sum of knocked pins from both rolls

  it('Total score of the frame changes by the number of pins knocked', function(){
    expect(frame._score).toBeLessThan(11);
  });
});
