'use strict';

describe ('finalFrame', function() {

  var final_frame_score;

  beforeEach(function() {
    final_frame_score = new FinalFrame()
  });

  it('accepts three rolls where possible', function() {
    final_frame_score = new FinalFrame(10,10,10)
    expect(final_frame_score.getRawScore()).toEqual(30);
  });

  it('will provide the correct score on two rolls', function() {
    final_frame_score = new FinalFrame(2,6)
    expect(final_frame_score.getRawScore()).toEqual(8);
  });

 it('throws an error if we try and put a third roll \
 in when not entitled to', function() {
   expect(function(){final_frame_score = new FinalFrame(3,3,3);}).toThrow("No\
 third roll unless there is a strike or spare earlier in the frame");
 });
})
