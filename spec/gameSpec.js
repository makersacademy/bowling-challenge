
describe("Game", function() {
  let game;

  beforeEach(function(){
    game = new Game();
  });

  it("has two scores in frames from 1 to 9", function() {
    expect(game.countCapacityInFirst9Frames().length).toEqual(2);
  });

  it("has three scores in frame 10", function() {
    expect(game.countCapacityInFrame10().length).toEqual(3);
  });

  it("returns a sum of a score1", function() {

    expect(game.sumScoresInRound1()).toEqual(6);
  })

});
