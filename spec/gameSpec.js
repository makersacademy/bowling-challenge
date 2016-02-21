describe('Game', function() {
  var frame;
  var game;

  beforeEach(function() {
    frame = {
      score: function() {
        return 8;
      },
      isComplete: function() {
        return true;
      }
    };
    game = new Game('Rufus', frame);
  });


  describe('#score', function() {
    it('returns 0 by default', function() {
      expect(game.score).toEqual(0);
    });
  });

  describe('#player', function(){
    it('returns player', function() {
      expect(game.player).toEqual('Rufus');
    });
  });
  describe('#frames', function(){
    it('is empty by default', function() {
      expect(game.frames).toEqual([]);
    });
  });

  describe('#currentFrame', function(){
    it('is empty by default', function() {
      expect(game.frames).toEqual([]);
    });
  });

  describe('#nextFrame', function() {
    it('throws error if current frame not complete', function() {
      spyOn(frame, 'isComplete').and.returnValue(false);
      expect(function() {game.nextFrame()}).toThrowError('Finish frame first');
    });
    it('adds frame score to game score', function() {
      game.nextFrame();
      expect(game.score).toEqual(8);
    });
  });

});
