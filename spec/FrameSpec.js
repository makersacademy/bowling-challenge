// var Frame = require('../src/Frame');
describe('Frame', function(){
  var frame;
  beforeEach(function(){
    frame = new Frame();
  });

  // it('sets default firstBall to 0', function(){
  //   expect(frame.firstBall).toEqual(0);
  // });
  //
  // it('sets default knockedPins to 0', function(){
  //   expect(frame.knockedPins).toEqual(0);
  // });
  //
  // it('sets default secondBall to 0', function(){
  //   expect(frame.secondBall).toEqual(0);
  // });

  it('sets default frameScore to an empty array', function(){
    expect(frame.frameScore).toEqual([]);
  });

  it('firstBowl returns random value between 0 and 10', function(){
    frame.firstBowl();
    expect(frame.frameScore[0] >= 1 && frame.frameScore[0] <= 10).toBeTruthy();
  });

  it('secondBowl returns a random value between 0 and knocked pins', function(){
    spyOn(frame, 'firstBall').and.returnValue(5);
    frame.firstBowl();
    // frame.firstBall();
    frame.secondBowl();
    expect(frame.frameScore[1] >= 1 && frame.frameScore[1] <= 5).toBeTruthy();
  });

});
