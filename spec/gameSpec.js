'use strict';

describe ('game', function(){

  var game;
  var frame;
  beforeEach (function(){
    game = new Game;
    frame = jasmine.createSpy('frame');

  });

  it ('game set up correct', function(){
    expect(game._frames).toEqual([]);
    expect(game.scorecard).toEqual([]);
    expect(game.frameRunningTotals).toEqual([]);
    expect(game.runningTotal).toEqual(0);

  });

  describe ('.receiveFrame', function(){
    it ('receives a frame object and adds to .frames', function() {
      game.receiveFrame(frame)
      expect(game._frames).toEqual([frame])
    })
  })
});
