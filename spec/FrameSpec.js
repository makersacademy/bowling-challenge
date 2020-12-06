'use strict';

describe('Frame Rules', function () {
  var frame;

  beforeEach(function () {
    frame = new Frame();
  });

  it('each game has 10 frames', function() {
    expect(function(){frame.play(11,1,2)}).toThrowError("There aren't more than 10 frames");
    expect(frame.play(10,1,1)).toBe(true);
  });

  it('the game starts at the 1st frame', function() {
    expect(function(){ frame.play(0,1,2); }).toThrowError("There can't be less than 1 frame");
  });

});
