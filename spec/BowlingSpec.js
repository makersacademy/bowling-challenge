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
      expect(game.score).toBe(0);
    });

    it('roll a strike in one frame, then a 2 then 3, and receive bonus of 5 for former frame', function() {
      var testResults = [10,2,3];
      var arrLength = testResults.length;
      for(var i = 0; i < arrLength; i++) {
        game.rollResult(testResults[i]);
      };
      expect(game.scoresheet['Frame 1']['Bonus']).toBe(5);
    });

    it('roll a spare in one frame, then a 2 then 3, and receive bonus of 2 for former frame', function() {
      var testResults = [5,5,2,3];
      var arrLength = testResults.length;
      for(var i = 0; i < arrLength; i++) {
        game.rollResult(testResults[i]);
      };
      expect(game.scoresheet['Frame 1']['Bonus']).toBe(2);
    });
  });

});