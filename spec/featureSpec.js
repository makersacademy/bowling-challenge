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
    counter = 0
    fullGame(0,0)
    expect(game.totalScore()).toEqual(0);
  });

  it("Playing a 'normal game' should return total score", function() {
    counter = 0
    fullGame(1,1)
    expect(game.totalScore()).toEqual(20);
  })

  it("Scoring a 'spare' should return bonus points", function() {
    game.addFrame(0, 10);
    game.addFrame(1, 1);
    expect(game.totalScore()).toEqual(13);
  })

  it("Scoring a 'strike' should return bonus points", function() {
    game.addFrame(10, 0);
    game.addFrame(1, 1);
    expect(game.totalScore()).toEqual(14)
  })
})