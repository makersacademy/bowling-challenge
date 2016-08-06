// var Frame = require('../src/Frame');

describe("Frame", function(){

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('sets default frameScore to 0', function(){
    expect(frame.frameScore).toEqual([]);
  });
  
  it('sets default knockedPins to 0', function(){
    expect(frame.knockedPins).toEqual(0);
  });



});
