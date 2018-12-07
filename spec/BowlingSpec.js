describe('Bowling', function(){

  describe('a game', function(){
    beforeEach(function(){
      game = new Game();
      //Add 2 frames
      for(var i = 0; i < 3; i++){
        frame = new Frame(game.frame)
        frame.addFirstScore(1);
        frame.addSecondScore(5);
        frame.addTotal();
        game.addFrame(frame)
      }
    });

    it('can return the current frame', function(){
      expect(game.frame).toEqual(4);
    });

    it('can return number of frames in the scorecard', function(){
      expect(game.scoreTable.length).toEqual(3);
    });

    it('can return the cumulative total', function(){
      expect(game.total).toEqual(18);
    });

  });

  describe('a frame', function(){

    beforeEach(function(){
      game = new Game();
      for(var i = 0; i < 2; i++){
        game.addFrame(frame)
      }
      frame = new Frame(game.frame);
    });

    it('has a frame number equal to the current game frame number', function(){
      expect(frame.frame).toEqual(game.frame);
      expect(frame.frame).toEqual(3);
    });

    it('can return the score from the first turn', function(){
      frame.addFirstScore(1);
      expect(frame.firstTurn).toEqual(1);
    });

    it('can set secondTurn and total if firstTurn is a strike', function(){
      frame.addFirstScore("x");
      expect(frame.secondTurn).toEqual("-");
      expect(frame.total).toEqual(10);
    });

    it('can return the score from the second turn', function(){
      frame.addSecondScore(5);
      expect(frame.secondTurn).toEqual(5);
    });

    it('can add the scores and return the total', function(){
      frame.addFirstScore(1);
      frame.addSecondScore(5);
      frame.addTotal();
      expect(frame.total).toEqual(6);
    });

    it('can add 10 to the frame score for a "x"', function(){
      frame = new Frame(game.frame);
      frame.firstTurn = "x"
      frame.addTotal();
      expect(frame.total).toEqual(10);
    });

    it('can add 10 to the frame score for a "/"', function(){
      frame = new Frame(game.frame);
      frame.firstTurn = "5"
      frame.secondTurn = "/"
      frame.addTotal();
      expect(frame.total).toEqual(10);
    });

  });

  describe('#is_strike', function(){

    beforeEach(function(){
      game = new Game();
      frame = new Frame();
    });

    it('can determine if score 1 is a strike', function(){
      frame.firstTurn = "x"
      expect(is_strike(frame.firstTurn)).toBe(true);
    });
  });

  describe('#is_spare', function(){
    it('can determine if the second turn is a spare', function(){
      frame.secondTurn = "/"
      expect(is_spare(frame.secondTurn)).toBe(true);
    });
  });

  describe('#calculateScores', function(){

    beforeEach(function(){
      game = new Game();
      frame = new Frame(game.frame);
    });

    it('can add the next score to previous frame as a strike bonus', function(){
      frame.addFirstScore('x');
      game.addFrame(frame);
      frame2 = new Frame(game.frame);
      frame2.addFirstScore(5);
      frame2.addSecondScore(2);
      frame2.addTotal();
      game.addFrame(frame2);
      game.calculateScores();
      expect(game.scoreTable[0].total).toEqual(17);
    });

    it('can add the correct bonuses for getting strikes', function(){
      frame.addFirstScore('x');
      game.addFrame(frame);
      game.calculateScores();
      frame2 = new Frame(game.frame);
      frame2.addFirstScore('x');
      game.addFrame(frame2);
      game.calculateScores();
      frame3 = new Frame(game.frame);
      frame3.addFirstScore(3);
      frame3.addSecondScore(4);
      frame3.addTotal();
      game.addFrame(frame3);
      game.calculateScores();
      expect(game.scoreTable[0].total).toEqual(27);
      expect(game.scoreTable[1].total).toEqual(44);
      expect(game.scoreTable[2].total).toEqual(51);
    });

    it('can add strike bonuses but not exceed 30 per frame', function(){
      frame.addFirstScore('x');
      game.addFrame(frame);
      game.calculateScores();
      frame2 = new Frame(game.frame);
      frame2.addFirstScore('x');
      game.addFrame(frame2);
      game.calculateScores();
      frame3 = new Frame(game.frame);
      frame3.addFirstScore("x");
      frame3.addTotal();
      game.addFrame(frame3);
      game.calculateScores();
      frame4 = new Frame(game.frame);
      frame4.addFirstScore("x");
      frame4.addTotal();
      game.addFrame(frame3);
      game.calculateScores();
      expect(game.scoreTable[0].total).toEqual(30);
      expect(game.scoreTable[1].total).toEqual(60);
      expect(game.scoreTable[2].total).toEqual(10); // bonus not yet applied (shouldn't show on table until then)
      expect(game.scoreTable[2].total).toEqual(10); // bonus not yet applied (shouldn't show on table until then)
    });

    it('can add the correct bonuses for getting spares', function(){
      frame.addFirstScore(5);
      frame.addSecondScore('/');
      game.addFrame(frame);
      game.calculateScores();
      frame2 = new Frame(game.frame);
      frame2.addFirstScore(2);
      frame2.addSecondScore('/');
      game.addFrame(frame2);
      game.calculateScores();
      frame3 = new Frame(game.frame);
      frame3.addFirstScore(3);
      frame3.addSecondScore(4);
      frame3.addTotal();
      game.addFrame(frame3);
      game.calculateScores();
      expect(game.scoreTable[0].total).toEqual(12);
      expect(game.scoreTable[1].total).toEqual(25);
      expect(game.scoreTable[2].total).toEqual(32);
    });
  });

});
