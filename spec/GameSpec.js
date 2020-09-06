describe('Game', function(){
  
  let game;

  beforeEach(function() {
    game = new Game();
  });

  describe('a new game', function() {
    it('starts on the first frame', function() {
      expect(game.frameCount).toEqual(1);
    });
  
    it('starts with 10 pins', function() {
      expect(game.pins).toEqual(10);
    });
  
    it('starts with 2 rolls', function() {
      expect(game.rolls).toEqual(2);
    });
  });
});