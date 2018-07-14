describe("Feature test", function () {
  var game;
  var frame;
});

beforeEach(function(){
  game = new Game();
  frame = new Frame();
});

// As a bowler
// So that I can know my game went
// I want to see my total score
  it("user can see total score", function() {
    for (i = 0; i < 10; i++) {
      frame.first_roll = 1;
      frame.second_roll = 1;
    }
    expect(game.total).toEqual(20);
  });
//
// As a bowler
// So that good rolls are rewarded
// I want to receive a bonus that equals my next roll when I roll a spare
//
// As a bowler
// So that great rolls beget great rewards
// I want to receive a bonus that equals my next two rolls when I roll a strike
//
// As a bowler
// So that I get the bonus I deserve
// I want to keep rolling for bonus points after the 10th frame
//
// As a bowler
// So that I can know how I am doing
// I want to see my score after every frame
//
// As a bowler
// So that I can use the app more easily
// I want a nice interactive interface
