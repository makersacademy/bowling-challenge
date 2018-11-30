describe('Bowling', function(){

  describe('a game', function(){
    beforeEach(function(){
      game = new Game();
      frame = new Frame();
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
      frame = new Frame();
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

});
