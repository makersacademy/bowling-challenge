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

  it ('can calculate results if spare', function() {
    spyOn(game, '_hit').and.returnValue(5);
    game.playRoll()
    game.playRoll()
    game.playRoll()
    expect(game.results).toEqual([15]);
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

  it ('can play perfect game, calculates result correctly', function() {
    spyOn(game, '_hit').and.returnValue(10);
    for(var i = 1; i < 14; i++) { game.playRoll() };
    expect(game.total[game.total.length-1]).toEqual(300);
    expect(game.total).toEqual([ 30, 60, 90, 120, 150, 180, 210, 240, 270, 300]);
  });

  it ('can play game with spares, calculates result correctly', function() {
    spyOn(game, '_hit').and.returnValue(5);
    for(var i = 1; i < 25; i++) { game.playRoll() };
    expect(game.rolls.length).toEqual(21);
    expect(game.total[game.total.length-1]).toEqual(150);
    expect(game.total).toEqual([ 15, 30, 45, 60, 75, 90, 105, 120, 135, 150 ]);
  });

  it ('can play regular game, calculates result correctly', function() {
    spyOn(game, '_hit').and.returnValue(4);
    for(var i = 1; i < 21; i++) { game.playRoll() };
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

  it ('works correctly when 10th frame is strike, and extra rolls are not strike/not strike', function() {
    spyOn(Math, 'random').and.returnValue(0.999);
    for(var i = 1; i < 11; i++) { game.playRoll() };
    spyOn(game, '_hit').and.returnValue(4)
    for(var i = 1; i < 5; i++) { game.playRoll() };
    expect(game.total[game.total.length-1]).toEqual(282);
    expect(game.total).toEqual([ 30, 60, 90, 120, 150, 180, 210, 240, 264, 282]);
  });

  it ('works correctly when 10th frame is strike, and extra rolls are strike/not strike', function() {
    spyOn(Math, 'random').and.returnValue(0.999);
    for(var i = 1; i < 12; i++) { game.playRoll() };
    spyOn(game, '_hit').and.returnValue(4)
    for(var i = 1; i < 5; i++) { game.playRoll() };
    expect(game.total[game.total.length-1]).toEqual(294);
    expect(game.total).toEqual([ 30, 60, 90, 120, 150, 180, 210, 240, 270, 294]);
  });


});