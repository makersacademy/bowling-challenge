describe('Features Spec', function(){

  describe('User Story 1:', function(){
    it('Can record a complete Gutter Game', function(){
      var game = new Bowling();
      for (var i = 1; i < 11; i++){
        game.writeFrameOne(0);
        game.writeFrameTwo(0);
      };
      expect(game.totalScore).toEqual(0);
      expect(game.isFinished()).toEqual(true); 
    }); 
  });

  describe('User Story 2:', function(){
    it('Can record a single frame', function(){
      var game = new Bowling();
      game.writeFrameOne(5);
      game.writeFrameTwo(2);
      expect(game.totalScore).toEqual(7);
    }); 
  });

  describe('User Story 3:', function(){
    it('Can record two frames and return total score', function(){
      var game = new Bowling();
      game.writeFrameOne(2);
      game.writeFrameTwo(3);
      game.writeFrameOne(6);
      game.writeFrameTwo(2);
      expect(game.totalScore).toEqual(13);
    });
  });

  describe('User Story 4:', function(){
    it('Can account for spares and add the bonus', function(){
      var game = new Bowling();
      game.writeFrameOne(2);
      game.writeFrameTwo(8);
      game.writeFrameOne(5);
      game.writeFrameTwo(2);
      expect(game.totalScore).toEqual(22);
    }); 
  });

  describe('User Story 5:', function(){
    it('Can account for strikes and add the bonus', function(){
      var game = new Bowling();
      game.writeFrameOne(10);
      game.writeFrameOne(3);
      game.writeFrameTwo(5);
      expect(game.totalScore).toEqual(26);
    }); 
  });

  describe('User Story 6:', function(){
    it('Gives a third frame if the tenth frame has a spare', function(){
      var game = new Bowling();
      for (var i = 1; i < 10; i++){
        game.writeFrameOne(2);
        game.writeFrameTwo(3);
      } 
      game.writeFrameOne(5);
      game.writeFrameTwo(5);
      game.writeFinalFrame(3);
      expect(game.isFinished()).toEqual(true);
      expect(game.totalScore).toEqual(61);
    });  
  });
   describe('Maximum Points Game', function(){
    it('Returns a maximum score of 300 for 12 consecutive strikes', function(){
      var game = new Bowling();
      for (var i = 1; i < 11; i++){
        game.writeFrameOne(10);
      } 
      expect(game.isFinished()).toEqual(true);
      expect(game.totalScore).toEqual(300);
    });  
  });
}); 
