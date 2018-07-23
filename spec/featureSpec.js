describe("Feature test", function () {
  var game;

  beforeEach(function(){
    game = new Game();
  });

// As a bowler
// So that I can know how my game went
// I want to see my total score
it("user can see total score", function() {
  for (i = 0; i < 20; i++) {
    game.getRoll(3);
  }
  expect(game.returnScore()).toEqual(60);
});

// As a bowler
// So that good rolls are rewarded
// I want to receive a bonus that equals my next roll when I roll a spare
  describe("when user rolls a spare", function() {
    it("adds a bonus to the total score", function() {
      game.getRoll(4);
      game.getRoll(6);
      game.getRoll(2);
      game.getRoll(2);
      expect(game.returnScore()).toEqual(16);
    });
  });

// As a bowler
// So that great rolls beget great rewards
// I want to receive a bonus that equals my next two rolls when I roll a strike
describe("when user rolls a strike", function() {
  it("adds two bonuses to the total score", function() {
    game.getRoll(10);
    game.getRoll(2);
    game.getRoll(2);
    expect(game.returnScore()).toEqual(18);
  });
});

describe("when user rolls two strikes", function() {
  it("adds four bonuses to the total score", function() {
    game.getRoll(10);
    game.getRoll(10);
    game.getRoll(2);
    game.getRoll(2);
    expect(game.returnScore()).toEqual(40);
  });
});

// As a bowler
// So that I get the bonus I deserve
// I want to keep rolling for bonus points after the 10th frame

// As a bowler
// So that I can know how I am doing
// I want to see my score after every frame
//
// As a bowler
// So that I can use the app more easily
// I want a nice interactive interface
});
