var Bowling = require('../js_files/bowling.js/index.js');

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

  it ("should add correct bonus to the score if getting the spare on the previous frame", function() {
    game.roll(7,3,5)
    expect(game.score()).toEqual(20)
  });

  it ("should move to second frame if a strike with first roll", function() {
    game.roll(10)
    expect(game.getFrame()).toEqual(2)
  });

  it ("should add correct extra points for the next 2 rolls if a strike in the previous frame", function() {
    game.roll(10, 7, 2)
    expect(game.score()).toEqual(28)
  });

  it ("should add correct extra points after 2 strikes in a row followed by a non-spare/strike", function() {
    game.roll(10, 10, 5, 2)
    expect(game.score()).toEqual(49)
  });

  it ("should give correct score for strike, strike, spare, 5, 2", function() {
    game.roll(10, 10, 5, 5, 5, 2)
    expect(game.score()).toEqual(67)
  });

  it ("should give correct score for full game without any strikes and the game to end", function() {
    game.roll( 7,2, 7,2, 7,2, 7,2, 7,2, 7,2, 7,2, 7,2, 7,2, 7,2 )
    expect(game.score()).toEqual(90)
    expect(game.isEndOfGame()).toEqual(true)
  });

  it ("should give correct score for full game without any strikes and the game to end", function() {
    expect(function() {game.roll( 7,2, 7,2, 7,2, 7,2, 7,2, 7,2, 7,2, 7,2, 7,2, 7,2, 2)}).toThrowError("Game has ended, cannot roll")
  });


});
