'use strict';

describe('Frame', function() {
  let frame

  beforeEach(function() {
    frame = new Frame();
  });

  it('takes two rolls and adds them to a score array', function(){
    frame.firstRoll(5)
    frame.secondRoll(2)
    expect(frame.score).toEqual([5, 2]);
  });

  it('can show a score total', function(){
    frame.firstRoll(5)
    frame.secondRoll(2)
    expect(frame.totalScore()).toEqual(7);
  });
});