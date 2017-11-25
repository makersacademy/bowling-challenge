describe("Game", function(){

  var game;
  beforeEach(function(){
    game = new Game();
  });

  describe('scoring', function(){
    it('should equal zero when game starts', function(){
      game.bowl(0)
      game.bowl(0)
      expect(game.sumPins(0)).toEqual(0);
    });

    it("should sum pins in frame", function(){
      game.bowl(2)
      game.bowl(3)
      expect(game.sumPins(0)).toBe(5);
    });
  });

  describe('is strike', function(){
    it('should return true if stike is scored', function (){
      game.bowl(10)
      expect(game.isStrike(0)).toEqual(true)
    });

    it('should return false if stike is not scored', function(){
      game.bowl(4)
      expect(game.isStrike(0)).toEqual(false)
    });
  });

  describe('is spare', function(){
    it('should return true sum of pins equals 10', function (){
      game.bowl(2)
      game.bowl(8)
      expect(game.isSpare(0)).toEqual(true)
    });

    it('should return true sum of pins does not equal 10', function(){
      game.bowl(4)
      game.bowl(3)
      expect(game.isSpare(0)).toEqual(false)
    });
  });

  describe('spareBonus', function(){
    it('should return pins from first bowl of following frame', function (){
      game.bowl(2)
      game.bowl(8)
      game.bowl(4)
      expect(game.spareBonus(0)).toEqual(4)
    });
  });
});
