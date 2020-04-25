'use strict';

describe('Feature Test:', function() {
  var game;
  var frame;

  beforeEach(function(){
    game = new Game;
    frame = new Frame;
  })

  describe('Player rolls less than 10 in a frame', function() {

    it('A game starts with a new frame', function() {
      expect(game._currentFrame()).toEqual(frame);
    })
  
    it('When a game rolls a ball, frame score is updated', function() {
      game.bowlBall(4);
      expect(game.getFrameScore()).toEqual(4);
    })
  
    it('When a frame is complete, a new frame is created', function() {
      game.bowlBall(4);
      game.bowlBall(5);
      expect(game.getFrameCount()).toEqual(2);
    })
  
    it('The game score is a total of all frame scores', function() {
      game.bowlBall(4);
      game.bowlBall(5);
      game.bowlBall(2);
      game.bowlBall(6);
      expect(game.getScore()).toEqual(17);
    })

  })

  describe('Player rolls a strike', function() {
    it('a new frame is started and a bonus score is added', function() {
      game.bowlBall(10);
      game.bowlBall(5);
      game.bowlBall(2);
      expect(game.getTotalScore()).toEqual(24);
      expect(game.getScore()).toEqual(17);
      expect(game.getBonusScore()).toEqual(7);
      expect(game.getFrameCount()).toEqual(3);
    })
  })

  describe('Player rolls a spare', function() {
    it('a new frame is started and a bonus score is added', function() {
      game.bowlBall(6);
      game.bowlBall(4);
      game.bowlBall(2);
      game.bowlBall(5);
      expect(game.getTotalScore()).toEqual(19);
      expect(game.getScore()).toEqual(17);
      expect(game.getBonusScore()).toEqual(2);
      expect(game.getFrameCount()).toEqual(3);
    })
  })
  

  describe('Player completes game', function() {
    it('after 10 rounds a game is complete', function() {
      game.bowlBall(1);
      game.bowlBall(5);
      game.bowlBall(2);
      game.bowlBall(3);
      game.bowlBall(3);
      game.bowlBall(4);
      game.bowlBall(4);
      game.bowlBall(3);
      game.bowlBall(5);
      game.bowlBall(2);
      game.bowlBall(6);
      game.bowlBall(1);
      game.bowlBall(7);
      game.bowlBall(0);
      game.bowlBall(8);
      game.bowlBall(0);
      game.bowlBall(9);
      game.bowlBall(0);
      game.bowlBall(1);
      game.bowlBall(0);
      expect(game.getTotalScore()).toEqual(64);
      expect(game.complete()).toEqual(true);
    })
  })
  

})