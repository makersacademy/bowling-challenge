describe('ScoreAdder', function() {

  var scoreAdder;
  var game;

  beforeEach(function() {
    scoreAdder = new ScoreAdder()
    game = {
      frame1: [],
      frame2: [],
      frame3: [],
      frame4: [],
      frame5: [],
      frame6: [],
      frame7: [],
      frame8: [],
      frame9: [],
      frame10: []
    };
  })

  describe('adds basic scores', function() {

    it('evaluates first ball', function(){
      game.frame1 = [5];
      scoreAdder.updateScores(game);
      expect(scoreAdder.frame1).toEqual(5);
    })

    it('evaluates second ball', function(){
      game.frame1 = [5, 2];
      scoreAdder.updateScores(game);
      expect(scoreAdder.frame1).toEqual(7);
    })

    it('evaluates second frame', function(){
      game.frame1 = [5, 2]
      game.frame2 = [5, 3];
      scoreAdder.updateScores(game);
      expect(scoreAdder.frame2).toEqual(8);
    })

    it('evaluates all basic scores', function(){
      game.frame1 = [5, 2];
      game.frame2 = [5, 3];
      game.frame3 = [5, 3];
      game.frame4 = [10];
      game.frame5 = [5, 3];
      game.frame6 = [5, 3];
      game.frame7 = [1, 3];
      game.frame8 = [5, 3];
      game.frame9 = [0, 10];
      game.frame10 = [5, 5, 5];
      scoreAdder.updateScores(game);
      expect(scoreAdder.frame2).toEqual(8);
      expect(scoreAdder.frame7).toEqual(4);
      expect(scoreAdder.frame8).toEqual(8);
      expect(scoreAdder.frame9).toEqual(10);
      expect(scoreAdder.frame10).toEqual(15);
    })
  })

  describe('adds spare scores', function() {

    it('evaluates a spare', function(){
      game.frame1 = [5, 5];
      game.frame2 = [5, 5];
      scoreAdder.updateScores(game);
      scoreAdder.updateSpares(game);
      expect(scoreAdder.frame1).toEqual(15);
      expect(scoreAdder.frame2).toEqual(10);
    })

    it('evaluates two spares', function(){
      game.frame1 = [5, 5];
      game.frame2 = [5, 5];
      game.frame3 = [5, 5];
      scoreAdder.updateScores(game);
      scoreAdder.updateSpares(game);
      expect(scoreAdder.frame1).toEqual(15);
      expect(scoreAdder.frame2).toEqual(15);
    })
  })

  describe('adds strike scores', function() {

    it('evaluates a strike', function(){
      game.frame1 = [10];
      game.frame2 = [5, 5];
      scoreAdder.updateAll(game);
      expect(scoreAdder.frame1).toEqual(20);
      expect(scoreAdder.frame2).toEqual(10);
    })

    it('evaluates two strikes', function(){
      game.frame1 = [10];
      game.frame2 = [0, 10];
      game.frame3 = [5, 3];
      scoreAdder.updateAll(game);
      expect(scoreAdder.frame1).toEqual(20);
      expect(scoreAdder.frame2).toEqual(15);
    })

    it('evaluates tenthframe', function(){
      game.frame10 = [10, 5, 2];
      scoreAdder.updateAll(game);
      expect(scoreAdder.frame10).toEqual(17);
    })

    it('evaluates tenthframe', function(){
      game.frame10 = [10, 10, 2];
      scoreAdder.updateAll(game);
      expect(scoreAdder.frame10).toEqual(22);
    })

    it('evaluates all scores', function(){
      game.frame1 = [0, 2];
      game.frame2 = [7, 3];
      game.frame3 = [10];
      game.frame4 = [5, 3];
      game.frame5 = [10];
      game.frame6 = [10];
      game.frame7 = [7, 3];
      game.frame8 = [10];
      game.frame9 = [10];
      game.frame10 = [7, 3, 5];
      scoreAdder.updateAll(game);
      expect(scoreAdder.frame2).toEqual(20);
      expect(scoreAdder.frame3).toEqual(18);
      expect(scoreAdder.frame8).toEqual(27);
      expect(scoreAdder.frame9).toEqual(20);
      expect(scoreAdder.frame10).toEqual(15);
    })

    it('scores a perfect game', function(){
      game.frame1 = [10];
      game.frame2 = [10];
      game.frame3 = [10];
      game.frame4 = [10];
      game.frame5 = [10];
      game.frame6 = [10];
      game.frame7 = [10];
      game.frame8 = [10];
      game.frame9 = [10];
      game.frame10 = [10, 10, 10];
      scoreAdder.updateAll(game);
      expect(scoreAdder.total).toEqual(300);
      console.log(scoreAdder)
    })
  })
})
