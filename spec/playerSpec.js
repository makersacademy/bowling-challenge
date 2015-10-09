describe('Player', function() {
  var player;

  beforeEach(function() {

    player = new Player()
  });

  describe('Initializing', function() {

    it('is initiated on his first throw of frame', function(){
      expect(player.turn).toBe(0)
    });
  });

  describe('#nextTurn', function(){
    it('adds 1 to the player\'s turn', function(){
      player.nextTurn();
      expect(player.turn).toBe(1)
    });
  });

  describe('#resetTurn', function(){
    it('sets players\' turn to 0', function(){
      player.nextTurn();
      expect(player.turn).toBe(1)
    });
  });

  describe('#updateTurn', function(){
    it('updates players turn correctly', function(){
      player.updateTurn();
      expect(player.turn).toBe(1)
      player.updateTurn();
      expect(player.turn).toBe(0)
    });

    it('resets turn if bowl is a strike', function(){
      player.bowl(10);
      expect(player.turn).toBe(0)
    });
  });

  describe('#bowl', function(){

    it('can bowl and return number of downed pins', function(){
      player.bowl(3);
      expect(player.downedPins).toBe(3)
    });
  });

  describe('#isStrike', function(){

    it('returns true if a strike occurs', function(){
      player.bowl(10);
      expect(player.isStrike()).toBe(true)
    });
  });

});
