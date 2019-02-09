describe("BowlingGame", function() {
  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  describe('#enterTurn', () => {
    it("returns an array of objects", function() {
      game.play(3, 4);
      expect(game.turns[0].firstBowl).toEqual(3)
      expect(game.turns[0].secondBowl).toEqual(4)
    });

  });

  describe('#countScore', () => {
    it("has a score 0 at game start", function() {
      expect(game.score).toEqual(0)
    });

    it("returns the score after one normal turn", function() {
      expect(game.play(3, 4)).toEqual(7)
    });

    it("updates the score after second normal turn", function() {
      game.play(9, 0)
      expect(game.play(3, 4)).toEqual(16)
    });
  });

  describe('#Bonus', () => {
    it('should confirm if it\'s a strike', function(){
      expect(game.strike(10)).toEqual(true)
      expect(game.strike(4, 6)).toEqual(false)
      expect(game.strike(4, 0)).toEqual(false)
    });

    it('should confirm if it\'s a spare', function(){
      expect(game.spare(7, 3)).toEqual(true)
      expect(game.spare(10)).toEqual(false)
      expect(game.spare(4, 1)).toEqual(false)
    });

    it('should confirm true for deservesBonus', function(){
      expect(game.deservesBonus(7, 3)).toEqual(true)
      expect(game.deservesBonus(10, 0)).toEqual(true)
      expect(game.deservesBonus(1, 3)).toEqual(false)
    });

    it('should add bonus for a strike', function(){
      game.play(10)
      expect(game.play(5, 3)).toEqual(26)
    });
  });
});
