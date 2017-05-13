describe('ScoreAdder', function() {

  var scoreAdder;

  beforeEach(function() {
    scoreAdder = new ScoreAdder()
  })

  describe('adds basic scores', function() {

    it('evaluates first ball', function(){
      game = {frame1: [5]};
      scoreAdder.updateScores(game)
      expect(scoreAdder.frame1).toEqual(5);
    })

    it('evaluates second ball', function(){
      game = {frame1: [5, 2]};
      scoreAdder.updateScores(game)
      expect(scoreAdder.frame1).toEqual(7);
    })

    it('evaluates second frame', function(){
      game = {frame1: [5, 2], frame2: [5, 3]};
      scoreAdder.updateScores(game)
      expect(scoreAdder.frame2).toEqual(8);
    })

    it('evaluates whole game', function(){
      game = {frame1: [5, 2],
        frame2: [5, 3],
        frame3: [5, 3],
        frame4: [10],
        frame5: [5, 3],
        frame6: [5, 3],
        frame7: [1, 3],
        frame8: [5, 3],
        frame9: [0, 10],
        frame10: [5, 5, 5]
      };
      scoreAdder.updateScores(game)
      expect(scoreAdder.frame2).toEqual(8);
      expect(scoreAdder.frame7).toEqual(4);
      expect(scoreAdder.frame9).toEqual(10);
      expect(scoreAdder.frame9).toEqual(10);
      expect(scoreAdder.frame10).toEqual(15);
    })
  })

  describe('adds spare scores', function() {

    it('evaluates a spare', function(){
      game = {frame1: [5, 5], frame2: [5, 5]};
      scoreAdder.updateScores(game)
      scoreAdder.updateSpares(game)
      expect(scoreAdder.frame1).toEqual(15);
      expect(scoreAdder.frame2).toEqual(10);
    })

    it('evaluates two spares', function(){
      game = {frame1: [5, 5], frame2: [5, 5], frame3: [5, 5]};
      scoreAdder.updateScores(game)
      scoreAdder.updateSpares(game)
      expect(scoreAdder.frame1).toEqual(15);
      expect(scoreAdder.frame2).toEqual(15);
    })
  })
})
