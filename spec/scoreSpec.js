'use strict';

describe('Score', function() {
  var score;
  var frame;

  beforeEach(function() {
    score = new Score();
    // frame = jasmine.createSpyObj('frame', ['bowl']);
    // frame.bowls.andReturn([1,2]);
  });

  it('starts at frame 0', function() {
    frame = new Frame
    frame.bowl(1)
    frame.bowl(2)
    // console.log(frame.bowls)
    expect(score.calculateFrameScore(frame)).toEqual(3);
  });
});
