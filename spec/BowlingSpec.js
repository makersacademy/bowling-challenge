describe('Bowling', function () {

  beforeEach(function() {
    game = new Game();
  });

  describe('Play a game and', function() {
    it('roll a gutterball', function() {
      rollResults([0]);
      expect(game.scoresheet[1][1]).toBe(0);
    });

    it('roll two gutterballs', function() {
      rollResults([0, 0]);
      expect(game.scoresheet[1][1]).toBe(0);
      expect(game.scoresheet[1][2]).toBe(0);
    });

    it('move onto next frame after rolling two gutterballs', function() {
      rollResults([0,0]);
      expect(game.frameCount).toBe(2);
    });

    it('roll 20 gutterballs (total: 0)', function() {
      rollResults([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
      expect(game.score).toBe(0);
    });

    it('roll a strike, then 2 & 3, and receive bonus of 5 for first frame (total: 20)', function() {
      rollResults([10,2,3]);
      expect(game.scoresheet[1]['Bonus']).toBe(5);
      expect(game.score).toBe(20);
    });

    it('roll a spare, then 2 & 3, and receive bonus of 2 for first frame (total: 17)', function() {
      rollResults([5,5,2,3]);
      expect(game.scoresheet[1]['Bonus']).toBe(2);
      expect(game.score).toBe(17);
    });

    it('roll a strike, then two more, and receive bonus of 20 for initial frame (total: 50)', function() {
      rollResults([10,10,10]);
      expect(game.scoresheet[1]['Bonus']).toBe(20);
      expect(game.score).toBe(50);
    });

    it('roll a perfect game (total: 300)', function() {
      rollResults([10,10,10,10,10,10,10,10,10,10,10,10]);
      expect(game.score).toBe(300);
    });

    it('roll all strikes but 1, 9 and 10 in final frame (total: 271)', function() {
      rollResults([10,10,10,10,10,10,10,10,10,1,9,10]);
      expect(game.score).toBe(271);
    });

    it('roll all strikes but 1 and 1 in final frame (total: 245)', function() {
      rollResults([10,10,10,10,10,10,10,10,10,1,1]);
      expect(game.score).toBe(245);
    });

    it('roll nine frames and see game is not yet over', function() {
      rollResults([10,10,10,10,10,10,10,10,10]);
      expect(game.end).toBe(false);
    });

    it('roll nine frames and then 5 and 5 in final frame and see game is not yet over', function() {
      rollResults([10,10,10,10,10,10,10,10,10,5,5]);
      expect(game.end).toBe(false);
    });

    it('roll ten frames (1 and 1 in final frame) and see game is over', function () {
      rollResults([10,10,10,10,10,10,10,10,10,1,1]);
      expect(game.end).toBe(true);
    });

    it('roll ten frames (5, 5 and 10 in final frame) and see game is over', function() {
      rollResults([10,10,10,10,10,10,10,10,10,5,5,10]);
      expect(game.end).toBe(true);
    });

    it('roll ten frames (10, 10 and 10 in final frame) and see game is over', function () {
      rollResults([10,10,10,10,10,10,10,10,10,10,10,10]);
      expect(game.end).toBe(true);
    });

  });

  var rollResults = function(arr) {
    var testResults = arr;
    var arrLength = testResults.length;
    for(var i = 0; i < arrLength; i++) {
      game.rollResult(testResults[i]);
    };
  };

});