describe ("Game", function() {

  var game

  beforeEach(function(){
    game = new Game();
  });

  describe('bowl', function() {
    it('adds score to the frames', function() {
      game.bowl([1,1]);
      expect(game.frames.length).toEqual(1);
    });

    it('sets final frame after 9 frames', function() {
      for (i = 0; i < 9; i++) {
        game.bowl([1,1])
      }
      expect(game.finalFrame).toEqual(true);
    });
  });

  describe('score', function() {
    it('adds the scores together', function() {
      game.bowl([1,1]);
      game.score(1);
      expect(game.frameScore).toEqual(2);
    });

    it('adds the next two bowls after a strike', function() {
      game.bowl([10]);
      game.bowl([1,1]);
      game.score(1);
      expect(game.frameScore).toEqual(12);
    })
  });
});
