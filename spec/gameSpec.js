describe('Game', function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('#rollBall', function(){

    describe('#readScore', function(){
      it('reads the frame using frame count and roll count', function() {
        game.rollBall(5);
        game.rollBall(3);
        frame = 1;
        roll = 2;
        expect(game.readScore(frame, roll)).toEqual(3);
      });
    });

    describe('#rollCheck', function(){
      it('raises an error if roll value is not a number from 1 to 10', function() {
        expect(function() {game.rollBall('a');}).toThrow('Roll value is not legal, input a value from 1 to 10');
      });

      it('raises an error if roll value of first roll is too great', function() {
        expect(function() {game.rollBall(11);}).toThrow('Roll value is not legal, input a value from 1 to 10');
      });

      it('raises an error if roll value of second roll is too great', function() {
        game.rollBall(5);
        expect(function() {game.rollBall(6);}).toThrow('Roll count over the two roles in this frame is too high, input a legal value');
      });

      it('correctly lets someone have a 3rd roll in 10th round', function() {
        game.allFrames = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[5,5]];
        expect(function() {game.rollBall(5);}).not.toThrow('Roll count is too high, input a legal value');
      });

      it('if game is over and no bonus throw, throw error', function() {
        game.allFrames = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
        game.rollBall(5);
        game.rollBall(4);
        expect(function() {game.rollBall(5);}).toThrow('Game is over!');
      });

      it('if game is over with bonus throw, throw error', function() {
        game.allFrames = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
        game.rollBall(5);
        game.rollBall(5);
        game.rollBall(5);
        expect(function() {game.rollBall(5);}).toThrow('Game is over!');
      });

    });

    describe('#isStrike', function(){
      it('returns true if it is a strike', function() {
        expect(game.isStrike(10)).toBe(true);
      });

      it('returns false if it is NOT a strike', function() {
        expect(game.isStrike(5)).toBe(false);
      });
    });

    describe('#_isSecondRollOfFrame', function(){
      it('reads the frame using frame count and roll count', function() {
        game.rollBall(5);
        expect(game._isSecondRollOfFrame()).toBe(true);
      });

      it('reads the frame using frame count and roll count', function() {
        game.rollBall(5);
        game.rollBall(5);
        expect(game._isSecondRollOfFrame()).toBe(false);
      });
    });

    describe('#rollBall', function(){

      it('adds the first roll of a game to allFrames in an array', function() {
        game.rollBall(5);
        expect(game.readScore(1,1)).toEqual(5);
      });

      it('adds the second roll of a game to allFrames in an array', function() {
        game.rollBall(5);
        game.rollBall(3);
        expect(game.readScore(1,2)).toEqual(3);
      });

      it('if a strike, skip to next frame', function() {
        game.rollBall(10);
        game.rollBall(3);
        expect(game.readScore(2,1)).toEqual(3);
      });

      it('10th frame: stores the first score', function(){
        game.allFrames = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
        game.rollBall(3);
        expect(game.readScore(10,1)).toEqual(3);
      });

      it('10th frame: on second score - game over if not a spare/stike', function(){
        game.allFrames = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
        game.rollBall(3);
        game.rollBall(3);
        expect(game.gameOver).toBe(true);
      });

      it('10th frame: if a strike = bonus ball', function(){
        game.allFrames = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
        game.rollBall(10);
        game.rollBall(3);
        game.rollBall(3);
        expect(game.readScore(10,3)).toEqual(3);
      });

      it('10th frame: if a spare = bonus ball', function(){
        game.allFrames = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
        game.rollBall(4);
        game.rollBall(6);
        game.rollBall(3);
        expect(game.readScore(10,3)).toEqual(3);
      });

    });

  });
});
