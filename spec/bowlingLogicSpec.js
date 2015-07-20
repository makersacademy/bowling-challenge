describe('Bowling Game Score', function() {

  var game;

  beforeEach(function(){
      game = new BowlingGame();
      game.frames[0].roll(3);
      game.frames[0].rollAgain(5);
      game.frames[1].roll(10);
  });

  it('can record a roll', function() {
    expect(game.frames[0].roll1).toEqual(3);
  });


  it('adds total of two rolls per frame', function(){
    game.frames[0].addRolls();
    expect(game.frames[0].rollScore).toEqual(8);
  });

  it('adds total of frame with strike bonus', function(){
    game.frames[2].roll(4);
    game.frames[2].rollAgain(6);
    game.addBonus();
    game.addFrameScore();
    expect(game.frames[1].totalScore).toEqual(20);
  });

  it('adds total of frame with spare bonus', function(){
    game.frames[3].roll(5);
    game.frames[3].rollAgain(5);
    game.frames[4].roll(2);
    game.frames[4].rollAgain(2);
    game.addBonus();
    game.addFrameScore();
    expect(game.frames[3].totalScore).toEqual(12);
  });

  it('adds total of frames', function(){
    game.addBonus();
    game.addFrameScore();
    game.addTotalScore();
    expect(game.gameTotalScore).toEqual(18);
  });

  it('adds a bonus frame', function(){
    game.frames[9].roll(10);
    game.frames[9].addRolls();
    game.checkLastFrame();
    expect(game.frames[10]).toEqual(game.frames[10]);
  });

});
