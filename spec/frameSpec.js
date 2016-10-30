'use strict';

describe('Frame', function() {
  var game
  var frame;

  beforeEach(function() {
    frame = new Frame(game);
    game = new Game
  });

  describe("A frame:", function(){
    it('only bowls once if you get a strike', function(){
      spyOn(Math, 'random').and.returnValue(1);
      frame.bowlFrame(game);
      expect(frame.score.length).toEqual(1);
    });
    it('bowls again if you do not get a strike', function(){
      spyOn(Math, 'random').and.returnValue(0.1);
      frame.bowlFrame(game);
      expect(frame.score.length).toEqual(2);
    });
    it('cannot have a frame totalling more than 10', function(){
      frame.bowlFrame(game);
      expect(frame.score[0]+frame.score[1]).toBeLessThan(11)
    });
    it('adds the frame to the game array upon completion', function(){
      spyOn(Math, 'random').and.returnValue(1);
      frame.bowlFrame(game);
      expect(game.game[game.game.length - 1]).toEqual([11])
    });
  });

  describe("Final frame bonus:", function(){
    beforeEach(function(){
      for (var i = 0; i < 9; i++) {
        frame.bowlFrame(game);
        frame.resetFrame();
        game.determineOutcomeofFrame();
        game.calculateBonuses();
      }
      });
    it('allows an extra bowl to calculate the bonus for the last frame if a spare is rolled', function() {
      spyOn(Math, 'random').and.returnValues(0.5, 0.9, 0.3);
      frame.bowlFrame(game);
      frame.resetFrame();
      game.determineOutcomeofFrame();
      game.calculateBonuses();
      console.log(game.bonuses)
      expect(game.bonuses[game.bonuses.length-1]).toEqual([3])
    });
    it('allows an extra 2 bowls to calculate the bonus for the last frame if a strike is rolled', function() {
      spyOn(Math, 'random').and.returnValues(1, 0.3, 0.3);
      frame.bowlFrame(game);
      frame.resetFrame();
      game.determineOutcomeofFrame();
      game.calculateBonuses();
      expect(game.bonuses[game.bonuses.length-1]).toEqual([3, 2])
    });
  });
});
