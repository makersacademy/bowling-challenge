'use strict';

describe('Features', function() {

  var game;

  beforeEach( function() {
    game = new Game();
  });

  // As a bowler,
  // so that I can record my score
  // I would like to input my score after each roll


  // As a bowler,
  // because there are no barriers,
  // I can play a gutter game
  it('Bowler can play a gutter game', function() {
    for(var i=0; i<10; i++) {
      game.roll(0);
      game.roll(0);
    }
    expect(game.frameHistory).toEqual([[0, 0], [0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],]);
    expect(game.totalScore).toEqual(0);
  });

  // As a bowler,
  // to demonstrate that I am a beast,
  // I can play a perfect game
  it('Bowler can play a perfect game', function() {
    for(var i=0; i<10; i++) {
      game.roll(10);
    }
    game.roll(10)
    game.roll(10)
    expect(game.frameHistory).toEqual([[10],[10],[10],[10],[10],[10],[10],[10],[10],[10, 10, 10]]);
    expect(game.totalScore).toEqual(300);
  });

  // As a bowler,
  // I can get spares for each frame
  it('Bowler can play a "spare game"', function() {
    for(var i=0; i<10; i++) {
      game.roll(5);
      game.roll(5);
    }
    game.roll(5)
    expect(game.frameHistory).toEqual([[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5,5]]);
    expect(game.totalScore).toEqual(150);
  });


});
