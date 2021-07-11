describe("Game", function () {
  let game;

  beforeEach(function () {
    game = new Game();
  });

  // describe("can calculare the points of", function () {
  //   it("a simple frame", function () {
  //     game.add();
  //     game.frames[0].stRoll(4);
  //     game.frames[0].ndRoll(3);
  //     game.calculatePoints(0);
  //     expect(game.getCurrentPoints()).toEqual(7);
  //   });
  //   it("spare followed by a simple game", function () {
  //     game.add();
  //     game.frames[0].stRoll(5);
  //     game.frames[0].ndRoll(5);
  //     game.add();
  //     game.frames[1].stRoll(4);
  //     game.frames[1].ndRoll(3);
  //     game.calculatePoints(0);
  //     game.calculatePoints(1);
  //     expect(game.getCurrentPoints(0)).toEqual(14);
  //     expect(game.getCurrentPoints(1)).toEqual(21);
  //   });
  // });
});
