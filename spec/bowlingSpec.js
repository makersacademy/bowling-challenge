describe("Player", function() {
  var player;
  var frames = 9;

  beforeEach(function() {
    player = new Player();
  });

  it('should be able to bowl the first roll and score 1 point', function () {
    player.roll1();
    expect(player.score).toEqual(1);
  });
});
