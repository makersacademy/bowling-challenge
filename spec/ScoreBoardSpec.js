describe('ScoreBoard', function() {

  var scoreBoard;

  beforeEach(function() {
    scoreBoard = new ScoreBoard()
  })

  describe('adds scores', function() {
    it('parses first ball', function(){
      game = {game: {frame1: [5]}};
      scoreBoard.updateScores(game)
      expect(scoreBoard.frame1).toEqual(5);
    })

    it('parses second ball', function(){
      game = {game: {frame1: [5, 2]}};
      scoreBoard.updateScores(game)
      expect(scoreBoard.frame1).toEqual(7);
    })

    it('parses second frame', function(){
      game = {game: {frame1: [5, 2], frame2: [5, 3]}};
      scoreBoard.updateScores(game)
      expect(scoreBoard.frame2).toEqual(8);
    })
  })
})
