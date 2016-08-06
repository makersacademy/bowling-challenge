// var Frame = require('../src/Frame');

describe("Frame", function(){

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('sets default firstBall to 0', function(){
    expect(frame.firstBall).toEqual(0);
  });

  it('sets default knockedPins to 0', function(){
    expect(frame.knockedPins).toEqual(0);
  });

  it('sets default secondBall to 0', function(){
    expect(frame.secondBall).toEqual(0);
  });

  it('sets default frameScore to 0', function(){
    expect(frame.frameScore).toEqual([]);
  });

  it('firstBowl returns random value between 1 and 10', function(){
    frame.firstBowl();
    expect(frame.firstBall >= 1 && frame.firstBall <= 10).toBeTruthy();
  });

});
