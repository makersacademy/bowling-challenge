describe('JavaScript Bowling Game', function(){

  var game;

  beforeEach(function(){
    game = new BowlingGame();
  });

  describe('User Story 1:', function(){
    it('can roll a gutter game', function(){
      spyOn(game, "randomRoll").and.returnValue(0);
      rollManyRandoms(20);
      expect(game.getScore.score(game.currentFrame)).toBe(0);
    });
  });

  describe('User Story 2:', function(){
    it('can roll all ones', function(){
      spyOn(game, "randomRoll").and.returnValue(1);
      rollManyRandoms(20);
      expect(game.getScore.score(game.currentFrame)).toBe(20);
    });
  });

  describe('User Story 3:', function(){
    it('can roll a spare', function(){
      spyOn(game, "randomRoll").and.returnValues(5, 5, 3, 3);
      rollManyRandoms(4);
      expect(game.getScore.score(game.currentFrame)).toBe(19);
    });
  });

  describe('User Story 4:', function(){
    it('can roll a strike', function(){
      spyOn(game, "randomRoll").and.returnValues(10, 3, 3);
      rollManyRandoms(3);
      expect(game.getScore.score(game.currentFrame)).toBe(22);
    });
  });

  describe('User Story 5:', function(){
    it('can roll a perfect game', function(){
      spyOn(game, "randomRoll").and.returnValue(10);
      rollManyRandoms(12);
      expect(game.getScore.score(game.currentFrame)).toBe(300); 
      expect(game.isGameOver()).toBe(true);
    });
  });

  describe('User Story 6:', function(){
    it('returns score after one strike and a normal frame', function(){
      spyOn(game, "randomRoll").and.returnValues(10, 3, 5);
      rollManyRandoms(3);
      expect(game.getScore.score(game.currentFrame)).toBe(26);
      expect(game.isGameOver()).toBe(false);
    });
  });

  describe('User Story 7:', function(){
    it('returns score after 3 successive strikes', function(){
      spyOn(game, "randomRoll").and.returnValue(10);
      rollManyRandoms(3);
      expect(game.getScore.score(game.currentFrame)).toBe(30);
    });
  });

  describe('User Story 8:', function(){
    it('returns score after 1 strike, 1 spare and 2 normal bowls', function(){
      spyOn(game, "randomRoll").and.returnValues(10, 7, 3, 3, 2);
      rollManyRandoms(5);
      expect(game.getScore.score(game.currentFrame)).toBe(38);
    });
  });

  var rollManyRandoms = function (rolls) {
    for (var i = 0; i < rolls; i++) {
      var pins = game.randomRoll();
      game.roll(pins);
    };
  };

});
