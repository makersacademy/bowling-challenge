describe('Game', function(){
  
  let game;

  beforeEach(function() {
    game = new Game();
  });

  describe('new Game()', function() {
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

  describe('#newRoll', function() {
    beforeEach(function() {
      game.newRoll(4);
    });

    it('pins to decrease when a user rolls', function() {
      expect(game.pins).toEqual(6);
    });

    it('decreases the roll count', function() {
      expect(game.rollCount).toEqual(1);
    });

    it('can\'t roll below 0', function() {
      expect(function() { game.newRoll(7); }).toThrowError('Invalid roll');
    });

    it('can\'t have a negative roll count', function() {
      game.newRoll(1);
      expect(function() { game.newRoll(1); }).toThrowError('Unable to roll');
    });

    it('can\'t roll a number greater than 10', function() {
      expect(function() {game.newRoll(11); }).toThrowError('Invalid roll');
    });

    it('can\'t roll a number less than 10', function() {
      expect(function() {game.newRoll(-1); }).toThrowError('Invalid roll');
    })
  });
});