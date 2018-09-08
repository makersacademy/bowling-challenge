'use strict'

describe('Scorecard', function() {
  var scorecard;
  var frame;


  beforeEach(function() {
    scorecard = new Scorecard();
    frame = jasmine.createSpyObj('frame', ['rollOne','rollTwo']);
  });


  // instantiate with empty array
  it('instantiates with empty array', function() {
    expect(scorecard.getFrames()).toEqual([]);
  });


  it('can add frames to the scorecard', function() {
    scorecard.addFrame(frame);
    expect(scorecard.getFrames().length).toEqual(1);
    expect(scorecard.getFrames()).toContain(frame);
    expect(scorecard.getFrames()[0]).toEqual(frame);
  });

  it('can build an array of the frame scores', function() {
    expect(scorecard.getScores()).toEqual([]);
  });


});
