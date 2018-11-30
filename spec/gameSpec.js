var Game = require('../src/game.js');

describe("Game", function() {

    beforeEach(function() {
      game = new Game();
    });

    it("is an instance of Game", function() {
      expect(game).toEqual(jasmine.any(Game));
    });

    it("is can add a new Frame to its internal array of frames", function() {
    });

    xit("can return a represetative data structure with the current state of the game", function() {
    });

    xit("it can update frames with a frameUpdaterService", function() {
    });

    xit("it can return the current frame", function() {
    });

});

