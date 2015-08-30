describe('ScoreCard', function(){

  var scoreCard

  describe('Creating a new ScoreCard', function() {

  beforeEach(function() {
    scoreCard = new ScoreCard();
  });

    it('framesMap has no values', function() {
      expect(scoreCard.framesMap.has(1)).toBe(false);
    });

    it('Rolls is equal to zero', function() {
      expect(scoreCard.rollsCount).toBe(0);
    });
  });

  describe('setUp', function() {

  beforeEach(function() {
    scoreCard = new ScoreCard();
    scoreCard.setUp();
  });

    it('framesMap has 10 values', function() {
      expect(scoreCard.framesMap.has(1)).toBe(true);
      expect(scoreCard.framesMap.has(10)).toBe(true);
      expect(scoreCard.framesMap.has(11)).toBe(false);
    });
  });

  describe('takeTurn', function() {

  beforeEach(function() {
    scoreCard = new ScoreCard();
    scoreCard.setUp();
  });

    it('increases the rollsCount by 1 after each turn (except strikes)', function() {
      scoreCard.takeTurn(5);
      expect(scoreCard.rollsCount).toBe(1);
    });

    it('increases the rollsCount by 2 after a strike', function() {
      scoreCard.takeTurn(10);
      expect(scoreCard.rollsCount).toBe(2);
    });

    it('adds the toppled pins to the correct element in framesMap', function() {
      scoreCard.takeTurn(5);
      scoreCard.takeTurn(3);
      scoreCard.takeTurn(5);
      scoreCard.takeTurn(2);
      expect(scoreCard.framesMap.get(1)).toEqual([5,3]);
      expect(scoreCard.framesMap.get(2)).toEqual([5,2]);
    });
  });

  describe('mid-game scoring', function() {

    beforeEach(function(){
      scoreCard = new ScoreCard();
      scoreCard.setUp();
      scoreCard.takeTurn(3);
      scoreCard.takeTurn(4);
      scoreCard.takeTurn(6);
      scoreCard.takeTurn(2);
    });

    it('currentScore correctly accounts for normal scores', function(){
      expect(scoreCard.currentScore()).toEqual(15);
    });

    it('currentScore correctly accounts for spares', function(){
      scoreCard.takeTurn(9);
      scoreCard.takeTurn(1);
      scoreCard.takeTurn(4);
      scoreCard.takeTurn(4);
      expect(scoreCard.currentScore()).toEqual(37);
    });

    it('currentScore correctly accounts for strikes', function(){
      scoreCard.takeTurn(10);
      scoreCard.takeTurn(4);
      scoreCard.takeTurn(4);
      expect(scoreCard.currentScore()).toEqual(41);
    });
  });

});
