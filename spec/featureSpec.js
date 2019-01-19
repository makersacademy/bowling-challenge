describe("Features", function() {
  var game;
  let counter = 0;

  function fullGame(roll1, roll2) {
    if (counter < 10){
      counter++
      game.addFrame(roll1, roll2)
      fullGame(roll1, roll2)
    }
  }    

  beforeEach(function() {
    game = new Game();
  });

  it("Playing a 'gutter game' should return score of 0", function() {
    fullGame(0,0)
    expect(game.totalScore()).toEqual(0);
  });
})