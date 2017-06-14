'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  var gutter = function(pins_knocked_down, up_to) {
    for (var single = 0; single < up_to; single++) { game.rolls(pins_knocked_down); };
  };

  // TODO separate out the tests using the functions as titles

  it("returns a score of zero for a gutter game", function(){
    gutter(0,20);
    expect(game.score()).toEqual(0);
  });

  it("returns a score of 20 for a game where 1 is rolled each time", function(){
    gutter(1,20);
    expect(game.score()).toEqual(20);
  });

  it("can score a strike and get a bonus point on the third frame", function(){
    game.rolls(10);
    game.rolls(5);
    game.rolls(4);
    gutter(0, 16);
    game.strike();
    expect(game.strike()).toEqual(28);
  });

  it("adds a zero to the next roll if there is a strike", function(){
    game.rolls(10);
    game.rolls(5);
    expect(game.stored_pins).toEqual([10,0,5]);
  });

  it("displays a congratulations message for a strike", function(){
    game.rolls(10);
    expect(game.strikeMessage()).toEqual("Congratulations you got a strike! Move on to the next frame");
  });

  it("allows a maximum of 21 rolls per game", function(){
    gutter(1, 21);
    expect(game.stored_pins.length).toEqual(21);
  });

  it("displays an end of game message once there have been 21 rolls", function(){
    gutter(1, 21);
    expect(game.endGameMessage()).toEqual("Congratulations you have finished the game!");
  });

});
