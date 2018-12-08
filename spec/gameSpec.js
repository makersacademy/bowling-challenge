var Game = require('../src/game.js');
var TenthFrame = require('../src/tenthFrame.js');
var Frame = require('../src/Frame.js');


describe("Game", function() {

    beforeEach(function() {
      game = new Game();
    });

    it("is an instance of Game", function() {
      expect(game).toEqual(jasmine.any(Game));
    });

    it("is initialised with ten empty frames", function() {
      expect(game.frames.length).toEqual(10);
    });

    it("its last frame should be of type 'tenthFrame'", function() {
      expect(game.frames.pop()).toEqual(jasmine.any(TenthFrame));
    });

    it("can return a given frame", function(){
      expect(game.getFrame(9)).toEqual(jasmine.any(TenthFrame));
    });

    it("Can set the first score of a given frame", function(){
      game.setFirstScore(2, 5);
      expect(game.getFrame(2).getFirstScore()).toEqual(5);
    });

    it("Can set the second score of a given frame", function(){
      game.setSecondScore(2, 5);
      expect(game.getFrame(2).getSecondScore()).toEqual(5);
    });

    it("Can set the bonus score of the tenth frame", function(){
      game.setFirstScore(9, 10);
      game.setSecondScore(9, 3);
      game.setBonusScore(5);
      expect(game.getFrame(9).getBonusScore()).toEqual(5);
    });

    it("can return a represetative data structure with the current state of the game", function() {
    });

    xit("it can update frames with a frameUpdaterService", function() {
    });

    xit("it can return the current frame", function() {
    });

});

