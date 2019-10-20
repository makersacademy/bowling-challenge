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
    expect(game._frameBowls).toEqual([5,0]);
});

  it("adds the second bowl", function() {
    game.add(5);
    game.add(3);
    expect(game._frameBowls).toEqual([5,3]);
  });

  it("score updates after two bowls", function() {
    game.add(5);
    game.add(3);
    expect(game.frameScore()).toEqual(8);
    expect(game._frameType).toEqual('normal');
    console.log(game._frames)
    // expect(game._frameComplete).toEqual(true);
});

  it("frame saves as a spare", function() {
    game.add(5);
    game.add(5);
    expect(game.frameScore()).toEqual(10);
    expect(game._frameType).toEqual('spare');
    console.log(game._frames)
  });

it("frame saves as a strike", function() {
  game.add(10);
  expect(game.frameScore()).toEqual(10);
  expect(game._frameType).toEqual('strike');
  console.log(game._frames)
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
  expect(game.score()).toEqual(27);
});

});
