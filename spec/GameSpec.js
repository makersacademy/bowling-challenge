'use strict';

describe('Game', function(){

  var game;
  var frame;

  beforeEach(function(){
    game = new Game();
    frame = jasmine.createSpyObj('frame', ['bowl', 'getScore'])
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

  describe('evaluateScore', function(){
    it('returns 20 for game of 1s', function(){
      frame.getScore.and.returnValue(2);
      for(var i = 0; i < 10; i++){
        game.newFrame(frame);
        game.bowl(1);
        game.bowl(1);
        game.saveFrame();
      }
      game.evaluateScore();
      expect(game.score).toEqual(20);
    })
  })

});
