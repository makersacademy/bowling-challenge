'use strict';

describe('Game', function() {

  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  });

  describe("Frame outcome:", function(){
    it("adds 'strike' to the outcome array if a frame generates a strike", function() {
      spyOn(Math, 'random').and.returnValues(1);
      frame.bowlFrame(game)
      game.determineOutcomeofFrame();
      expect(game.spareOrStrike[(game.spareOrStrike.length) - 1]).toEqual("strike");
    });
    it("adds 'spare' to the outcome array if a frame generates a spare'", function() {
      spyOn(Math, 'random').and.returnValues(0.5, 0.9);
      frame.bowlFrame(game);
      game.determineOutcomeofFrame();
      expect(game.spareOrStrike[(game.spareOrStrike.length) - 1]).toEqual("spare");
    });
    it("adds 'neither' to the outcome array if neither a spare or strike is bowled", function(){
      spyOn(Math, 'random').and.returnValues(0.5, 0.5);
      frame.bowlFrame(game);
      game.determineOutcomeofFrame();
      expect(game.spareOrStrike[game.spareOrStrike.length - 1]).toEqual("neither");
    });
  });

  describe("Bonuses:", function(){
    it('adds a bonus of your next bowl when a spare is scored', function(){
      spyOn(Math, 'random').and.returnValues(0.5, 0.9, 0.5, 0.9);
      for (var i = 0; i < 2; i++) {
        frame.bowlFrame(game);
        frame.resetFrame();
        game.determineOutcomeofFrame();
        game.calculateBonuses();
      }
      expect(game.bonuses[game.bonuses.length-2]).toEqual([5])
    });
    it("adds both of the bowls scores from your next frame (if not a strike) as a bonus when a strike is scored", function(){
      spyOn(Math, 'random').and.returnValues(1, 0.3, 0.2);
      for (var i = 0; i < 2; i++) {
        frame.bowlFrame(game);
        frame.resetFrame();
        game.determineOutcomeofFrame();
        game.calculateBonuses();
      }
      expect(game.bonuses[game.bonuses.length-2]).toEqual([3, 1])
    });
    it("adds bonuses from separate frames if two strikes are scored in a row", function(){
      spyOn(Math, 'random').and.returnValues(1, 1, 1);
      for (var i = 0; i < 3; i++) {
        frame.bowlFrame(game);
        frame.resetFrame();
        game.determineOutcomeofFrame();
        game.calculateBonuses();
      }
      expect(game.bonuses[game.bonuses.length-3]).toEqual([11, 11])
    });
  });

  describe("Totalling:", function(){
    it("calculates the total score of multiple frame", function(){
      spyOn(Math, 'random').and.returnValues(0.5, 0.5, 0.5, 0.5);
      for (var i = 0; i < 2; i++) {
        frame.bowlFrame(game);
        frame.resetFrame();
        game.determineOutcomeofFrame();
      }
      game.calculateTotal();
      expect(game.runningTotal).toEqual(16)
    });
    it("includes spare bonus scores in the total", function(){
      spyOn(Math, 'random').and.returnValues(0.5, 0.9, 0.5, 0.5);
      for (var i = 0; i < 2; i++) {
        frame.bowlFrame(game);
        frame.resetFrame();
        game.determineOutcomeofFrame();
        game.calculateBonuses();
      }
      game.calculateTotal();
      expect(game.runningTotal).toEqual(23)
    });

    it("includes strike bonus scores in the total", function(){
      spyOn(Math, 'random').and.returnValues(1, 0.5, 0.5);
      for (var i = 0; i < 2; i++) {
        frame.bowlFrame(game);
        frame.resetFrame();
        game.determineOutcomeofFrame();
        game.calculateBonuses();
      }
      game.calculateTotal();
      expect(game.runningTotal).toEqual(27)
    });
  });

  describe("Perfect game", function(){
    it("allows an extra bowl to calculate the bonus for the last frame if a spare is rolled", function() {
      spyOn(Math, 'random').and.returnValues(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      frame.bowlFrame(game);
      frame.resetFrame();
      game.determineOutcomeofFrame();
      game.calculateBonuses();
      frame.bowlFrame(game);
      frame.resetFrame();
      game.determineOutcomeofFrame();
      game.calculateBonuses();
      frame.bowlFrame(game);
      frame.resetFrame();
      game.determineOutcomeofFrame();
      game.calculateBonuses();
      frame.bowlFrame(game);
      frame.resetFrame();
      game.determineOutcomeofFrame();
      game.calculateBonuses();
      frame.bowlFrame(game);
      frame.resetFrame();
      game.determineOutcomeofFrame();
      game.calculateBonuses();
      frame.bowlFrame(game);
      frame.resetFrame();
      game.determineOutcomeofFrame();
      game.calculateBonuses();
      frame.bowlFrame(game);
      frame.resetFrame();
      game.determineOutcomeofFrame();
      game.calculateBonuses();
      frame.bowlFrame(game);
      frame.resetFrame();
      game.determineOutcomeofFrame();
      game.calculateBonuses();
      frame.bowlFrame(game);
      frame.resetFrame();
      game.determineOutcomeofFrame();
      game.calculateBonuses();
      frame.bowlFrame(game);
      frame.resetFrame();
      game.determineOutcomeofFrame();
      game.calculateBonuses();
      game.calculateTotal();
      expect(game.runningTotal).toEqual(330);
    });
  });

});
