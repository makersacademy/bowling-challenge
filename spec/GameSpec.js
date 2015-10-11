describe("Game", function(){

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it ('returns the number of hit pins for first roll', function() {
    spyOn(Math, 'random').and.returnValue(0.634);
    game.firstRoll();
    expect(game.hitByFirstRoll).toEqual(6);
    expect(game.pins).toEqual(4);
  });

  it ('returns the number of hit pins for second roll', function() {
    spyOn(Math, 'random').and.returnValue(0.434);
    game.firstRoll();
    expect(game.hitByFirstRoll).toEqual(4);
    expect(game.pins).toEqual(6);
    game.secondRoll();
    expect(game.hitBySecondRoll).toEqual(3);
  });

  it ('does not change the second roll if strike', function() {
    spyOn(Math, 'random').and.returnValue(0.999);
    game.firstRoll();
    expect(game.hitByFirstRoll).toEqual(10);
    expect(game.pins).toEqual(0);
    game.secondRoll();
    expect(game.hitBySecondRoll).toEqual(null);
  });

  it ('includes played rolls to a table', function() {
    spyOn(Math, 'random').and.returnValue(0.434);
    game.playFirstRoll();
    game.playSecondRoll();
    expect(game.rolls).toEqual([4,3]);
    expect(game.tempArray).toEqual([4,3]);
  });


  it ('can calculate result', function() {
    spyOn(Math, 'random').and.returnValue(0.434);
    game.playFirstRoll();
    game.playSecondRoll();
    game.calculateIfPossible();
    expect(game.results).toEqual([7]);
    expect(game.tempArray).toEqual([]);
  });

  it ('can calculate results with 3 strikes in a row', function() {
    spyOn(game, '_hit').and.returnValue(10);
    game.playRoll()
    game.playRoll()
    game.playRoll()
    expect(game.results).toEqual([30]);
  });

  it ('goes to next frame after strike', function() {
    spyOn(game, '_hit').and.returnValue(10);
    game.playRoll()
    expect(game.frameNumber).toEqual(2);
    expect(game.hitByFirstRoll).toEqual(null);
  });

  it ('can play perfect game', function() {
    spyOn(game, '_hit').and.returnValue(10);
    for(var i = 1; i < 14; i++) { game.playRoll() };
    expect(game.total[game.total.length-1]).toEqual(300);
    expect(game.total).toEqual([ 30, 60, 90, 120, 150, 180, 210, 240, 270, 300]);
  });

  it ('can play game with spares', function() {
    spyOn(game, '_hit').and.returnValue(5);
    for(var i = 1; i < 23; i++) { game.playRoll() };
    expect(game.total[game.total.length-1]).toEqual(150);
    expect(game.total).toEqual([ 15, 30, 45, 60, 75, 90, 105, 120, 135, 150 ]);
  });

  it ('can play regular game', function() {
    spyOn(game, '_hit').and.returnValue(4);
    for(var i = 1; i < 23; i++) { game.playRoll() };
    expect(game.rolls.length).toEqual(20);
    expect(game.total[game.total.length-1]).toEqual(80);
    expect(game.total).toEqual([ 8, 16, 24, 32, 40, 48, 56, 64, 72, 80 ]);
  });

  it ('game stops if the last frame is regular and 20 rolls were played', function() {
    spyOn(game, '_hit').and.returnValue(4);
    for(var i = 1; i < 25; i++) { game.playRoll() };
    expect(game.rolls.length).toEqual(20);
    expect(game.total[game.total.length-1]).toEqual(80);
    expect(game.total).toEqual([ 8, 16, 24, 32, 40, 48, 56, 64, 72, 80 ]);
  });

  // test what happens if the last is spare
  // test what happens if the last is strike (2 options: not strike/not strike; strike/not strike; strike/strike)


});