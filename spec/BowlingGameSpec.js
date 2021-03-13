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
});


})
