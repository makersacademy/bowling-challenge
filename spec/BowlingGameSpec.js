"use strict";

describe("BowlingGame", function() {

let game

beforeEach(function() {
  game = new BowlingGame;

});

describe("Score function", function() {
  it('returns a frame score of zero', function(){
    game.bowl(0);
    game.bowl(0);
    expect(game.score()).toEqual(0);
  });
  it('returns a score of eight', function(){
    game.bowl(5);
    game.bowl(3);
    expect(game.score()).toEqual(8);
  });
  it('throws an error if user inputs a score over 10', function() {
    expect(game.bowl(11)).toEqual('Invalid score, please try again.');
  });
  it('stores a gutter game', function(){
    for (let i = 1; i <= 20; i++) {
      game.bowl(0);
    }
    expect(game.score()).toEqual(0);
  });
  it('stores a game of twos', function(){
    for (let i = 1; i <= 20; i++) {
      game.bowl(2);
    }
    expect(game.score()).toEqual(40);
  });
});

describe('a spare function', function() {
  it('scores a spare and adds a bonus to the next roll', function() {
    for (let i = 1; i <= 2; i++) {
      game.bowl(5);
    }
    game.bowl(4)
    game.bowl(0)
    expect(game.score()).toEqual(18);
  });
});

  describe('a strike function', function() {
    it('scores a strike and adds a bonus to the next two rolls', function() {
      game.bowl(10)
      game.bowl(0)
      game.bowl(4)
      game.bowl(2)
      expect(game.score()).toEqual(22);
    });
  });
})
