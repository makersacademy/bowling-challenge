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

  it('tests whether it was gutter game!', function(){
    game = new Game
    for (var i = 0; i < 11; i++) {
      game.addFrame(0,0);
    }
    expect(game.gutter()).toEqual("It's a gutter game!")
  });

});
