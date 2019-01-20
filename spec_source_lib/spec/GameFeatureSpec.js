describe("Game - Gutter Game Feature Test", function() {
  var game;
  var score;

  beforeEach(function() {
    game = new Game();
    score = new Frame(0, 0);
  });

  it("returns a score of 0 for a gutter game", function() {
    for ( var i = 0; i < 20; i++ ) {
    game.roll(score.score())
    }
    expect(game.currentScore()).toEqual(0);
  });

  it("is complete after the 20 throws of a gutter game", function() {
    for ( var i = 0; i < 20; i++ ) {
    game.roll(score.score())
    }
    expect(game.gutterGame(20, 0)).toEqual(true);
  });

})

describe("Game - No Strikes or Spares Feature Test", function() {
  var game;
  var score;

  beforeEach(function() {
    game = new Game();
    score = new Frame(2, 6);
  });

  it("returns score of 80 if player knocks down 8 pins in each frame", function() {
    for ( var i = 0; i < 10; i++ ) {
    game.roll(score.score())
    }
    expect(game.currentScore()).toEqual(80);
  });

})

// next Feature test written below, was going to implement simple strike bonus scoring

// describe("Game - One Strike Feature Test", function() {
//   var game;
//   var score;

//   beforeEach(function() {
//     game = new Game();
//     score = new Frame(2, 6);
//     strike_score = new Frame(10, 0)
//   });

//   it("returns score of 90 if 1 strike at start & all other frames' score 8", function() {
//     game.roll(strike_score.score())
//     for ( var i = 0; i < 9; i++ ) {
//     game.roll(score.score())
//     }
//     expect(game.currentScore()).toEqual(90);
//   });

// })
