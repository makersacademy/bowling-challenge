describe("Player", function() {

  var player;

  beforeEach(function() {
    player = new Player();
  });

// why function does not return an array?
  describe('#scoreBoard', function() {
    it('Should return an array with length 10', function() {
      expect(player._scoreBoard.length).toEqual(10)
    });
  });

  describe('#bonus', function() {
    it('Should return a bonus value', function() {
      expect(player.bonus()).toEqual(0)
    });
  });


  describe('#assignBonus', function() {
    it('should assign a bonus to a player', function() {
      player.assignBonus(10);
      expect(player.bonus()).toEqual(10)
    });

    it('works', function(){
      player.assignBonus(10);
      expect(player._bonus).toEqual(10)
    });
  });
});
