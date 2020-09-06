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
      expect(game.rollCount).toEqual(2);
    });
  });

  describe('a new roll', function() {
    beforeEach(function() {
      game.newRoll(4);
    });

    it('pins to decrease when a user rolls', function() {
      expect(game.pins).toEqual(6);
    });

    it('decreases the roll count', function() {
      expect(game.rollCount).toEqual(1);
    });
  });
});