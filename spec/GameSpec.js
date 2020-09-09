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

    it('starts with no score', function() {
      expect(game.playerScore).toEqual(0);
    });
  });

  describe('#recordRoll', function() {
    beforeEach(function() {
      game.recordRoll(4);
    });

    it('decreases pins', function() {
      expect(game.pins).toEqual(6);
    });

    it('decreases the roll count', function() {
      expect(game.rollCount).toEqual(1);
    });

    it('can\'t roll below 0', function() {
      expect(function() { game.recordRoll(7); }).toThrowError('Invalid roll');
    });

    it('can\'t roll a number greater than 10', function() {
      expect(function() {game.recordRoll(11); }).toThrowError('Invalid roll');
    });

    it('can\'t roll a number less than 0', function() {
      expect(function() {game.recordRoll(-1); }).toThrowError('Invalid roll');
    });
  });

  it('starts a new frame after a strike', function() {
    game.recordRoll(10);
    game.recordRoll(1);
    expect(game.frameCount).toEqual(2);
  });

  describe('#calculateScore', function() {
    it('knows a strike', function() {
      game.rollCount = 2
      game.rollScore = 10
      expect(game.isAStrike()).toBe(true);
    });

    it('knows a spare', function() {
      game.rollCount = 1
      game.pins = 0
      expect(game.isAStrike()).toBe(false);
      expect(game.isASpare()).toBe(true);
    });

    it('records the score', function() {
      game.recordRoll(3);
      game.recordRoll(5);
      expect(game.score()).toEqual(8);
    });

    it('records a spare bonus', function() {
      game.recordRoll(1);
      game.recordRoll(9);
      game.recordRoll(4);
      game.recordRoll(3);
      expect(game.score()).toEqual(21);
    });

    it('records a strike bonus', function() {
      game.recordRoll(10);
      game.recordRoll(4);
      game.recordRoll(3);
      expect(game.score()).toEqual(24);
    });

    it('records a strike bonus: strike again', function() {
      game.recordRoll(10);
      game.recordRoll(10);
      expect(game.score()).toEqual(40);
    });

    it('records a perfect game', function() {
      for(i = 0; i < 11; i++) {
        game.recordRoll(10)
      }
      expect(game.score()).toEqual(300);
    });

    it('records a gutter game', function() {
      for(i = 0; i < 11; i++) {
        game.recordRoll(0)
        game.recordRoll(0)
      }
      expect(game.score()).toEqual(20);
    });

    it('passes the example scorecard', function() {
      game.recordRoll(1)
      game.recordRoll(4)
      game.recordRoll(4)
      game.recordRoll(5)
      game.recordRoll(6)
      game.recordRoll(4)
      game.recordRoll(5)
      game.recordRoll(5)
      game.recordRoll(10)
      game.recordRoll(0)
      game.recordRoll(1)
      game.recordRoll(7)
      game.recordRoll(3)
      game.recordRoll(6)
      game.recordRoll(4)
      game.recordRoll(10)
      game.recordRoll(2)
      game.recordRoll(8)
      game.recordRoll(6)
      expect(game.score()).toEqual(133);
    });
  });
});
