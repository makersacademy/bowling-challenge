describe ('Game', function() {

  var game;

  beforeEach(function () {
    game = new Game();
  });

  var rollMany = function (pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  };

  it("pushes pins from roll into rolls array", function () {
    game.roll(5);
    expect(game.rolls).toContain(5);
  });

  it("throws error when game tries to exceed 10 frames", function() {
    rollMany(0, 20);
    // expect( function(){ game.roll(4); } ).toThrow(new Error("The game has ended"));
    // game.roll(4);
    expect(game.frameError).toEqual(true);
  });

  it("frame error is true when pins in a frame exceeds 10", function(){
    game.roll(9);
    game.roll(4);
    expect(game.frameArr).toEqual([9]);
  });


  it("can roll spare", function () {
    game.roll(8);
    game.roll(2);
    game.roll(4);
    rollMany(0, 17);
    expect(game.score()).toEqual(18);
  });

  it("can roll strike", function() {
    game.roll(10);
    game.roll(2);
    game.roll(1);
      rollMany(0, 16);
    expect(game.score()).toEqual(16);
  });

  it("can roll all 0's (A.K.A gutter game)", function() {
    rollMany(0, 20);
    expect(game.score()).toEqual(0);
  });

  it("can roll all 1's", function() {
    rollMany(1, 20);
    expect(game.score()).toEqual(20);
  });

  it("can have perfect 300 point game i.e. 12 strikes", function() {
    rollMany(10, 12);
    expect(game.score()).toEqual(300);
  });



});
