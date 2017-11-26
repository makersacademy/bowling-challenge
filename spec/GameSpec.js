describe("Game", function(){

  var game;
  beforeEach(function(){
    game = new Game();
  });

  describe('scoring', function(){
    it('should equal zero when game starts', function(){
      game.bowl(0)
      game.bowl(0)
      expect(game._sumPins(0)).toEqual(0);
    });

    it("should sum pins in frame", function(){
      game.bowl(2)
      game.bowl(3)
      expect(game._sumPins(0)).toBe(5);
    });
  });

  describe('is strike', function(){
    it('should return true if stike is scored', function (){
      game.bowl(10)
      expect(game._isStrike(0)).toEqual(true)
    });

    it('should return false if stike is not scored', function(){
      game.bowl(4)
      expect(game._isStrike(0)).toEqual(false)
    });
  });

  describe('is spare', function(){
    it('should return true sum of pins equals 10', function (){
      game.bowl(2)
      game.bowl(8)
      expect(game._isSpare(0)).toEqual(true)
    });

    it('should return true sum of pins does not equal 10', function(){
      game.bowl(4)
      game.bowl(3)
      expect(game._isSpare(0)).toEqual(false)
    });
  });

  describe('score', function(){
    it('should return score of frame', function (){
      game.bowl(2)
      game.bowl(4)
      expect(game.score(0)).toEqual(6)
    });

    it('should add strike bonus when appropriate', function (){
      game.bowl(10)
      game.bowl(4)
      game.bowl(9)
      expect(game.score(0)).toEqual(23)
    });

    it('should add spare bonus when appropriate', function (){
      game.bowl(6)
      game.bowl(4)
      game.bowl(9)
      expect(game.score(0)).toEqual(19)
    });
  });
});
