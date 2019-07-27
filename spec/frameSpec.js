'use strict';

describe ('Frame', function(){

  var frame;
  var game;
  var newFrame
  beforeEach (function(){
    frame = new Frame;
    game = jasmine.createSpy('game');
  });

  it('check set up at start', function() {
    newFrame = new Frame
    expect(newFrame.rolls).toEqual([]);
    expect(newFrame.score).toEqual(0);
    expect(newFrame.is_strike).toEqual(false);
    expect(newFrame.is_spare).toEqual(false);
    expect(newFrame.is_complete).toEqual(false);
  })
})
