describe('Player', function() {
  var player;

  beforeEach(function() {

    player = new Player();
  });

  it('is initiated on his first throw of frame', function(){
    expect(player.turn).toBe(0)
  });

  it('can bowl and return number of downed pins', function(){
    player.bowl(3);
    expect(player.downedPins).toBe(3)
  });

});
