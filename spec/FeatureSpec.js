describe ('Feature Tests', function() {

  beforeEach(function(){
    scorecard = new Scorecard();
  });

  describe('a gutter game', function() {
    it('has a score of 0', function() {
      for (var i = 0; i < 10; i++) {
        scorecard.rollOne(0)
        scorecard.rollTwo(0)
      }
      expect(scorecard.totalScore).toEqual(0)
    });
  });

  describe('a game with no spares or strikes and the same score each roll', function() {
    it('has a score of 20', function() {
      for (var i = 0; i < 10; i++) {
        scorecard.rollOne(1)
        scorecard.rollTwo(1)
      }
      expect(scorecard.totalScore).toEqual(20)
    });
  });

  describe('a game with no spares or strikes but different scores each roll', function() {
    it('has a score of 51', function() {
        scorecard.rollOne(1)
        scorecard.rollTwo(3)
        scorecard.rollOne(4)
        scorecard.rollTwo(2)
        scorecard.rollOne(3)
        scorecard.rollTwo(3)
        scorecard.rollOne(7)
        scorecard.rollTwo(0)
        scorecard.rollOne(0)
        scorecard.rollTwo(1)
        scorecard.rollOne(5)
        scorecard.rollTwo(3)
        scorecard.rollOne(1)
        scorecard.rollTwo(1)
        scorecard.rollOne(2)
        scorecard.rollTwo(1)
        scorecard.rollOne(5)
        scorecard.rollTwo(0)
        scorecard.rollOne(8)
        scorecard.rollTwo(1)
      expect(scorecard.totalScore).toEqual(51)
    });
  });

  describe('a game with one spare in the first round', function() {
    it('has a score of 29', function() {
      scorecard.rollOne(4)
      scorecard.rollTwo(6)
      for (var i = 0; i < 9; i++) {
        scorecard.rollOne(1)
        scorecard.rollTwo(1)
      }
      expect(scorecard.totalScore).toEqual(29)
    });
  });

  describe('a game with multiple spares', function() {
    it('has a score of 38', function() {
      scorecard.rollOne(4)
      scorecard.rollTwo(6)
      for (var i = 0; i < 3; i++) {
        scorecard.rollOne(1)
        scorecard.rollTwo(1)
      }
      scorecard.rollOne(4)
      scorecard.rollTwo(6)
      for (var i = 0; i < 5; i++) {
        scorecard.rollOne(1)
        scorecard.rollTwo(1)
      }
      expect(scorecard.totalScore).toEqual(38)
    });
  });

  describe('a game with a strike', function() {
    it('has a score of 38', function() {
      scorecard.rollOne(10)
      for (var i = 0; i < 9; i++) {
        scorecard.rollOne(1)
        scorecard.rollTwo(1)
      }
      expect(scorecard.totalScore).toEqual(30)
    });
  });

  // describe('a perfect game', function() {
  //   it('has a score of 300', function() {
  //     for (var i = 0; i < 11; i++) {
  //       scorecard.rollOne(10)
  //     }
  //     expect(scorecard.totalScore).toEqual(300)
  //   });
  // });
});
