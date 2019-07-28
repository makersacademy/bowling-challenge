'use strict';

describe ('game', function(){

  var game;
  var frame;
  beforeEach (function(){
    game = new Game;
    frame = jasmine.createSpy('frame');

  });

  xit ('game set up correct', function(){
    expect(game.frames).toEqual([]);
    expect(game.scorecard).toEqual([]);
    expect(game.frame_running_totals).toEqual([]);
    expect(game.running_total).toEqual(0);

  });

  describe ('.receive_frame', function(){
    it ('receives a frame object and adds to .frames', function() {
      game.receive_frame(frame)
      expect(game._frames).toEqual([frame])
    })
  })
});
