describe ('Game', function() {

  beforeEach(function() {
    game = new Game();
  });

  describe ('Game types', function() {
    it('can roll a gutter game(all rolls = 0)', function() {
    rollGame(0, 20);
      expect(game.totalScore()).toEqual(0);
    });

    it('can roll a normal game(all rolls = 2)', function() {
      rollGame(2, 20);
      expect(game.totalScore()).toEqual(40);
    });

    it('can roll a game with 1 spare', function() {
      game.roll(7);
      game.roll(3);
      game.roll(4);
      rollGame(0, 17);
      expect(game.totalScore()).toEqual(18)
    });

  });

  describe('Roll types', function() {
    it('can roll a single frame', function() {
      game.roll(1);
      game.roll(4);
      expect(game.rolls).toEqual([1, 4])
    });

    it('can roll multiple frames', function() {
      gameRollTwo()
      expect(game.rolls).toEqual([1, 4, 7, 1])
    });

    it('can roll a spare', function() {
      game.roll(3);
      game.roll(7);
      expect(game.isSpare()).toEqual(true)
    });

    it('can recognise a spare', function(){
      game.roll(1);
      game.roll(2);
      expect(game.isSpare()).toEqual(false)
    });
  });

});
