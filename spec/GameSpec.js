describe("Game", function(){

  var game;
  beforeEach(function(){
    game = new Game();
  });

  describe('scoring', function(){
    it('should equal zero when game starts', function(){
      game.roll(0)
      game.roll(0)
      expect(game.sumPins(0)).toEqual(0);
    });

    it("should sum pins in frame", function(){
      game.roll(2)
      game.roll(3)
      expect(game.sumPins(0)).toBe(5);
    });
  });

  describe('is strike', function(){
    it('should return true if stike is scored', function (){
      game.roll(10)
      expect(game.isStrike(0)).toEqual(true)
    })

    it('should return false if stike is not scored', function(){
      game.roll(4)
      expect(game.isStrike(0)).toEqual(false)
    })
  })
});
