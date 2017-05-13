describe("Player", function() {
  var player;

  beforeEach(function() {
    player = new Player();
  });

  it('should be able to bowl and score 0 points', function () {
    player.bowl();
    expect(player.score).toEqual(0);
  });
});
