'use strict';

describe('scorecard', function(){
  var scorecard;
  var frame;
  var frameArray;

  class FakeFrame{

    constructor(){
      this.number;
      this.contents = [3,4];
    }

    rolls(){
      return 2;
    }

    recordRoll(pins){
      return 'Function called'
    }

    points(){
      return 7;
    }

  };

  beforeEach(function(){
    frame = new FakeFrame;
    scorecard = new Scorecard(FakeFrame);
    frameArray = [frame, frame, frame];
  });

  it('creates a frame object and pushes it to the frames array', function(){
    expect(scorecard.frames.length).toBe(1)
    expect(scorecard.getCurrentFrame()).toBeInstanceOf(FakeFrame)
  });

  it('passes #roll on to the Frame class, where it is stored', function(){
    scorecard.roll(2)
    scorecard.roll(2)
    scorecard.roll(2)
    expect(frame.recordRoll()).toEqual('Function called')
  })

  it('sums the scores of all frames and returns an integer', function(){
    expect(scorecard.calculateScore(frameArray)).toEqual(21)
  })


})
