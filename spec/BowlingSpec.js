describe('Bowling', function () {

  beforeEach(function() {
    game = new Game();
  });

  describe('Play a game and', function() {
    it('roll a gutterball', function() {
      game.rollResult(0);
      expect(game.scoresheet['Frame 1']['Roll 1']).toBe(0);
    });

    it('roll two gutterballs', function() {
      var testResults = [0, 0];
      var arrLength = testResults.length;
      for(var i = 0; i < arrLength; i++) {
        game.rollResult(testResults[i]);
      };
      expect(game.scoresheet['Frame 1']['Roll 1']).toBe(0);
      expect(game.scoresheet['Frame 1']['Roll 2']).toBe(0);
    });

    it('move onto next frame after rolling two gutterballs', function() {
      var testResults = [0,0];
      var arrLength = testResults.length;
      for(var i = 0; i < arrLength; i++) {
        game.rollResult(testResults[i]);
      };
      expect(game.frameCount).toBe(2);
    });

    it('roll only gutterballs and receive final score of 0', function() {
      var testResults = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      var arrLength = testResults.length;
      for(var i = 0; i < arrLength; i++) {
        game.rollResult(testResults[i]);
      };
      expect(game.scoresheet['Frame 10']['Roll 2']).toBe(0);
      expect(game.score).toBe(0);
    });
  });

});