describe('Bowling Game Score', function() {

  var game;

  beforeEach(function(){
      game = new BowlingGame();
  });

  it('adds total of frame', function(){
    game.frames[4].roll(3);
    game.frames[4].rollAgain(5);
    game.addGameRolls();
    game.addBonus();
    expect(game.frames[4].totalScore).toEqual(8);
  });

  it('adds total of frame with spare bonus', function(){
    game.frames[0].roll(5);
    game.frames[0].rollAgain(5);
    game.frames[1].roll(2);
    game.frames[1].rollAgain(2);
    game.addGameRolls();
    game.addBonus();
    expect(game.frames[0].totalScore).toEqual(12);
  });
  
  it('adds total of frame with strike bonus', function(){
    game.frames[0].roll(10);
    game.frames[1].roll(10);
    game.frames[2].roll(2);
    game.frames[2].rollAgain(2);
    game.addGameRolls();
    game.addBonus();
    expect(game.frames[0].totalScore).toEqual(22);
    expect(game.frames[1].totalScore).toEqual(14);
  });


  it('adds two bonus rolls if last frame strike', function(){
    game.frames[9].isStrike = true;
    game.checkLastFrame();
    game.frames[9].bonusRoll(10);
    game.frames[9].bonusRollAgain(5);
    expect(game.frames[9].bonus).toEqual(15);
  });
  
  it('adds one bonus rolls if last frame spare', function(){
    game.frames[9].isSpare = true;
    game.checkLastFrame();
    game.frames[9].bonusRoll(5);
    expect(game.frames[9].bonus).toEqual(5);
  });
  
  it('adds all frames correctly with all strikes', function(){
    game.frames[0].roll(10);
    game.frames[1].roll(10);
    game.frames[2].roll(10);
    game.frames[3].roll(10);
    game.frames[4].roll(10);
    game.frames[5].roll(10);
    game.frames[6].roll(10);
    game.frames[7].roll(10);
    game.frames[8].roll(10);
    game.frames[9].roll(10);
    game.addGameRolls();
    game.addBonus();
    game.checkLastFrame();
    game.frames[9].bonusRoll(10);
    game.frames[9].bonusRollAgain(10);
    game.addLastFrame();
    game.addBonus();
    game.addTotalScore();
    expect(game.gameTotalScore).toEqual(300);
  });

});
