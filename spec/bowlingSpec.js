describe("Player", function() {
  var player;
  var frames = 9;

  beforeEach(function() {
    player = new Player();
  });

  it('should be able to bowl the first roll and score 1 point', function () {
    player.roll1(1);
    expect(player.score).toEqual(1);
  });

  it('should be able to bowl the second roll and score 2 points', function () {
    player.roll1(1);
    player.roll2(2);
    expect(player.score).toEqual(3);
  });
});
