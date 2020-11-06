'use strict';

describe('scorecard', function(){
  var scorecard;
  var frame;
  var strike;
  var spare;

  class FakeFrame{

    constructor(){
      this.number;
    }

    recordRoll(pins){
      return 'Function called'
    }

  };

  beforeEach(function(){
    frame = new FakeFrame;
    scorecard = new Scorecard(FakeFrame);
  });

  it('creates a frame object and pushes it to the frames array', function(){
    expect(scorecard.frames.length).toBe(1)
  });

  it('passes #roll on to the Frame class, where it is stored', function(){
    scorecard.roll(frame, 2)
    expect(frame.recordRoll()).toEqual('Function called')
  })



})
