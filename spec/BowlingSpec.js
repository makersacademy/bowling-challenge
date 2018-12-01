

describe('Bowling', function(){

  describe('a game', function(){
    beforeEach(function(){
      game = new Game();
      frame = new Frame(game.frame);
      //Add 2 frames
      for(var i = 0; i < 2; i++){
        game.addFrame(frame)
      }
    });

    it('can return the current frame', function(){
      expect(game.frame).toEqual(3);
    });

    it('can return number of frames in the scorecard', function(){
      expect(game.scoreTable.length).toEqual(2);
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

  });

  describe('is_strike', function(){

    beforeEach(function(){
      game = new Game();
      frame = new Frame();
    });

    it('can determine if score 1 is a strike', function(){
      frame.firstTurn = "x"
      expect(is_strike(frame.firstTurn)).toBe(true);
    });
  });

  describe('is_spare', function(){
    it('can determine if the second turn is a spare', function(){
      frame.secondTurn = "/"
      expect(is_spare(frame.secondTurn)).toBe(true);
    });
  });

});
