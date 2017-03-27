'use strict';

describe('Game', function() {
  var game;
  var player;

  beforeEach(function() {
    player = new Player("Bob");
    game = new Game(player);
  });

  describe('~constructor', function() {

    it('has a #player', function(){
      expect(game.player).toBeDefined();
    });

    it('has an empty array of #frames', function(){
      expect(game.frames).toEqual([]);
      expect(game.frames.length).toEqual(0);
    });

  });

  describe('.newFrame',function(){

    it('starts a new frame', function(){
      game._getNewFrame();
      game._getNewFrame();
      expect(game.frames.length).toEqual(2);
    });

  });

  describe('.bowl',function(){

    it('responds', function (){
      spyOn(game,'bowl');
      game.bowl();
      expect(game.bowl).toHaveBeenCalled();
    });

    it('calls ._checkFrame', function (){
      spyOn(game,'_checkFrame');
      game.bowl();
      expect(game._checkFrame).toHaveBeenCalled();
    });

    it('calls .throwBall on player', function (){
      spyOn(player,'throwBall');
      game.bowl();
      expect(player.throwBall).toHaveBeenCalled();
    });

    it('raises an error if the game is over', function(){
      var balls = [10,10,10,10,10,10,10,10,10,10,10,10];
      var spy = spyOn(Math, 'random')
      for(var i = 0; i <= balls.length ; i++){
        var currentBall = balls[i];
        spy.and.returnValue(currentBall / 10);
        game.bowl();
      }
      expect(function(){game.bowl()}).toThrow("You cannot bowl again! The game is finished.");
    });

  });

  describe('.getScore',function(){

    it('returns the correct score for a perfect game (all strikes)', function(){
      var balls = [10,10,10,10,10,10,10,10,10,10,10,10];
      var spy = spyOn(Math, 'random')
      for(var i = 0; i <= balls.length ; i++){
        var currentBall = balls[i];
        spy.and.returnValue(currentBall / 10);
        game.bowl();
      }
      expect(game.getScore()).toEqual(300);
    });

    it('returns the correct score for a gutter game (no score)', function(){
      var balls = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      var spy = spyOn(Math, 'random')
      for(var i = 0; i <= balls.length ; i++){
        var currentBall = balls[i];
        spy.and.returnValue(currentBall / 10);
        game.bowl();
      }
      expect(game.getScore()).toEqual(0);
    });

    it('returns the correct score for a game with no strikes or spares', function(){
      var balls = [0,5,5,0,1,4,2,3,7,0,8,0,4,4,4,0,5,0,6,1];
      var spy = spyOn(Math, 'random')
      for(var i = 0; i <= balls.length ; i++){
        var currentBall = balls[i];
        spy.and.returnValue(currentBall / 10);
        game.bowl();
      }
      expect(game.getScore()).toEqual(59);
    });

    it('returns the correct score for a game with only spares', function(){
      var balls = [0,10,0,10,0,10,0,10,0,10,0,10,0,10,0,10,0,10,0,10,0]
      var spy = spyOn(Math, 'random')
      for(var i = 0; i <= balls.length ; i++){
        var currentBall = balls[i];
        spy.and.returnValue(currentBall / 10);
        game.bowl();
      }
      expect(game.getScore()).toEqual(100);
    });

    it('returns the correct score for a mixed game (A)', function(){
      var balls = [0,10,1,9,2,0,5,5,1,1,2,5,4,1,0,10,6,3,0,10,0]
      var spy = spyOn(Math, 'random')
      for(var i = 0; i <= balls.length ; i++){
        var currentBall = balls[i];
        spy.and.returnValue(currentBall / 10);
        game.bowl();
      }
      expect(game.getScore()).toEqual(85);
    });

    it('returns the correct score for a mixed game (B)', function(){
      var balls = [10,0,1,9,1,0,10,5,1,1,3,2,4,10,10,10,10,10]
      var spy = spyOn(Math, 'random')
      for(var i = 0; i <= balls.length ; i++){
        var currentBall = balls[i];
        spy.and.returnValue(currentBall / 10);
        game.bowl();
      }
      expect(game.getScore()).toEqual(143);
    });

  });

  describe('.wasPerfect',function(){

    it('returns true if the player scored 300', function(){
      expect(game.wasPerfect(300)).toBe(true);
    });

    it('returns false if the player scored less than 300', function(){
      expect(game.wasPerfect(100)).toBe(false);
    });

  });

  describe('.wasGutterGame',function(){

    it('returns true if the player scored 0', function(){
      expect(game.wasGutterGame(0)).toBe(true);
    });

    it('returns false if the player scored more than 0', function(){
      expect(game.wasGutterGame(100)).toBe(false);
    });

  });

});
