describe('Game', function () {
  var game;
  var player;
  beforeEach(function () {
    game =  new Game();
    player = new Player();
  });
  
  it("Gutter game", function () {
    for(frame.level; frame.level <= frame.LEVELEND; frame.level++) {
      player.hit(0);
      player.hit(0);
    }
    expect(game.score()).toBe(0);
  });

  it("All ones game", function () {
    for(frame.level; frame.level <= frame.LEVELEND; frame.level++) {
      player.hit(1);
      player.hit(1);
    }
    expect(game.score()).toBe(20);
  });


})