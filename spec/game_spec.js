describe ('Game', function(){

  beforeEach(function(){
    game = new Game();
  });

  it('has 10 pins to start each frame', function(){
    expect(game.pins).toEqual(10);
  });

  it('starts on frame 1', function(){
    expect(game.frame).toEqual(1);
  });

  it('has a limit of 10 frames', function(){
    game.frame = 10
    expect(game.moveFrame()).toEqual('Game Over')
  });

  it('can pass to the next frame', function(){
    game.moveFrame();
    expect(game.frame).toEqual(2);
  });

  it('starts on roll 1', function(){
    expect(game.roll).toEqual(1);
  });

  it('resets to roll 1 after 2 rolls in the same frame', function(){
    game.moveRoll();
    game.moveRoll();
    expect(game.frame).toEqual(2);
  });

  it('moves to roll 2 after roll 1', function(){
    game.moveRoll();
    expect(game.roll).toEqual(2);
  });

  it('should know how many pins are left after first roll', function(){
    expect(game.scoreRoll(6)).toEqual(4);
  });

  it('moves to the next frame if a strike', function(){
    game.scoreRoll(10);
    expect(game.frame).toEqual(2);
  });

  it('can add a score on a roll', function(){
    game.scoreRoll(1);
    game.scoreRoll(2);
    expect(game.scores[1]).toEqual([1, 2]);
  });

  it('can return the current score', function(){
    game.scoreRoll(1);
    game.scoreRoll(2);
    expect(game.frameScore(1)).toEqual(3);
  });

  it('adds the bonus of the next frame after a strike', function(){
    game.scoreRoll(10);
    game.scoreRoll(3);
    game.scoreRoll(2);
    game.strikeBonus();
    expect(game.frameScore(1)).toEqual(15);
  });

  it('adds the bonus of the next roll after a spare', function(){
    game.scoreRoll(7);
    game.scoreRoll(3);
    game.scoreRoll(5);
    game.spareBonus();
    expect(game.frameScore(1)).toEqual(15);
  });

  it('can return the total score of a game', function(){
    game.scoreRoll(10);
    game.scoreRoll(4);
    game.scoreRoll(5);
    game.strikeBonus();
    game.scoreRoll(3);
    game.scoreRoll(4);
    expect(game.totalScore()).toEqual(35);
  });

  describe('10th frame', function(){

    describe('if strike', function(){

      it('gives the bonus points for strikes on the 10th frame', function(){
        game.frame = 10
        game.scoreRoll(10);
        game.scoreRoll(4);
        game.scoreRoll(3);
        expect(game.frameScore(10)).toEqual(17);
      });

      it('should allow a 2nd roll if strike on 10th frame', function(){
        game.frame = 10
        game.scoreRoll(10);
        expect(game.roll).toEqual(2);
      });

      it('should allow a 3rd roll if strike on 10th frame', function(){
        game.frame = 10
        game.scoreRoll(10);
        game.scoreRoll(4);
        expect(game.roll).toEqual(3);
      });

      it('should NOT allow a 4th roll if strike on 10th frame', function(){
        game.frame = 10
        game.scoreRoll(10);
        game.scoreRoll(4);
        game.scoreRoll(2);
        expect(game.roll).toEqual(1);
      });

      it('should NOT allow a 3rd roll if no strike on 10th frame', function(){
        game.frame = 10
        game.scoreRoll(4);
        game.scoreRoll(2);
        expect(game.roll).toEqual(1);
      });

    });

    describe('if spare', function(){

      it('gives the bonus points for spares on the 10th frame', function(){
        game.frame = 10
        game.scoreRoll(4);
        game.scoreRoll(6);
        game.scoreRoll(4);
        expect(game.frameScore(10)).toEqual(14);
      });

      it('should allow a 3rd roll if spare on 10th frame', function(){
        game.frame = 10
        game.scoreRoll(4);
        game.scoreRoll(6);
        expect(game.roll).toEqual(3);
      });

      it('should NOT allow a 4th roll if spare on 10th frame', function(){
        game.frame = 10
        game.scoreRoll(4);
        game.scoreRoll(6);
        game.scoreRoll(2);
        expect(game.roll).toEqual(1);
      });

    });

  });

});
