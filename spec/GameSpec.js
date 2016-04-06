'use strict';

describe('Game', function(){

  var game;
  var frame;

  beforeEach(function(){
    game = new Game();
    frame = jasmine.createSpyObj('frame', ['bowl'])
  });

  describe('to start', function(){
    it('has empty frames array', function(){
      expect(game.frames).toEqual([]);
    });
    it('has 0 score', function(){
      expect(game.score).toEqual(0);
    });
  })

  describe('newFrame', function(){
    it('creates currentFrame', function(){
      game.newFrame(frame);
      expect(game.currentFrame).toEqual(frame);
    });
  })

  describe('saveFrame', function(){
    it('adds to frames array', function(){
      game.newFrame(frame);
      game.saveFrame();
      expect(game.frames).toEqual([frame]);
    });
  })

  describe('bowl', function(){
    it('calls bowl function on frame', function(){
      game.newFrame(frame);
      game.bowl(3);
      expect(frame.bowl).toHaveBeenCalled();
    });
  })

});
