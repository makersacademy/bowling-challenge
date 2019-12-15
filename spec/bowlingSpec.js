'use strict';
describe('Game', function() {

    var game;

    beforeEach(function() {
      game = new Game
    });

    it('records number of pins knocked over', function() {
      expect(game.pinNumber(5)).toEqual(5)
    });

    it('records a roll number for a given frame, when pin numbers are passed in', function(){
      expect(game.rollNumber(2)).toEqual(1)
    });

    it('adds a new frame to the game', function() {
      expect(game.addFrame(4,1)).toEqual([4,1])
    });

});

describe('Scorings', function() {

  var game;

  beforeEach(function() {
    game = new Game
  });

  it('tests whether it was gutter game!', function(){
    for (var i = 0; i < 11; i++) {
      game.addFrame(0,0);
    }
    expect(game.gutter()).toEqual("It's a gutter game!")
  });

  it('sums scores of each frame to produce total score', function(){
    game.addFrame(3,1)
    game.addFrame(4,2)
    game.addFrame(7,2)
    game.addFrame(4,4)
    game.addFrame(1,6)
    game.addFrame(2,3)
    game.addFrame(1,1)
    game.addFrame(0,9)
    game.addFrame(8,0)
    game.addFrame(2,3)
    expect(game.totalScore()).toEqual(63)
  })

  it('adds bonuses for spares', function(){
    game.addFrame(4,6);
    game.addFrame(3,3);
    expect(game.totalScore()).toEqual(19)
  });

  it('adds bonuses for strikes', function() {
    game.addFrame(10,0);
    game.addFrame(4,4);
    expect(game.totalScore()).toEqual(26)
  });

});
