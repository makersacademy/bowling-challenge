'use strict';

describe('Game', function() {
  var game;

  beforeEach(function() {
    var player = new Player("Bob");
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

  describe('.getCurrentFrame',function(){

    it('returns the current frame', function(){
      game.newFrame();
      expect(game.getCurrentFrame()).toEqual(jasmine.any(Frame));
    });

  });

  describe('.newFrame',function(){

    it('starts a new frame', function(){
      game.newFrame();
      game.newFrame();
      expect(game.frames.length).toEqual(2);
    });

  });

  describe('.bowl',function(){

    xit('calls throwBall on player', function(){

    });

    xit('adds ball to the current frame', function(){

    });

  });

  describe('.getScore',function(){

    xit('returns the correct score for the game', function(){

    });

    xit('returns the correct score for the game', function(){

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

})
