describe("Game logic", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  // Gutter game

  it("calculates a score of 0 if the player never hits any pins", function() {
    for (var i = 0; i < 20; i++) {
      frame = new Frame();
      frame.roll(0);
      frame.roll(0);
      game.allFrames.push(frame);
    }
    game.calculateScores();
    expect(game.calculateOverallScore()).toEqual(0);
  });

  // Game with strikes and spares, 10th frame extra bonus not included

  it("calculates a player's score when there are both strikes and spares", function() {
    for (var i = 0; i < 3; i++) {
      frame = new Frame();
      frame.roll(10);
      game.allFrames.push(frame);
    };

    for (var i = 3; i < 5; i++) {
      frame = new Frame();
      frame.roll(5);
      frame.roll(5);
      game.allFrames.push(frame);
    };

    for (var i = 5; i < 10; i++) {
      frame = new Frame();
      frame.roll(3);
      frame.roll(3);
      game.allFrames.push(frame);
    };
    game.calculateScores();
    expect(game.calculateOverallScore()).toEqual(133);
  });

  // Game with the 10th frame extra bonus included

  it("calculates a player's score when the 10th frame is a strike", function() {

    for (var i = 0; i < 9; i++) {
      frame = new Frame();
      frame.roll(3);
      frame.roll(3);
      game.allFrames.push(frame);
    };

     frame = new Frame();
     frame.roll(10);
     game.allFrames.push(frame);

     frame = new Frame();
     frame.roll(2);
     frame.roll(7);
     game.allFrames.push(frame);

    game.calculateScores();
    expect(game.calculateOverallScore()).toEqual(73);
  });

  it("calculates a player's score when the 10th frame is a spare", function() {

    for (var i = 0; i < 9; i++) {
      frame = new Frame();
      frame.roll(3);
      frame.roll(3);
      game.allFrames.push(frame);
    };

    frame = new Frame();
    frame.roll(5);
    frame.roll(5);
    game.allFrames.push(frame);

    frame = new Frame();
    frame.roll(3);
    game.allFrames.push(frame);

    game.calculateScores();
    expect(game.calculateOverallScore()).toEqual(67);
  });

  // Perfect game

  it("calculates the score for a perfect game", function() {

  for (var i = 0; i < 12; i++) {
    frame = new Frame();
    frame.roll(10);
    game.allFrames.push(frame);
  };
    game.calculateScores();
    expect(game.calculateOverallScore()).toEqual(300);
  });

});
