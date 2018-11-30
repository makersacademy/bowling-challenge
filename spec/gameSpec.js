var Game = require('../src/game.js');

describe("Game", function() {

  beforeEach(function() {
    game = new Game();
  });

  it("is an instance of Game", function() {
    expect(game).toEqual(jasmine.any(Game));
  });

});

