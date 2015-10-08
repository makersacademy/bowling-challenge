describe("Player", function() {
  var player;

  beforeEach(function() {

    player = new Player();
  });

  it('is initiated on his first throw of frame', function(){
    expect(player.turn).toBe(1)
  });

});
