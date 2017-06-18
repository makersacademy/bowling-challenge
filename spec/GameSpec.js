'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  var repeatedRolls = function(pins_knocked_down, up_to) {
    for (var single = 0; single < up_to; single++) { game.rolls(pins_knocked_down); };
  };

  it("returns a score of zero for a repeatedRolls game", function(){
    repeatedRolls(0,20);
    expect(game.score()).toEqual(0);
  });

  it("returns a score of 20 for a game where 1 is rolled each time", function(){
    repeatedRolls(1,20);
    expect(game.score()).toEqual(20);
  });

  it("adds a zero to the next roll if there is a strike", function(){
    game.rolls(10);
    game.rolls(5);
    expect(game.stored_pins).toEqual([10,0,5]);
  });

  it("returns true if the pin is a strike", function(){
    expect(game.isStrike(10)).toEqual(true);
  });

  it("returns the bonus points of a strike", function(){
    game.rolls(10);
    game.rolls(5);
    game.rolls(4);
    repeatedRolls(0, 16);
    expect(game.strikeBonus()).toEqual(9);
  });

  it("gives the score of the game including any bonus points from a strike", function(){
    game.rolls(10);
    game.rolls(5);
    game.rolls(4);
    repeatedRolls(1, 16);
    expect(game.score()).toEqual(44);
  });

  it("gives the spare points of a strike", function() {
    game.rolls(6);
    game.rolls(4);
    game.rolls(3);
    repeatedRolls(1, 16);
    expect(game.spareBonus()).toEqual(3);
  });

  it("gives the score of the game including any bonus points from a strike and a spare", function() {
    game.rolls(10);
    game.rolls(5);
    game.rolls(4);
    game.rolls(4);
    game.rolls(6);
    game.rolls(4);
    game.rolls(2);
    repeatedRolls(0, 12);
    expect(game.score()).toEqual(48);
  });

  xit("gives bonus points of 20 for two strikes", function() {
    game.rolls(10);
    game.rolls(10);
    game.rolls(5);
    game.rolls(1);
    expect(game.strikeBonus()).toEqual(21);
    // expect(game.score()).toEqual(300);
  });

  it("displays a congratulations message for a strike", function(){
    game.rolls(10);
    expect(game.strikeMessage()).toEqual("Congratulations you got a strike! Move on to the next frame");
  });

  it("allows a maximum of 21 rolls per game", function(){
    repeatedRolls(1, 21);
    expect(game.stored_pins.length).toEqual(21);
  });

  it("displays an end of game message once there have been 21 rolls", function(){
    repeatedRolls(1, 21);
    expect(game.endGameMessage()).toEqual("Congratulations you have finished the game!");
  });

});
