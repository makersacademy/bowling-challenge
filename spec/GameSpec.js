describe("Game", function() {
  var game;
  // var frame;

  beforeEach(function() {
    game = new Game();
  });

  it("creates a new game with an initial score of 0", function() {
    expect(game._score).toEqual(0);
  });

  it("creates a new game with an initial framescore of 0", function() {
    expect(game._frameScore).toEqual(0);
  });

  it("adds the first bowl", function() {
    game.add(5);
    expect(game._bowls).toEqual([5]);
});

  it("adds the second bowl", function() {
    game.add(5);
    game.add(3);
    expect(game._bowls).toEqual([5,3]);
  });

  it("score updates after two bowls", function() {
    game.add(5);
    game.add(3);
    expect(game._frameScore).toEqual(8);
    expect(game._frameType).toEqual('normal');
});

  it("frame saves as a spare", function() {
    game.add(5);
    game.add(5);
    expect(game._frameType).toEqual('spare');
  });

  it("frame saves as a strike", function() {
    game.add(10);
    expect(game._frameType).toEqual('strike');
  });

  it("score updates after two bowls", function() {
    game.add(8);
    game.add(1);
    expect(game._frames[0].frameBowls).toEqual([8,1]);
    game.add(7);
    game.add(1);
    expect(game.score()).toEqual(17);
  });

  it("score updates after two bowls first being spare", function() {
    game.add(8);
    game.add(2);
    expect(game._frames[0].frameBowls).toEqual([8,2]);
    game.add(7);
    game.add(1);
    expect(game.score()).toEqual(25);
  });

  it("score updates after two bowls first being strike", function() {
    game.add(10);
    expect(game._frames[0].frameBowls).toEqual([10]);
    game.add(7);
    game.add(1);
    expect(game.score()).toEqual(26);
  });

  it("score updates after two strikes in a row", function() {
    game.add(10);
    expect(game._frames[0].frameBowls).toEqual([10]);
    game.add(10);
    game.add(7);
    game.add(1);
    expect(game._frames[0].frameScore).toEqual(27);
    expect(game._frames[1].frameScore).toEqual(18);
    expect(game.score()).toEqual(53);
  });

  it("perfect game", function() {
    game.add(10);
    game.add(10);
    game.add(10);
    game.add(10);
    game.add(10);
    game.add(10);
    game.add(10);
    game.add(10);
    game.add(10);
    game.add(10);
    game.add(10);
    game.add(10);
    console.log(game)
    expect(game.score()).toEqual(300);
  });

});
