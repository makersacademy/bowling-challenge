'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  var gutter = function(pins_knocked_down, up_to) {
    for (var single = 0; single < up_to; single++) { game.rolls(pins_knocked_down); };
  };

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
    gutter(0, 18);
    game.strike();
    expect(game.strike()).toEqual(28);
  });

  it("")

});
