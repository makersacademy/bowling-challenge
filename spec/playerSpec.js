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

  describe('#bowl', function(){

    it('can bowl and return number of downed pins', function(){
      player.bowl(3);
      expect(player.downedPins).toBe(3)
    });

    it('updates turn after player has bowled', function(){
      player.bowl(5);
      expect(player.turn).toBe(1)
    });
  });

});
