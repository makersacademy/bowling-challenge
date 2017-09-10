describe ('Game', function() {

  describe ('Frame spec', function() {

    beforeEach(function() {
      game = new Game();
    });

    // it('frames are stored as an array', function() {
    //   expect(game.scoreTable instanceof Array).toBeTruthy
    // });

     it('there are 10 frames in a game', function() {
      expect(game.scoreTable.length).toBe(10)
    });

    // it('a frame can have up to 2 rolls', function() {
    //   expect(game.frame.length).toBe(2)
    // });

  });


  describe ('Roll Spec', function() {

    beforeEach(function() {
      game = new Game();
    });

    it('player can roll', function() {
      expect(game.allowedToRoll).toBe(true)
    });

    it('rolling gives a score between 0 and 10', function() {
      game.roll()
      // expect(game.roll).toBeWithinRange(0, 10);
      expect(0 <= game.rollNo <= 10).toBeTruthy();
    });

    it('stores the first roll in the frame array', function() {
      game.roll()
      expect(game.frame[0] >= 0 && game.frame[0] <= 10).toBeTruthy();
    });





  });


  describe ('Game Spec', function() {

    beforeEach(function() {
      game = new Game();
    });

    it('score starts at 0', function() {
      expect(game.score).toBe(0)
    });

  });
  
  

  // it('is a gutter game if score at end = 0', function() {
  //   // game.score = 0
  //   // game.frameNum = 10
  //   expect(game.finalScore).toBe('Your total score is 0- GUTTER GAME!')
  // });

});