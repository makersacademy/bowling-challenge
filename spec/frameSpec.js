'use strict';

describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('records a score for each ball thrown', function() {
    frame.score(4);
    frame.score(5);
    expect(frame.ball1).toEqual(4);
    expect(frame.ball2).toEqual(5);
  });

  it('stores both balls at the end of a frame', function() {
    frame.score(4);
    frame.score(5);
    expect(frame.frame).toEqual([4,5]);
  });

  it('ends the frame when a strike is made', function() {
    frame.score(10);
    expect(frame.frame).toEqual([10,0]);
  })

  it('records each frame', function() {
    frame.score(4);
    frame.score(5);
    expect(frame.game).toEqual([[4,5]])
  })

  it('records many frames', function() {
    frame.score(10);
    frame.score(10);
    frame.score(10);
    console.log(frame.game);
    expect(frame.game).toEqual([[10,0],[10,0],[10,0]])
    console.log(frame.ball1);
  })


});
