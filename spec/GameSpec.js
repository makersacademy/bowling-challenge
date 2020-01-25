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

  describe('a typical game', function(){
    it('shows a total score of', function(){
      let frames = [];
      for (var i = 0; i < 8; i++) { 
        frames[i] = new Frame(); 
        frames[i].knockedDownPins(5)
        frames[i].knockedDownPins(0)
      }

      let frame8 = new Frame(); 
      frame8.knockedDownPins(7)
      frame8.knockedDownPins(1)
      frames.push(frame8)
      let frame9 = new Frame(); 
      frame9.knockedDownPins(3)
      frame9.knockedDownPins(7)
      frames.push(frame9)

      console.log(frames)

      for (var i = 0; i < 10; i++){
        game.addFrame(frames[i])
      }
      game.finalFrameBonusRoll(3)
      // game.lastBonus(7)
      expect(game.getTotalScore()).toEqual(61);
    })
  })
})