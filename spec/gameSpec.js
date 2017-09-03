describe('Game', function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('when initialized', function(){
    it('frame array starts with length of 11', function(){
      expect(game.frames.length).toEqual(11);
    });
    it('frame index starts at 0', function(){
      expect(game.frameIndex).toEqual(0);
    });
  });

  describe('when a new ball is played', function(){
    it('adds score to frame', function(){
      game.ball(5);
      total = game.currentFrame().total()
      expect(total).toEqual(5);
    });
    it('increments frame index', function(){
      game.ball(3);
      game.ball(3);
      expect(game.frameIndex).toEqual(1);
    });
  });

  describe('getting the current frame', function(){
    it('returns the correct frame (0)', function(){
      expect(game.currentFrame()).toEqual(game.frames[0]);
    });
    it('returns the correct frame (1)', function(){
      game.ball(4);
      game.ball(4);
      game.ball(4);
      expect(game.currentFrame()).toEqual(game.frames[1]);
    });
  });

  describe('getting the game total', function(){

    it('return 0 when no balls have been played', function(){
      expect(game.total()).toEqual(0);
    });

    it('totals half frame', function(){
      game.ball(3);
      game.ball(3);
      expect(game.frameIndex).toEqual(1);
    });

    it('totals one frame', function(){
      game.ball(3);
      game.ball(3);
      expect(game.total()).toEqual(6);
    });

    it('totals multiple frames', function(){
      for (var i = 0; i < 6; i++) {
        game.ball(3)
      }
      expect(game.total()).toEqual(18);
    });
  });

  describe ('finalizing frames', function () {
    it('applies no bonus', function(){
      game.ball(3);
      game.ball(3);
      game.ball(3);
      expect(game.frames[0].total()).toEqual(6);
    });
    it('applies spare bonus', function(){
      game.ball(5);
      game.ball(5);
      game.ball(3);
      expect(game.frames[0].total()).toEqual(13);
    });
    it('applies strike bonus', function(){
      game.ball(10);
      game.ball(5);
      game.ball(3);
      expect(game.frames[0].total()).toEqual(18);
    });
    it('applies strike bonus if next frame was a strike too', function(){
      game.ball(10);
      game.ball(10);
      game.ball(3);
      expect(game.frames[0].total()).toEqual(23);
    });
  });
});
