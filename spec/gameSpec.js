'use strict';

describe ('game', function(){

  var game;
  var newGame
  beforeEach (function(){
    game = new Game;
  });

  it ('game set up correct', function(){
    newGame = new Game
    expect(newGame.frames).toEqual([]);
    expect(newGame.scorecard).toEqual([]);
    expect(newGame.frame_running_totals).toEqual([]);
    expect(newGame.running_total).toEqual(0);

  })
})
