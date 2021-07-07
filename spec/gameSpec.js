
describe("Game", function() {
  let game;

  beforeEach(function(){
    game = new Game();
  });

  it("sums up gutter game", function(){
    var roll;
    for (roll=0; roll < 20; roll++) {
      game.roll(0);
    }
    expect(game.score()).toEqual(0);
  });

  it("Sums up a score of one pin hit in each roll", function() {
    var roll;
    for (roll=0; roll < 20; roll++) {
      game.roll(1);
    }
    expect(game.score()).toEqual(20);
  });

  it("hits a spare", function() {
    game.roll(7)
    game.roll(3)
    game.roll(3)
    var roll;
    for (roll=0; roll < 17; roll++) {
      game.roll(0);
    }
    expect(game.score()).toEqual(16)
  })


  // it("sums up perfect game", function() {
  //   game.roll(10)
  //   game.roll(10)
  //   var roll;
  //   for (roll=0; roll < 7; roll++) {
  //     game.roll(10);
  //   }
  //   expect(game.score()).toEqual(300);
  // });

});
