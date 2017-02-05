describe('Game', function(){
  'use strict'

  var game;
  var frame;

  beforeEach(function(){
    game = new Game();
    frame = {};
  });

  describe('::new', function(){
    it('when a new game is created the first frame is called and result is 0',function(){
      expect(game._frameResults.length).toBe(0);
    });
  });

  describe('#createNewFrame', function(){
    it('creates a new frame every time is called',function(){
      game.createNewFrame()
      game.createNewFrame()
      expect(game._frameNumber).toBe(2)
    });
  });

  describe('#playEntireGame', function(){
    it('a game has 10 frames',function(){
      game.playEntireGame()
      expect(game._frameResults.length).toBe(10)
    });
  });
});
