'use strict';

describe('Frame Rules', function () {
  var frame;

  beforeEach(function () {
    frame = new Frame();
  });

  it('each game has 10 frames', function() {
    expect(function(){frame.play(11,1,2); }).toThrowError("There aren't more than 10 frames");
    expect(frame.play(10,1,1)).toEqual(true);
  });

  it('the game starts at the 1st frame', function() {
    expect(function(){ frame.play(0,1,2); }).toThrowError("There can't be less than 1 frame");
  });

  it('until, the 9th frame (included), each frame allows a maximum of 2 rolls', function() {
    expect(function() { frame.play(1,3,4); }).toThrowError("You can only roll twice per frame");
    expect(frame.play(2,2,3)).toEqual(true);
  });

  it("can't have more than 10 knocked pins in a frame", function() {
    expect(function() { frame.play(1, 1, 11); }).toThrowError("You can't hit more than 10 pins per roll");
  });

  it("can't have more than 10 knocked pins in a frame", function() {
    frame.play(1,1,7);
    expect(function() { frame.play(1, 2, 4); }).toThrowError("You can't hit more than 10 pins per frame");
  });

  it('will allow 3 rolls at the 10th frame if first roll hits 10', function() {
    frame.play(10,1,10)
    frame.play(10,2,5)
    expect(frame.play(10,3,7)).toEqual(true)
  });

});
