describe("Game", function () {

  var game;

  beforeEach(function () {
    game = new Game();
    frame1 = new Frame();
    role1 = new Role();
    role2 = new Role();
    role1.addPoints(3);
    role2.addPoints(5);
    frame1.add(role1);
    frame1.add(role2);
    frame1.calculateScore();
    frame2 = new Frame();
    role3 = new Role();
    role4 = new Role();
    role3.addPoints(4);
    role4.addPoints(1);
    frame2.add(role3);
    frame2.add(role4);
    frame2.calculateScore();
  });

  it("has functionality to add frames", function() {
    game.add(frame1);
    expect(game.frames[0]).toEqual(frame1);
  });

  it("has functionality to calculate total score", function() {
    game.add(frame1);
    game.add(frame2);
    console.log(game);
    expect(game.calculateTotalScore()).toEqual(13);
  });
});
