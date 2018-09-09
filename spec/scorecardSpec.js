'use strict'
// i know this is an absolute mess but plan to refactor later once i figure out how to correctly create spy objects
// spies - callThrough() or returnValues() ????????
describe('Scorecard behaviour', function() {
  var scorecard;
  var frame;


  beforeEach(function() {
    scorecard = new Scorecard();

    frame = jasmine.createSpyObj('frame', ['rollOne','rollTwo', 'frameScore']);

  });


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


// how am i going to test the frameTotal function here on the basis of unit testing with spies!!



  it('can use its own array sum method', function() {
    expect(scorecard.arraySum([2,3])).toEqual(5);
  });


});
