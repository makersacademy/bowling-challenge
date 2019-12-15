var Bowling = require('../src/bowling.js');

describe("Bowling", function() {
  var game;

  beforeEach(function() {
    game = new Bowling();
  });
  
  it ("should have a total score of 0 upon initialization of the game", function() {
    expect(game.totalScore()).toEqual(0)
  });

  xit ("should have a total score of 7 in the first frame after a first roll of 7 pins", function() {
    expect(game.totalScore()).toEqual(0)
  });

});
