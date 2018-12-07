var Game = require('../src/game.js');
var TenthFrame = require('../src/tenthFrame.js');

describe("Game", function() {

    beforeEach(function() {
      game = new Game();
    });

    it("is an instance of Game", function() {
      expect(game).toEqual(jasmine.any(Game));
    });

    it("is initialised with ten empty frames", function() {
      console.log(game.frames);
      expect(game.frames.length).toEqual(10);
    });

    it("its last frame should be of type 'tenthFrame'", function() {
      expect(game.frames.pop()).toEqual(jasmine.any(TenthFrame));
    });

    xit("can return a represetative data structure with the current state of the game", function() {
    });

    xit("it can update frames with a frameUpdaterService", function() {
    });

    xit("it can return the current frame", function() {
    });

});

