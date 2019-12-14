var Bowling = require('../src/bowling.js');

describe("Bowling", function() {
  var game;

  beforeEach(function() {
    game = new Bowling();
  });

  
  it ("should have a total score of 0 upon initialization of the game", function() {
    expect(game.score()).toEqual(0)
  });

  it ("should have a total score of 7 when 7 pins are knocked down after the first roll", function() {
    game.roll(7)
    expect(game.score()).toEqual(7)
  });
  

  it ("should have a total of 9 after a ", function() {
    game.roll(7,2)
    expect(game.score()).toEqual(7)
  });

  it ("should be frame 2 after 2 balls rolled without strike", function() {
    game.roll(7,2)
    expect(game.frame).toEqual(2)
  });


});
