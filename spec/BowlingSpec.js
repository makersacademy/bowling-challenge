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
  

  it ("should have a total of 9 after 7 then 2 pins knocked down in first frame", function() {
    game.roll(7,2)
    expect(game.score()).toEqual(9)
  });

  it ("assuming no strike, should move to second frame after 2 balls rolled", function() {
    game.roll(7,2)
    expect(game.getFrame()).toEqual(2)
  });

  it ("should add a bonus to the score if getting the spare on the previous frame", function() {
    game.roll(7,3,5)
    expect(game.score()).toEqual(20)
  });

  it ("should move to second frame if a strike with first roll", function() {
    game.roll(10)
    expect(game.getFrame()).toEqual(2)
  });


});
