'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("A frame:", function(){
    it('only bowls once if you get a strike', function(){
      spyOn(Math, 'random').and.returnValue(1);
      game.bowlFrame();
      expect(game.currentFrame.length).toEqual(1);
    });
    it('bowls again if you do not get a strike', function(){
      spyOn(Math, 'random').and.returnValue(0.1);
      game.bowlFrame();
      expect(game.currentFrame.length).toEqual(2);
    });
    it('cannot have a frame totalling more than 10', function(){
      game.bowlFrame();
      expect(game.currentFrame[0]+game.currentFrame[1]).toBeLessThan(11)
    });
    it('adds the frame to the game array upon completion', function(){
      game.bowlFrame();
      expect(game.game.length).toEqual(1)
    });
  });

  describe("Frame outcome:", function(){
    it("adds 'strike' to the outcome array if a frame generates at strike", function() {
      spyOn(Math, 'random').and.returnValue(1);
      game.bowlFrame();
      game.determineOutcomeofFrame();
      expect(game.spareOrStrike[(game.spareOrStrike.length) - 1]).toEqual("strike");
    });
    it("adds 'spare' to the outcome array if a frame generates a spare'", function() {
      spyOn(Math, 'random').and.returnValues(0.5, 0.9);
      game.bowlFrame();
      game.determineOutcomeofFrame();
      expect(game.spareOrStrike[(game.spareOrStrike.length) - 1]).toEqual("spare");
    });
    it("adds 'neither' to the outcome array if neither a spare or strike is bowled", function(){
      spyOn(Math, 'random').and.returnValues(0.5, 0.5);
      game.bowlFrame();
      game.determineOutcomeofFrame();
      expect(game.spareOrStrike[game.spareOrStrike.length - 1]).toEqual('neither');
    });
  });

  describe("Bowling a frame:", function(){
    it('generates a random number', function(){
      spyOn(Math, 'random').and.returnValue(0.9);
      expect(game.bowl()).toEqual(9);
    });
  });

  describe("Bonuses:", function(){
    it('adds a bonus of your next bowl when a spare is scored', function(){
      spyOn(Math, 'random').and.returnValues(0.5, 0.9, 0.5, 0.9);
      for (var i = 0; i < 2; i++) {
        game.bowlFrame();
        game.determineOutcomeofFrame();
        game.calculateBonuses();
      }
      expect(game.bonuses[game.bonuses.length-2]).toEqual([5])
    });
    it('adds both of the bowls scores from your next frame (if not a strike) as a bonus when a strike is scored', function(){
      spyOn(Math, 'random').and.returnValues(1, 0.3, 0.2);
      for (var i = 0; i < 2; i++) {
        game.bowlFrame();
        game.determineOutcomeofFrame();
        game.calculateBonuses();
      }
      expect(game.bonuses[game.bonuses.length-2]).toEqual([3, 1])
    });
    it('adds bonuses from separate frames if two strikes are scored in a row', function(){
      spyOn(Math, 'random').and.returnValues(1, 1, 1);
      for (var i = 0; i < 3; i++) {
        game.bowlFrame();
        game.determineOutcomeofFrame();
        game.calculateBonuses();
      }
      expect(game.bonuses[game.bonuses.length-3]).toEqual([11, 11])
    });
  });

  describe("Final frame bonus:", function(){
    beforeEach(function(){
      for (var i = 0; i < 9; i++) {
        game.bowlFrame();
        game.determineOutcomeofFrame();
        game.calculateBonuses();
      }
      });
    it('allows an extra bowl to calculate the bonus for the last frame if a spare is rolled', function() {
      spyOn(Math, 'random').and.returnValues(0.5, 0.9, 0.3);
      game.bowlFrame();
      game.determineOutcomeofFrame();
      game.calculateBonuses();
      expect(game.bonuses[game.bonuses.length-1]).toEqual([3])
    });
    it('allows an extra 2 bowls to calculate the bonus for the last frame if a strike is rolled', function() {
      spyOn(Math, 'random').and.returnValues(1, 0.3, 0.3);
      game.bowlFrame();
      game.determineOutcomeofFrame();
      game.calculateBonuses();
      expect(game.bonuses[game.bonuses.length-1]).toEqual([3, 2])
    });
  });

  describe("Totalling:", function(){
    it("calculates the total score of multiple frame", function(){
      spyOn(Math, 'random').and.returnValues(0.5, 0.5, 0.5, 0.5);
      for (var i = 0; i < 2; i++) {
        game.bowlFrame();
        game.determineOutcomeofFrame();
      }
      game.calculateTotal();
      expect(game.runningTotal).toEqual(16)
    });
    it("includes spare bonus scores in the total", function(){
      spyOn(Math, 'random').and.returnValues(0.5, 0.9, 0.5, 0.5);
      for (var i = 0; i < 2; i++) {
        game.bowlFrame();
        game.determineOutcomeofFrame();
        game.calculateBonuses();
      }
      game.calculateTotal();
      expect(game.runningTotal).toEqual(23)
    });

    it("includes strike bonus scores in the total", function(){
      spyOn(Math, 'random').and.returnValues(1, 0.5, 0.5);
      for (var i = 0; i < 2; i++) {
        game.bowlFrame();
        game.determineOutcomeofFrame();
        game.calculateBonuses();
      }
      game.calculateTotal();
      expect(game.runningTotal).toEqual(27)
    });

    // it("calculates the score for a full game", function(){
    //   spyOn(Math, 'random').and.returnValues(0.5, 0.9)
    //   for (var i = 0; i < 10; i++) {
    //     game.bowlFrame();
    //     game.determineOutcomeofFrame();
    //     game.calculateBonuses();
    //   }
    //   console.log(game.game)
    //   console.log(game.bonuses)
    //   expect(game.runningTotal).toEqual(98)
    // });

  });

});
