describe('Player', function() {
  var player;

  beforeEach(function() {

    player = new Player();
  });

  describe('Initializing', function() {

    it('is initiated on his first throw of frame', function(){
      expect(player.turn).toBe(0)
    });
  });

  describe('nextTurn', function(){
    it('adds 1 to the player\'s turn', function(){
      player.nextTurn();
      expect(player.turn).toBe(1)
    });
  });

  describe('resetTurn', function(){
    it('sets players\' turn to 0', function(){
      player.nextTurn();
      expect(player.turn).toBe(1)
    });
  });

  describe('#bowl', function(){

    it('can bowl and return number of downed pins', function(){
      player.bowl(3);
      expect(player.downedPins).toBe(3)
    });

    it('updates turn after player has bowled', function(){
      player.bowl(5);
      expect(player.turn).toBe(1)
    });

    it('resets turn when in new frame', function(){
      player.bowl(5);
      expect(player.turn).toBe(1);
      player.bowl(6);
      expect(player.turn).toBe(0)
    });
  });

});
