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

    it('has a #frameCount of 0 to start', function(){
      expect(game.frameCount).toEqual(0);
    });

    it('has a array of #frames', function(){
      expect(game.frames).toEqual([]);
    });

  });

  describe('.newFrame',function(){

    it('starts a new frame', function(){
      game._newFrame();
      game._newFrame();
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

  });

  describe('.getScore',function(){

    it('returns the correct score for a perfect game', function(){
      spyOn(Math, 'random').and.returnValue(1);
      for(var i = 1; i < 14; i++){
        game.bowl();
      }
      console.log(game.frames);
      expect(game.getScore()).toEqual(300);
    });

    it('returns the correct score for a gutter game', function(){
      spyOn(Math, 'random').and.returnValue(0);
      for(var i = 1; i < 22 ; i++){
        game.bowl();
      }
      expect(game.getScore()).toEqual(0);
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
