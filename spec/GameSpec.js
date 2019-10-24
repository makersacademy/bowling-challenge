'use strict';

describe('Game', function() {

  let game;
  let frame;

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  })

  describe('a gutter game', function() {
    it('shows a total score of 0', function(){
      let frames = [];
      for (var i = 0; i < 10; i++) { 
        frames[i] = new Frame(); 
        frames[i].knockedDownPins(0)
        frames[i].knockedDownPins(0)
      }
      for (var i = 0; i < 10; i++){
        game.addFrame(frames[i])
      }
      expect(game.getTotalScore()).toEqual(0);
    } )
  })

  describe('total score', function(){
    it('adds the total score for a game when there are no strikes or spares (ie. no bonuses)', function(){
      let frames = [];
      for (var i = 0; i < 10; i++) { 
        frames[i] = new Frame(); 
        frames[i].knockedDownPins(3)
        frames[i].knockedDownPins(5)
      }
      for (var i = 0; i < 10; i++){
        game.addFrame(frames[i])
      }
      expect(game.getTotalScore()).toEqual(80);
    })
  })

  describe('a perfect game', function(){
    it('shows a total score of 300 for a perfect game', function(){
      let frames = [];
      for (var i = 0; i < 10; i++) { 
        frames[i] = new Frame(); 
        frames[i].knockedDownPins(10)
        frames[i].knockedDownPins(0)
      }
      for (var i = 0; i < 10; i++){
        game.addFrame(frames[i])
      }
      game.finalFrameBonusRoll(10)
      game.lastBonus(10)
      expect(game.getTotalScore()).toEqual(300);
    })
  })

})