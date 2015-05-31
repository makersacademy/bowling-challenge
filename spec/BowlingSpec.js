describe('Bowling', function () {

  beforeEach(function() {
    game = new Game();
  });

  describe('Play a game and', function() {
    it('roll a gutterball', function() {
      game.rollResult(0);
      expect(game.scoresheet[1][1]).toBe(0);
    });

    it('roll two gutterballs', function() {
      var testResults = [0, 0];
      var arrLength = testResults.length;
      for(var i = 0; i < arrLength; i++) {
        game.rollResult(testResults[i]);
      };
      expect(game.scoresheet[1][1]).toBe(0);
      expect(game.scoresheet[1][2]).toBe(0);
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

    it('roll a strike, then 2 & 3, and receive bonus of 5 for first frame (total: 20)', function() {
      var testResults = [10,2,3];
      var arrLength = testResults.length;
      for(var i = 0; i < arrLength; i++) {
        game.rollResult(testResults[i]);
      };
      expect(game.scoresheet[1]['Bonus']).toBe(5);
      expect(game.score).toBe(20);
    });

    it('roll a spare, then 2 & 3, and receive bonus of 2 for first frame (total: 17)', function() {
      var testResults = [5,5,2,3];
      var arrLength = testResults.length;
      for(var i = 0; i < arrLength; i++) {
        game.rollResult(testResults[i]);
      };
      expect(game.scoresheet[1]['Bonus']).toBe(2);
      expect(game.score).toBe(17);
    });

    it('roll a strike, then two more, and receive bonus of 20 for initial frame (total: 50)', function() {
      var testResults = [10,10,10];
      var arrLength = testResults.length;
      for(var i = 0; i < arrLength; i++) {
        game.rollResult(testResults[i]);
      };
      expect(game.scoresheet[1]['Bonus']).toBe(20);
      expect(game.score).toBe(50);
    });

  });

});