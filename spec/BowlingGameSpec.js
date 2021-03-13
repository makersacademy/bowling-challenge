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
});


})
