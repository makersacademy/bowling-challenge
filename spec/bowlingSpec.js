describe ('Game', function() {

  var game;

  beforeEach(function () {
    game = new Game();
  });

  it("can roll spare", function () {
    game.roll(8);
    game.roll(2);
    game.roll(4);
    // rollMany(0, 17);
    for (var i = 0; i < 17; i++) {
        game.roll(0);
      }
    expect(game.score()).toEqual(18);
  });

  it("can roll strike", function() {
    game.roll(10);
    game.roll(2);
    game.roll(1);
      // rollMany(0, 16);
    for (var i = 0; i < 16; i++) {
        game.roll(0);
    }
    expect(game.score()).toEqual(16);
  });

  it("can roll all 0's (A.K.A gutter game)", function() {
    // var game = new Game();
    // rollMany(0, 20);
    for (var i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual(0);
  });

  it("can roll all 1's", function() {
    // var game = new Game();
    // rollMany(1, 20);
    for (var i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.score()).toEqual(20);
  });

  it("can have perfect 300 point game i.e. 12 strikes", function() {
    //rollMany(10, 12);
    for (var i = 0; i < 12; i++) {
      game.roll(10);
    }
    expect(game.score()).toEqual(300);
  });

  // var rollMany = function (pins, rolls) { **for loop refactoring **
  //   for (var i = 0; i < rolls; i++) {
  //     game.roll(pins);
  //   }
  // };


});
